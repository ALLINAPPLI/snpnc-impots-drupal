<template>
  <main>
    <p>
      {{ field.description }}
      <b-button v-if="!edit" @click="detailsShowing = !detailsShowing">
        {{ detailsShowing ? 'Cacher' : 'Afficher'}} les détails
      </b-button>
    </p>
    <b-collapse :id="field.id + '-details'" v-model="detailsShowing">
      <b-table  caption-top :items="items" :fields="fields">
        <template v-slot:cell()="row">
          <slot v-if="row.field.key === 'month'">{{ row.value }}</slot>
          <ValidationProvider v-else-if="edit"
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
          <slot v-else>{{ row.value }}</slot>
        </template>
        <template  slot="bottom-row" slot-scope="data">
          <td class="table-success" v-for="(column, index) in data.fields" :key="column.key">
            <slot v-if="index == 0">Total</slot>
            <slot v-else>{{ value.total[column.key] }}</slot>
          </td>
        </template>
      </b-table>
    </b-collapse>
  </main>
</template>

<script>

import fieldsMixin from '../model/fieldsMixin';
import modelFields from '../model/fields';

export default {
  mixins: [fieldsMixin],
  name: "MonthlyTable",
  props: {
    edit: Boolean,
    value: Object,
    field: Object
  },
  data() {
    let months = modelFields.months;
    let items = [];
    console.log(this.value);
    for(let i = 0; i <= 11; i++) {
      let item = { 'month' : months[i] };
      for(let j = 0; j < this.field.columns.length; j++) {
        item[this.field.columns[j].key] = this.value.columns[this.field.columns[j].key][i];
      }
      items.push(item);
    }
    let tableFields = [{ key:'month', label:'Mois'}, ...this.field.columns];

    return { items, fields: tableFields, detailsShowing: this.edit  };
  },
  methods: {
    updateValue(column, index, value) {
      this.$emit('input', { column, index, value });
    },
  },
}
</script>