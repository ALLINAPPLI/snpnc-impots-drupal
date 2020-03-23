<template>
  <main>
    <b-table id="resultat" :items="items" :fields="fields" striped small></b-table>
  </main>
</template>
<script>

// import MonthlyTable from './MonthlyTable';

// import html2pdf from 'html2pdf';

// import modelFields from '../model/fields';

export default {
  name: 'ResultatTab',
  components: {},
  data() {

    const fields = [
      { key: 'item', label: 'Item'},
      { key: 'comment', label: 'Commentaire'},
      { key: 'value', label: 'Montant'},
    ];
    const items = [];

    // this.$store.state.declarer

    // // Déclarer items
    // let declarer = ['cNI', 'fH', 'iS', 'iR', 'iT'];
    // declarer.forEach()
    // declarer.forEach((id) => {

    //   this.$store.
    // });

    return {
      fields, items
    }
  }
}
</script>

<style scoped></style>