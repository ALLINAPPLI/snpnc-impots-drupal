<template>
  <main>
    <b-table caption-top :items="items" :fields="fields">
      <template v-if="field.description.length" v-slot:table-caption>{{ field.description }}</template>
      <template v-if="edit" v-slot:cell()="row">
        <slot v-if="row.field.key === 'month'">{{ row.value }}</slot>
        <ValidationProvider v-else
          :name="row.field.label"
          rules="required|numeric|min:1|min_value:0"
          v-slot="vCtx">
          <b-form-input
            v-model="row.item[row.field.key]"
            @change="updateValue(row.field.key, row.index, $event)"
            :state="getValidationState(vCtx)"
          />
          <b-form-invalid-feedback>{{ vCtx.errors[0] }}</b-form-invalid-feedback>
        </ValidationProvider>

      </template>
    </b-table>
  </main>
</template>

<script>

import date from '../model/date';

export default {
  name: "MonthlyTable",
  props: {
    edit: Boolean,
    value: Object,
    field: Object
    // base:
  },
  data() {
    let items = [];
    for(let i = 0; i <= 11; i++) {
      let item = { 'month' : date.months[i] };
      for(let j = 0; j < this.field.columns.length; j++) {
        item[this.field.columns[j].key] = this.value[this.field.columns[j].key][i];
      }
      items.push(item);
    }

    let fields = [{ key:'month', label:'Mois'}, ...this.field.columns];
    return { items, fields };
  },
  methods: {
    updateValue(column, index, value) {
      this.$emit('input', { column, index, value });
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  }

}
</script>