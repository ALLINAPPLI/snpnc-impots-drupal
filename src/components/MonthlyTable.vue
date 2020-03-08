<template>
  <main>
    <b-table caption-top :items="items" :fields="fields">
      <template v-slot:table-caption>{{ field.description }}</template>
      <template v-if="edit" v-slot:cell()="row">
        <slot v-if="row.field.key === 'month'">{{ row.value }}</slot>
        <b-form-input
          v-else
          v-model="row.item[row.field.key]"
          @change="update(row.field.key, row.index, $event)"/>
      </template>
    </b-table>
  </main>
</template>

<script>

import date from '../store/date';

export default {
  name: "MonthlyTable",
  props: {
    edit: Boolean,
    field: Object
    // base:
  },
  data() {
    // let field = {
    //     id          : "idemnitesRepas",
    //     label       : "Idemnités répas",
    //     description : `Reportez les lignes 241 et 340 ou les colonnes 'Ventilation
    //     PN imposable' et 'PN non imposable' sur les EP4 de l´année.`,
    //     columns : [
    //       { key: "ir241", label : "241" },
    //       { key: "ir340", label : "340" }
    //     ]
    // };

    let items = [];
    for(let i = 0; i <= 11; i++) {
      let item = { 'month' : date.months[i] };
      for(let j = 0; j < this.field.columns.length; j++) {
        item[this.field.columns[j].key] = 0;
      }
      items.push(item);
    }

    let fields = [{ key:'month', label:'Mois'}, ...this.field.columns];
    return { items, fields };
  },
  methods: {
    update(key, index, value) {
      console.log(key, index, value);
    },
  }

}
</script>