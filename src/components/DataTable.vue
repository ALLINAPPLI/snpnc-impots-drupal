<template>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">Mois</th>
        <th v-for="column in columns" scope="col">{{ column.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(month, rowIndex) in months">
        <td>{{ month.title }}</td>
        <td v-for="(column, colIndex) in columns">
          <div v-if="writable === true" class="form-group">
            <input
              class="form-control"
              type="number"
              :tabindex="(colIndex * 12) + month.key"
              :name="`${column.key}-${month.key}`"
              v-model="column.value[month.key]"
              v-validate="'required|min_value:0'"
              v-on:focus="focus"
              v-on:blur="blur"
              :state="validate(`${column.key}-${month.key}`)"
              v-on:change="change(colIndex, month.key)"
            >
          </div>
          <div v-else>
            {{ column.value[month.key] }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "DataTable",
  props: {
    writable: Boolean,
    field: Object
  },
  data() {
    const months = [
      {key :  1, title : "Janvier"},
      {key :  2, title : "Février"},
      {key :  3, title : "Mars"},
      {key :  4, title : "Avril"},
      {key :  5, title : "Mai"},
      {key :  6, title : "Juin"},
      {key :  7, title : "Juillet"},
      {key :  8, title : "Août"},
      {key :  9, title : "Septembre"},
      {key : 10, title : "Octobre"},
      {key : 11, title : "Novembre"},
      {key : 12, title : "Décembre"}
    ]


    let columns = this.field.columns;
    // Initialize values if empty.
    for(let column of columns) {
      for (let i = 1; i <= 12; i++) {
        if (column.value[i] === undefined) {
          column.value[i] = 0;
        }
      }
    }

    return {
      months,
      columns
    }
  },
  methods: {
    focus(event) {
      event.target.select();
    },
    blur(event) {
      if (event.target.value === "") {
        event.target.value = 0;
      }
    },
    validate(field) {
      // console.log("validating : " + field);
    },
    change(column, key) {
      // console.log("col : " + column + " key : " + key);
      // if (this.field.columns[column].value[key] === "") {
      //   this.field.columns[column].value[key] = 0;
      // }
      // Save only valid data.
      // if (this.veeFields[field] && this.veeFields[field].validated && !this.errors.has(field)) {
      //   this.$emit('dataUpdated', "declarer", field, this[field]);
      // }
    }
  }
}
</script>
<style scoped>

</style>