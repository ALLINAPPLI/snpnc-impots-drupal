<template>
  <main>

  <slot v-if="edit">
    <p>{{ field.help }}</p>
    <b-row>
      <b-col>
        <b-form-group label="Type de rotation">
          <b-form-radio-group
            v-model="zone"
            :options="zoneList"
            value-field="key"
            text-field="label">
          </b-form-radio-group>
        </b-form-group>
      </b-col>

      <b-col>
        <b-form-group label="Sélectionnez la date de début">
          <b-form-datepicker
            id="start-date"
            :min="startDateMin"
            :max="startDateMax"
            v-model="startDate"
            locale="fr"
            value-as-date>
          </b-form-datepicker>
        </b-form-group>
      </b-col>

      <b-col>
        <b-form-group label="Sélectionnez la date de fin">
        <b-form-datepicker
          id="end-date"
          :min="endDateMin"
          :max="endDateMax"
          v-model="endDate"
          locale="fr"
          value-as-date>
        </b-form-datepicker>
        </b-form-group>
      </b-col>

    </b-row>

    <b-row cols="1" cols-sm="2" cols-md="4">
      <b-col v-for="(pays, index) in cRotationPays" :key="pays.value">
        <b-form-group :label="(index + 1) + ' ON'">
          <b-form-select v-model="cRotationPays[index]" :options="paysListFiltered" :key="cRotationPaysKey"></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row align-h="between">
      <b-col><b-form-group>{{ detail }}</b-form-group></b-col>
      <b-col>
        <b-form-group>
          <b-button
            :disabled="canAddRotation"
            id="add-rotation-button"
            @click="addRotation">
            Ajouter rotation
          </b-button>
        </b-form-group>
      </b-col>
    </b-row>
    <b-form-group class="mt-2">
      <label for="idemnites">Idemnités journalières</label>
      <b-table id="idemnites" :items="rotationList" :fields="rotationListFields" striped small sticky-header>
        <template v-slot:cell(value)="data">{{ data.item.value }} €</template>
        <template v-slot:row-details="data">
          <div v-html="data.item.comment"></div>
        </template>
        <template v-slot:cell(action)="data">
          <b-button-group>
            <b-button size="sm" @click="removeRotation(data.index)">
              Supprimer
            </b-button>
            <b-button size="sm" @click="data.toggleDetails">
              {{ data.detailsShowing ? 'Cacher' : 'Afficher'}} calcul
            </b-button>
          </b-button-group>
        </template>
      </b-table>
    </b-form-group>

  </slot>

  <slot v-else>
    <b-row>
      <b-col>
        {{ field.description }}
      </b-col>
      <b-col class="col-md-auto">
        <b-button @click="detailsShowing = !detailsShowing">
        {{ detailsShowing ? 'Cacher' : 'Afficher'}} les détails
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-2">
        <b-collapse :id="field.id + '-details'" v-model="detailsShowing">
          <b-table :id="field.id + '-table'" :items="rotationList" :fields="rotationListFields" small sticky-header>
            <template v-slot:cell(value)="data">{{ data.item.value }} €</template>
            <template v-slot:cell(comment)="data">
              <div v-html="data.item.comment"></div>
            </template>
          </b-table>
        </b-collapse>
      </b-col>
    </b-row>
  </slot>

  </main>
</template>

<script>

import fieldsMixin from '../model/fieldsMixin';
import modelData from '../model/data';

export default {
  mixins: [fieldsMixin],
  name: "ImdenitesJournalieres",
  props: {
    edit: Boolean,
    value: Object,
    field: Object
  },
  data() {
    // let paysList = modelData.idjournalieres.map(e => e.pays);
    let paysList = [];
    const map = new Map();
    for (const item of modelData.idjournalieres) {
      if(!map.has(item.pays)) {
        map.set(item.pays, true);    // set any value to Map
        paysList.push({ pays: item.pays, zone: item.zone});
      }
    }

    // Set the default zone to E
    let zone = "E";
    let paysListFiltered = paysList
      .filter(item => item.zone == zone)
      .map(item => {
        return { value: item.pays, text: item.pays }
    });
    // add placeholder item to list
    paysListFiltered.unshift({ value: "null", text: "Sélectionnez le pays", disabled: true});


    let rotationListFields;

    if (this.edit) {
      rotationListFields = [
        { key: 'startDate', label: 'Date début'},
        { key: 'endDate', label: 'Date fin'},
        { key: 'value', label: 'Idemnité'},
        { key: 'action', label: 'Actions'},
      ];
    } else {
      rotationListFields = [
        { key: 'startDate', label: 'Début'},
        { key: 'endDate', label: 'Fin'},
        { key: 'comment', label: 'Calcul'},
        { key: 'value', label: 'Montant'},
      ];
    }

    return {
      paysList,
      paysListFiltered,
      startDate: null,
      startDateMin: new Date(modelData.year, 0, 1),
      startDateMax: new Date(modelData.year, 11, 31),
      endDate: null,
      endDateMin: null,
      endDateMax: null,
      detail: "",
      zone,
      zoneList: [ modelData.zoneEurope, modelData.zoneMonde ],
      cRotationData: [],
      cRotationPays: ["null"],
      cRotationPaysKey: 0,
      rotationListFields,
      rotationList : [],
      detailsShowing: false,
    }
  },
  watch: {
    zone() {

      this.paysListFiltered = this.paysList
        .filter(item => item.zone == this.zone)
        .map(item => {
          return { value: item.pays, text: item.pays }
      });

      // add placeholder item to list
      this.paysListFiltered.unshift({ value: "null", text: "Sélectionnez le pays", disabled: true});

      this.setupRotation();
    },
    startDate() {
      this.setupRotation();
    },
    endDate() {
      this.setupRotation();
    },
    cRotationPays() {
      // Fetch rotation from data
      this.cRotationData = this.cRotationPays.map((e, index) => {
        if (e === "null") {
          return;
        }
        // filter dated rotations (NEW-YORK, NEW-YORK ...)
        let dateOfRotation = this.addDays(this.startDate, index);
        let item = modelData.idjournalieres.filter(i => i.pays === e);
        if (item.length > 1) {
          let datedItem = false;
          for (const j of item) {
            if (j.du !== "" && dateOfRotation >= this.dateFromStr(j.du)) {
              datedItem = j;
            } else if(datedItem === false && j.du === "") {
              datedItem = j;
            }
          }
          item = datedItem;
        } else {
          item = item[0];
        }
        //
        // by default zone is Europe, but if even 1 country is Monde, zone is Monde
        if (item.zone === modelData.zoneMonde.key && this.zone != item.zone) {
          this.zone = item.zone;
        }
        return item;
      });
    }
  },
  computed: {
    canAddRotation() {
      // add rotation button is disabled till all rotation pays has been filled.
      return this.cRotationPays.filter(el => el === "null").length !== 0;
    },
    isZoneEurope() {
      return this.zone === modelData.zoneEurope.key;
    }
  },
  methods: {
    initRotation() {
      if (this.rotationList.length == 0) {
        // set date to 1st january.
        this.startDate = new Date(modelData.year, 0, 1);
      } else {
        let lastDate = this.dateFromStr(this.rotationList[this.rotationList.length - 1].endDate);
        // set start date to end date + 1
        this.startDate = new Date(this.addDays(lastDate, 1));
      }
      this.cRotationPays = ["null"];
      this.cRotationData = new Array();
      this.zone = modelData.zoneEurope.key;
    },
    setupRotation() {
      let endDateMin, endDateMax;

      // if zone monde, min end date is start date + 1
      if (this.zone === modelData.zoneMonde.key) {
        // Set end date.
        endDateMin = this.addDays(this.startDate, 1);
      } else {
        // Set end date.
        endDateMin = new Date(this.startDate);
      }

      // company rules
      if (this.$store.state.global.com === "af") {
        endDateMax = this.addDays(endDateMin, 20);
      } else {
        endDateMax = this.addDays(endDateMin, 7);
      }

      // update current end date, if needed
      if (endDateMin > this.endDate || endDateMax < this.endDate) {
        this.endDate = endDateMin;
      }

      // update end date min, if needed
      if (this.endDateMin != endDateMin) {
        this.endDateMin = endDateMin;
      }
      // update end date max, if needed
      if (this.endDateMax != endDateMax) {
        this.endDateMax = endDateMax;
      }

      let rotations = this.dateDiffDays(this.startDate, this.endDate);
      // si zone europe et le même jour (0 jours) - ajouter 1 jour
      // si zone monde et 1 rotation -  ajouter 1 jour
      if ( (this.isZoneEurope && rotations == 0) || (!this.isZoneEurope && rotations > 0)) {
        rotations++;
      }
      this.cRotationPays = new Array(rotations).fill("null");
      // force update of selects.
      this.cRotationPaysKey++;
    },
    addRotation() {

      let startDate = this.dateToStr(this.startDate);
      let endDate = this.dateToStr(this.endDate);
      let comment = "";
      let value = 0;
      let paysComment = "Pays: ";
      let valueComment = "Idemnité: ";
      var i;

      let rotations = this.cRotationData.length;

      // Zone Europe
      if (this.isZoneEurope) {
        comment = "Zone Europe\n";

        // rotation dans la même journée
        if (0 === this.dateDiffDays(this.startDate, this.endDate)) {

          value = Math.round(modelData.idemniteZoneEurope / 2);
          paysComment  += this.cRotationData[0].pays;
          valueComment += `${modelData.idemniteZoneEurope} / 2 = ${value}`;
        } else {


          // une seule rotation en zone europe
          if (1 === rotations) {

            value = Math.round(this.cRotationData[0].idemnite * 1.5);
            paysComment  += this.cRotationData[0].pays;
            valueComment += `${this.cRotationData[0].idemnite} * 1.5 = ${value}`;
          } else {

            // pour toutes les rotations sauf la dernière.
            for (i = 0; i < rotations - 1; i++) {
              value        += Math.round(this.cRotationData[i].idemnite);
              paysComment  += this.cRotationData[i].pays + ', ';
              valueComment += this.cRotationData[i].idemnite + ' + ';
            }

            // la dernière rotation.
            value        += Math.round((1.5 * this.cRotationData[i].idemnite));
            valueComment += `1,5 x ${this.cRotationData[i].idemnite} = ${value}`;
            paysComment  += this.cRotationData[i].pays;
          }
        }
        comment += `${paysComment}\n${valueComment}`;
      // Zone Monde
      } else {
        comment += 'Zone Monde\n';

        if (1 === rotations) {
          value        += 2 * this.cRotationData[0].idemnite;
          valueComment += `2 x ${this.cRotationData[0].idemnite} = ${value}`;
          paysComment  += this.cRotationData[0].pays;
        } else {
            // pour toutes les rotations sauf la dernière.
            for (i = 0; i < rotations - 1; i++) {
              value        += Math.round(this.cRotationData[i].idemnite);
              paysComment  += this.cRotationData[i].pays + ', ';
              valueComment += this.cRotationData[i].idemnite + ' + ';
            }
            // la dernière rotation.
            value        += Math.round(this.cRotationData[i].idemnite);
            paysComment  += this.cRotationData[i].pays;
            valueComment += `${this.cRotationData[i].idemnite} = ${value}`;
        }

        comment += `${paysComment}\n${valueComment}`;
      }

      value = Math.round(value);

      this.rotationList.push({ startDate, endDate, comment, value });
      // update store value
      this.updateValue();
      // init current rotation.
      this.initRotation();
    },
    removeRotation(index) {
      this.rotationList.splice(index, 1);
      this.updateValue();
    },
    dateToStr(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (month < 10) {
          month = "0" + month;
        }
        if (day < 10) {
          day = "0" + day;
        }
        return day + '/' + month + '/' + year;
    },
    dateFromStr(date) {
      date = date.split('/');
      return new Date(date[2], (date[1] - 1) , date[0]);
    },
    addDays(date, days) {
      let result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },
    dateDiffDays(start, end) {
      let diffTime = Math.abs(end - start);

      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    },
    updateValue() {
      this.$emit('input', this.rotationList);
    },
  },
  mounted() {
    this.initRotation();
    this.rotationList = this.value.items;
  }
}
</script>