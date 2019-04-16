<template>
    <main>
      <div class="form-group">
        <label :for="cumulNetImposable.id">{{ cumulNetImposable.title }}</label>
        <input
          type="number"
          class="form-control"
          v-bind:class="[errors.has(cumulNetImposable.id) ? 'is-invalid' : 'is-valid']"
          :id="cumulNetImposable.id"
          :name="cumulNetImposable.id"
          min="0"
          v-model="cumulNetImposable.value"
          v-validate="'required|min_value:0'"
          v-on:focus="focus"
          v-on:change="save(cumulNetImposable.id, $event)"
        >
        <div class="invalid-feedback">
          {{ cumulNetImposable.title }} {{ errorMontant }}
        </div>
        <small class="form-text">{{ cumulNetImposable.description }}</small>
      </div>
      <div class="form-group">
        <label :for="fraisHebergement.id">{{ fraisHebergement.title }}</label>
        <input
          type="number"
          class="form-control"
          v-bind:class="[errors.has(fraisHebergement.id) ? 'is-invalid' : 'is-valid']"
          :id="fraisHebergement.id"
          :name="fraisHebergement.id"
          min="0"
          v-model="fraisHebergement.value"
          v-validate="'required|min_value:0'"
          v-on:focus="focus"
          v-on:change="save(fraisHebergement.id, $event)"
        >
        <div class="invalid-feedback">
          {{ fraisHebergement.title }} {{ errorMontant }}
        </div>
        <small class="form-text">{{ fraisHebergement.description }}</small>
      </div>

      <div class="form-group">
        <label :for="idemnitesSecu.id">{{ idemnitesSecu.title }}</label>
        <input
          type="number"
          class="form-control"
          v-bind:class="[errors.has(idemnitesSecu.id) ? 'is-invalid' : 'is-valid']"
          :id="idemnitesSecu.id"
          :name="idemnitesSecu.id"
          min="0"
          v-model="idemnitesSecu.value"
          v-validate="'required|min_value:0'"
          v-on:focus="focus"
          v-on:change="save(idemnitesSecu.id, $event)"
        >
        <div class="invalid-feedback">
          {{ idemnitesSecu.title }} {{ errorMontant }}
        </div>
        <small class="form-text">{{ idemnitesSecu.description }}</small>
      </div>
      <data-table :field="model.fields.declarer.idemnitesRepas" :writable="true"></data-table>
      <data-table :field="model.fields.declarer.idemnitesTransport" :writable="true"></data-table>
    </main>
</template>

<script>
import DataTable from './DataTable';

export default {
  name: 'DeclarerTab',
  components: {
    DataTable
  },
  props: {
    model: Object
  },
  data : function() {
    return Object.assign({}, JSON.parse(JSON.stringify(this.model.fields.declarer)), this.model.messages);
  },
  mounted() {
    this.$validator.validate();
  },
  methods: {
    focus(event) {
      // Select all field data for easy editing.
      event.target.select();
    },
    save(field, event) {
      // Save only valid data.
      if (this.veeFields[field] && this.veeFields[field].validated && !this.errors.has(field)) {
        this.model.fields.declarer[field].value = parseInt(event.target.value);
      }
    }
  }
}
</script>

<style scoped>

</style>