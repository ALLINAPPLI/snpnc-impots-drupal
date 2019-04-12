<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b-img rounded fluid :src="require('../assets/logo.png')"></b-img>
      </b-col>
      <b-col cols="9">
        <p>
          Le calcul de vos frais réels est facilité et optimisé par
          ce logiciel que vous propose le SNPNC. Il permet d'effectuer des simulations
          personnalisées et d'imprimer le détail des montants à déclarer AJ ou BJ ainsi
          que les montants à déduire AK ou BK. La méthode de déclaration des frais
          réels est celle que le SNPNC a négociée avec la Direction de la Législation
          Fiscale du Ministère de l’Economie, des Finances et de l’Industrie en 1999.
        </p>
        <p>
          <strong>
            NB : L'utilisation de cet outil informatique ne saurait engager la
        responsabilité du SNPNC, si des erreurs ou omissions étaient relevées
        par l'administration.
          </strong>
        </p>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col>
        <b-form-group
          :label="compagnie.title"
          :label-for="compagnie.id"
          :description="compagnie.description"
        >
          <b-form-select
            :id="compagnie.id"
            :name="compagnie.id"
            v-model="compagnie.value"
            :options="compagnie.options"
            required
          ></b-form-select>
        <b-form-invalid-feedback>
          {{ compagnie.title }} {{ errorRequired }}
        </b-form-invalid-feedback>

        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'HomeTab',
  props: {
    model: Object
  },
  data() {
    // return Object.assign({}, JSON.parse(JSON.stringify(this.model.fields.profil)), this.model.messages);
    return Object.assign({}, this.model.fields.profil, this.model.messages);
  },
  mounted() {
    this.$validator.validate();
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
