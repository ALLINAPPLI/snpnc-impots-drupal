<template>
  <b-card>
    <h1>A déclarer</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">A déclarer</th>
          <th scope="col">Détail</th>
          <th scope="col">Montant</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ f.cNI.label }}</td>
          <td class="">{{ f.cNI.description }}</td>
          <td>{{ cNI }}</td>
        </tr>
        <tr>
          <td>{{ f.fH.label }}</td>
          <td class="">{{ f.fH.description }}</td>
          <td>{{ fH }}</td>
        </tr>
        <tr>
          <td>{{ f.iS.label }}</td>
          <td class="">{{ f.iS.description }}</td>
          <td>{{ iS }}</td>
        </tr>
        <tr>
          <td>{{ f.iR.label }}</td>
          <td>
            <MonthlyTable v-bind:edit="false" v-model="iR" v-bind:field="f.iR"></MonthlyTable>
          </td>
          <td>{{ iR.tableTotal }}</td>
        </tr>

        <tr>
          <td>{{ f.iT.label }}</td>
          <td class="">
            <MonthlyTable v-bind:edit="false" v-model="iT" v-bind:field="f.iT"></MonthlyTable>
          </td>
          <td>{{ iT.tableTotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="h3" colspan="2">Total à déclarer AJ ou BJ</td>
          <td class="h3">{{ getTotal('declarer') }}</td>
        </tr>
      </tfoot>
    </table>
    <h1>A déduire</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">A déduire</th>
          <th scope="col">Détail</th>
          <th scope="col">Montant</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ f.iJ.label }}</td>
          <td class="">
            <IdemnitesJournalieres
              v-bind:edit="false"
              v-model="iJ"
              v-bind:field="f.iJ">
            </IdemnitesJournalieres>
          <td>{{ iJ.tableTotal }}</td>
        </tr>

        <tr>
          <td>{{ f.fTA.label }}</td>
          <td class="">
            <div v-html="f.fTA.description"></div>
            <MonthlyTable v-bind:edit="false" v-model="fTAd" v-bind:field="f.fTAd"></MonthlyTable>
          </td>
          <td>{{ fTA }}</td>
        </tr>

        <tr>
          <td>{{ f.fTM.label }}</td>
          <td class="">
            <div v-html="f.fTM.description"></div>
            <slot v-if="fTM > 0">
              <MonthlyTable v-bind:edit="false" v-model="fTMd" v-bind:field="f.fTMd"></MonthlyTable>
            </slot>
          </td>
          <td>{{ fTM }}</td>
        </tr>

        <tr>
          <td>{{ f.fTC.label }}</td>
          <td class="">
            <MonthlyTable v-bind:edit="false" v-model="fTC" v-bind:field="f.fTC"></MonthlyTable>
          </td>
          <td>{{ fTC.tableTotal }}</td>
        </tr>

        <tr>
          <td>{{ f.cS.label }}</td>
          <td class="">{{ f.cS.description }}</td>
          <td>{{ cS }}</td>
        </tr>

        <tr>
          <td>{{ f.fB.label }}</td>
          <td class="">{{ f.fB.description }}</td>
          <td>{{ fB }}</td>
        </tr>

        <tr>
          <td>{{ f.fCMB.label }}</td>
          <td class="">{{ f.fCMB.description }}</td>
          <td>{{ fCMB }}</td>
        </tr>

        <tr>
          <td>{{ f.fTI.label }}</td>
          <td class="">{{ f.fTI.description }}</td>
          <td>{{ fTI }}</td>
        </tr>

        <tr>
          <td>{{ f.fBa.label }}</td>
          <td class="">{{ f.fBa.description }}</td>
          <td>{{ fBa }}</td>
        </tr>

        <tr>
          <td>{{ f.fDR.label }}</td>
          <td class="">{{ f.fDR.description }}</td>
          <td>{{ fDR }}</td>
        </tr>

        <tr>
          <td>{{ f.fL.label }}</td>
          <td class="">{{ f.fL.description }}</td>
          <td>{{ fL }}</td>
        </tr>

        <tr>
          <td>{{ f.fF.label }}</td>
          <td class="">{{ f.fF.description }}</td>
          <td>{{ fF }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="h3" colspan="2">Total à déduire AK ou BK</td>
          <td class="h3">{{ getTotal('deduire') }}</td>
        </tr>
      </tfoot>
    </table>
  </b-card>
</template>
<script>

import MonthlyTable from './MonthlyTable';
import IdemnitesJournalieres from './IdemnitesJournalieres';
// import html2pdf from 'html2pdf';

import fieldsMixin from '../model/fieldsMixin';
import modelFields from '../model/fields';

import { mapGetters } from 'vuex'

export default {
  mixins: [fieldsMixin],
  name: 'ResultatTab',
  components: {
    MonthlyTable,
    IdemnitesJournalieres
  },
  data() {
    return { f : modelFields }
  },
  computed: {
    ...mapGetters(['getTotal']),
    ...fieldsMixin.mapFields("declarer", "updateField", ["cNI", "fH", "iS", 'iR', 'iT']),

    ...fieldsMixin.mapFields("deduire", "updateField", ["fTAp", "fTMp"]),
    ...fieldsMixin.mapFields("deduire", "updateIdemnitesJournalieres", ["iJ"]),
    ...fieldsMixin.mapFields("deduire", "updateDataTableField", ["fTAd", "fTMd", "fTC"]),
    ...fieldsMixin.mapFields(
      "deduire",
      "updateDataField",
      ["fTA", "fTM", "cS", "fB", "fCMB", "fTI", "fBa", "fDR", "fL", "fF"]
    ),
  },
  methods: {
  }
}
</script>

<style scoped></style>