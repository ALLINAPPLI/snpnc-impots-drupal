<template>
  <main>
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
          <b-form-select v-model="cRotationPays[index]" :options="paysList" :key="cRotationPaysKey"></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row align-h="between">
      <b-col>
        <b-form-group>{{ detail }}</b-form-group>
      </b-col>

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
      <label for="idemnites">Idemnité journalières</label>
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
  </main>
</template>

<script>

import fieldsMixin from '../model/fieldsMixin';
import fields from '../model/fields';
import modelData from '../model/data';

export default {
  mixins: [fieldsMixin],
  name: "ImdenitesJournalieres",
  props: {
    edit: Boolean,
    value: Array,
    field: Object
  },
  data() {
    let paysList = modelData.idjournalieres.map(e => { return { value: e.pays , text: e.pays }});
    // make paysList unique.
    paysList = [...new Set(paysList)];
    // sort payList
    paysList.sort(function(a, b) {
      var paysA = a.value;
      var paysB = b.value;
      if (paysA < paysB) { return -1; }
      if (paysA > paysB) { return 1;  }
      // equal
      return 0;
    });

    // add placeholder item to list
    paysList.unshift({ value: "null", text: "Sélectionnez le pays", disabled: true});

    const rotationListFields = [
      { key: 'startDate', label: 'Date début'},
      { key: 'endDate', label: 'Date fin'},
      { key: 'value', label: 'Idemnité'},
      { key: 'action', label: 'Actions'},
    ];

    return {
      paysList,
      startDate: null,
      endDate: null,
      endDateMin: null,
      endDateMax: null,
      detail: "",
      zone: null,
      zoneList: [ modelData.zoneEurope, modelData.zoneMonde ],
      cRotationData: [],
      cRotationPays: ["null"],
      cRotationPaysKey: 0,
      rotationListFields,
      rotationList : [],
      f: fields
    }
  },
  watch: {
    zone() {
      this.setupRotation();
    },
    startDate() {
      this.setupRotation();
    },
    endDate() {
      this.setupRotation();
    },
    cRotationPays() {
      this.cRotationData = this.cRotationPays.map(e => {
        if (e === "null") {
          return;
        }
        let item = modelData.idjournalieres.find(i => i.pays === e);
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
        endDateMin = this.addDays(this.startDate, 1);
      } else {
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
        comment = "Zone Europe<br/>";

        // rotation dans la même journée
        if (0 === this.dateDiffDays(this.startDate, this.endDate)) {

          value = Math.round(modelData.idemniteZoneEurope / 2);
          paysComment  += this.cRotationData[0].pays;
          valueComment += `${modelData.idemniteZoneEurope} / 2 = ${value}`;
        } else {

          // une seule rotation en zone europe
          if (1 === rotations) {

            value = this.cRotationData[0].idemnite * 1.5;
            paysComment  += this.cRotationData[0].pays;
            valueComment += `${this.cRotationData[0].idemnite} * 1.5 = ${value}`;
          } else {

            // pour toutes les rotations sauf la dernière.
            for (i = 0; i < rotations - 1; i++) {
              value        += this.cRotationData[i].idemnite;
              paysComment  += this.cRotationData[i].pays + ', ';
              valueComment += this.cRotationData[i].idemnite + ' + ';
            }

            // la dernière rotation.
            value        += (1.5 * this.cRotationData[i].idemnite);
            valueComment += `1,5 x ${this.cRotationData[i].idemnite} = ${value}`;
            paysComment  += this.cRotationData[i].pays;
          }
        }
        comment += `${paysComment}<br/>${valueComment}`;
      // Zone Monde
      } else {
        comment += 'Zone Monde<br/>';

        if (1 === rotations) {
          value        += 2 * this.cRotationData[0].idemnite;
          valueComment += `2 x ${this.cRotationData[0].idemnite} = ${value}`;
          paysComment  += this.cRotationData[0].pays;
        } else {
            // pour toutes les rotations sauf la dernière.
            for (i = 0; i < rotations - 1; i++) {
              value        += this.cRotationData[i].idemnite;
              paysComment  += this.cRotationData[i].pays + ', ';
              valueComment += this.cRotationData[i].idemnite + ' + ';
            }
            // la dernière rotation.
            value        += this.cRotationData[i].idemnite;
            paysComment  += this.cRotationData[i].pays;
            valueComment += `${this.cRotationData[i].idemnite} = ${value}`;
        }

        comment += `${paysComment}<br/>${valueComment}`;
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

    calcRotation(start, end, pays) {
      // let detail, value;
      // if (pays.length === 1) {
      //   detail = "rotation dans la même journée"
      //   value = modelData.idemniteZoneEurope / 2;
      // } else {

      // }

      console.log(start, end, pays);
    },
    dateToStr(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

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
    this.rotationList = this.value;
  }
}
</script>