<template>
  <main>
    <b-table caption-top :items="items" :fields="fields">
      <template v-if="field.description.length" v-slot:table-caption>{{ field.description }}</template>
      <template v-if="edit" v-slot:cell()="row">
        <slot v-if="row.field.key === 'month'">{{ row.value }}</slot>
        <ValidationProvider v-else
          :name="row.field.label"
          rules="required|min:1|min_value:0"
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

import fieldsMixin from '../model/fieldsMixin';
import fields from '../model/fields';

export default {
  mixins: [fieldsMixin],
  name: "MonthlyTable",
  props: {
    edit: Boolean,
    value: Object,
    field: Object
  },
  data() {
    let months = fields.months;

    let items = [];
    for(let i = 0; i <= 11; i++) {
      let item = { 'month' : months[i] };
      for(let j = 0; j < this.field.columns.length; j++) {
        item[this.field.columns[j].key] = this.value[this.field.columns[j].key][i];
      }
      items.push(item);
    }

    let tableFields = [{ key:'month', label:'Mois'}, ...this.field.columns];
    return { items, fields: tableFields };
  },
  methods: {
    updateValue(column, index, value) {
      this.$emit('input', { column, index, value });
    }
  }

}
</script>