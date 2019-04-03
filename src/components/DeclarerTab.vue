<template>
    <main>
        <b-form>
            <b-form-group
                id="cumulNetImposableGroup"
                label="Cumul net imposable"
                label-for="cumulNetImposable"
                :valid-feedback="validFeedback"
                :invalid-feedback="invalidFeedback"
                description="Le cumul net imposable est le montant figurant sur
                votre déclaration préremplie 2018."
            >
                <b-form-input
                  id="cumulNetImposable"
                  type="number"
                  min="0"
                  required
                  v-model="cumulNetImposable.value"
                />
            </b-form-group>

            <b-form-group
                id="nuitesGroup"
                label="Nuités (Frais d'hébergement)"
                label-for="nuites"
                :invalid-feedback="invalidFeedback"
                :valid-feedback="validFeedback"
                description="Document fourni par la compagnie avec les EP4 de février."
            >
                <b-form-input
                  id="nuites"
                  type="number"
                  min="0"
                  required="required"
                  v-model="nuites.value"
                />
            </b-form-group>

            <b-form-group
                id="idemnitesSecuGroup"
                label="Idemnités journalières de la Sécurité Sociale"
                label-for="idemnitesSecu"
                v-bind:invalid-feedback="invalidFeedback"
                v-bind:valid-feedback="validFeedback"
                :state="state"
                description="IJ perçues de la Sécurité Sociale pour congés
                maladie ou maternité ou paternité selon le relevé adressé par
                la CPAM. Ne jamais déclarer les IJ consécutives à un accident
                du travail ni celles faisant suite à des affections comportant
                un traitement prolongé et une thérapeutique particulièrement
                coûteuse - article L.322-3 du Code de la Sécurité Sociale."
            >
                <b-form-input
                  id="idemnitesSecu"
                  type="number"
                  min="0"
                  required="required"
                  v-on:input="$emit('data-updated')"
                  v-model="idemnitesSecu.value" />
            </b-form-group>
        </b-form>
    </main>
</template>

<script>
export default {
    name: 'DeclarerTab',
    data : function() {
      return {
        cumulNetImposable: {
            type: "number",
            value: 0
        },
        nuites: {
            type: "number",
            value: 0
        },
        idemnitesSecu: {
            type: "number",
            value: 0
        },
      }
    },
    computed: {
        state() {
            return true;
        },
        validFeedback() {
            return '';
        },
        invalidFeedback() {
            return "Valeur non valide";
        }
    }
}
</script>

<style scoped>

</style>