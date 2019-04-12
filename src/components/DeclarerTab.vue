<template>
    <main>
        <b-form @submit="checkForm">
            <b-form-group
                id="cumulNetImposableGroup"
                :label="cumulNetImposable.title"
                label-for="cumulNetImposable"
                :description="cumulNetImposable.description"
            >
                <b-form-input
                  id="cumulNetImposable"
                  name="cumulNetImposable"
                  type="text"
                  min="0"
                  v-model="cumulNetImposable.value"
                  v-validate="'required|min_value:0'"
                  :state="validate('cumulNetImposable')"
                  @change="saveData('cumulNetImposable')"
                />
              <b-form-invalid-feedback>
                {{ cumulNetImposable.title }} {{ errorMontant }}
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="nuitesGroup"
              :label="nuites.title"
              label-for="nuites"
              :description="nuites.description"
            >
              <b-form-input
                id="nuites"
                name="nuites"
                type="text"
                min="0"
                v-model="nuites.value"
                v-validate="'required|min_value:0'"
                :state="validate('nuites')"
                @change="saveData('nuites')"
              />
              <b-form-invalid-feedback>
                {{ nuites.title }} {{ errorMontant }}
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="idemnitesSecuGroup"
              :label="idemnitesSecu.title"
              label-for="idemnitesSecu"
              :description="idemnitesSecu.description"
            >
              <b-form-input
                id="idemnitesSecu"
                name="idemnitesSecu"
                type="text"
                min="0"
                v-model="idemnitesSecu.value"
                v-validate="'required|min_value:0'"
                :state="validate('idemnitesSecu')"
                @change="saveData('idemnitesSecu')"
              />
              <b-form-invalid-feedback>
                {{ idemnitesSecu.title }} {{ errorMontant }}
              </b-form-invalid-feedback>
            </b-form-group>
            <data-table :field="model.fields.declarer.idemnitesRepas" :writable="true"></data-table>
        </b-form>
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
      checkForm(e) {
        e.preventDefault();
      },
      validate(field) {
        if (this.veeFields[field] && (this.veeFields[field].dirty || this.veeFields[field].validated)) {
          return !this.errors.has(field);
        }

        return null;
      },
      saveData(field) {
        // Save only valid data.
        if (this.veeFields[field] && this.veeFields[field].validated && !this.errors.has(field)) {
          this.$emit('dataUpdated', "declarer", field, this[field]);
        }
      }
    }
}
</script>

<style scoped>

</style>