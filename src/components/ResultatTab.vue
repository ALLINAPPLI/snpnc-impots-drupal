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
          <td>{{ f.cNI.description }}</td>
          <td>{{ cNI }}</td>
        </tr>
        <tr>
          <td>{{ f.fH.label }}</td>
          <td>{{ f.fH.description }}</td>
          <td>{{ fH }}</td>
        </tr>
        <tr>
          <td>{{ f.iS.label }}</td>
          <td>{{ f.iS.description }}</td>
          <td>{{ iS }}</td>
        </tr>
        <tr>
          <td>{{ f.iR.label }}</td>
          <td>
            <MonthlyTable v-bind:edit="false" v-model="iR" v-bind:field="f.iR"></MonthlyTable>
          </td>
          <td>{{ this.$store.getters.tableFieldTotal('declarer', 'iR') }}</td>
        </tr>

        <tr>
          <td>{{ f.iT.label }}</td>
          <td>
            <MonthlyTable v-bind:edit="false" v-model="iT" v-bind:field="f.iT"></MonthlyTable>
          </td>
          <td>{{ this.$store.getters.tableFieldTotal('declarer', 'iT') }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">Total à déclarer AJ ou BJ</td>
          <td>ertare</td>
        </tr>
      </tfoot>
    </table>
  </b-card>
</template>
<script>

import MonthlyTable from './MonthlyTable';
// import html2pdf from 'html2pdf';

import fieldsMixin from '../model/fieldsMixin';
import modelFields from '../model/fields';

export default {
  mixins: [fieldsMixin],
  name: 'ResultatTab',
  components: {
    MonthlyTable,
  },
  data() {
    return { f : modelFields }
  },
  computed: {
    ...fieldsMixin.mapFields({fields: ["cNI", "fH", "iS", 'iR', 'iT'], base: "declarer"}),
  },
  methods: {
  }
}
</script>

<style scoped></style>