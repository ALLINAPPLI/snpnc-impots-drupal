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
                  v-validate="'min_value:0'"
                  :state="validateState('cumulNetImposable')"
                  @change="saveData('cumulNetImposable')"
                />
              <b-form-invalid-feedback>
                {{ cumulNetImposable.title }} doit être un montant positif arrondi.
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
                v-validate="'min_value:0'"
                :state="validateState('nuites')"
                @change="saveData('nuites')"
              />
              <b-form-invalid-feedback>
                {{ nuites.title }} doit être un montant positif arrondi.
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
                v-validate="'min_value:0'"
                :state="validateState('idemnitesSecu')"
                @change="saveData('idemnitesSecu')"
              />
              <b-form-invalid-feedback>
                {{ idemnitesSecu.title }} doit être un montant positif arrondi.
              </b-form-invalid-feedback>
            </b-form-group>
        </b-form>
    </main>
</template>

<script>
export default {
    name: 'DeclarerTab',
    props: {
      rdata: Object
    },
    data : function() {
      return Object.assign({}, this.rdata.declarer, {});
    },
    methods: {
      checkForm(e) {
        e.preventDefault();
      },

      validateState(field) {
        if (this.veeFields[field]) {
          console.log(field + " is defined");
          console.log(field + " is dirty " + this.veeFields[field].dirty);
          console.log(field + " is validated " + this.veeFields[field].validated);
          console.log(field + " is changed " + this.veeFields[field].changed);
        } else {
          console.log(field + " is not defined");
        }
        if (this.veeFields[field] && (this.veeFields[field].dirty || this.veeFields[field].validated)) {
          return !this.errors.has(field);
        }

        return null;
      },

      saveData: function(field) {
        // Save only valid data.
        if (this.veeFields[field] && this.veeFields[field].validated && !this.errors.has(field)) {
          this.$emit('dataUpdated', field, this[field]);
        }
      }
    }
}
</script>

<style scoped>

</style>