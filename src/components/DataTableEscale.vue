<template>
  <div class="table-responsive">
    <div v-if="writable === true">
      <p>{{ field.description }}</p>
    </div>
    <div v-if="writable === false">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">&nbsp;</th>
            <th v-for="column in columns" :key="column.key" scope="col">{{ column.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row">
            <td>Sous-total</td>
            <td v-for="(column, index) in columns" :key="column.key">
              {{ field.columns[index].values.reduce((sum, a) => sum + a ) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Mois</th>
          <th v-for="column in columns" :key="column.key" scope="col">{{ column.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="month in months" :key="month.key">
          <td>{{ month.title }}</td>
          <td v-for="(column, index) in columns" :key="column.key">
            <div v-if="writable === true" class="form-group">
              <input
                class="form-control"
                v-bind:class="[errors.has(`${column.key}-${month.key}`) ? 'is-invalid' : 'is-valid']"
                type="number"
                :tabindex="(index * 12) + month.key"
                :name="`${column.key}-${month.key}`"
                v-model="column.values[month.key]"
                v-validate="'required|min_value:0'"
                v-on:focus="focus"
                v-on:change="save(column.key, month.key, $event)"
              >
              <div class="invalid-feedback">
                un montant arrondi supérieur ou égal à 0 est requis
              </div>
            </div>
            <div v-else>
              {{ column.values[month.key] }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
export default {
  name: "DataTableEscale",
  props: {
    writable: Boolean,
    field: Object
  },
  data() {
    // If values are empty initialize with 0.
    let columns = this.field.columns;
    for(let column of columns) {
      for (let i = 1; i <= 12; i++) {
        if ( column.values[i] === undefined || column.values[i] === ""  || column.values[i] === null ) {
          column.values[i] = 0;
        }
      }
    }
    // Deep clone.
    let field = JSON.parse(JSON.stringify(this.field));
    columns = field.columns;

    return {
      months,
      columns
    }
  },
  methods: {
    focus(event) {
      // Select all field data for easy editing.
      event.target.select();
    },
    save(column, month, event) {
      let field = `${column}-${month}`;
      // Save only valid data.
      if (this.veeFields[field] && this.veeFields[field].validated && !this.errors.has(field)) {
        let valueColumn = this.field.columns.find((item) => item.key === column);
        valueColumn.values[month] = parseInt(event.target.value);
      }
    }
  }
}
</script>
<style scoped>

</style>