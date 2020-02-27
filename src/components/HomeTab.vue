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
          label="Compagnie"
          label-for="compagnieField"
          description="Merci d'indiquer votre compagnie afin d'ajuster le formulaire à vos spécificités compagnie."
        >
          <b-form-select
            id="compagnieField"
            name="compagnieField"
            v-model="compagnie"
            :options="compagnieOptions"
            required
          ></b-form-select>
          <b-button :disabled="" variant="primary">
          <b-form-invalid-feedback>
            invalid man !
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomeTab',
  props: {
    model: Object
  },
  data() {
    return {
      compagnieOptions: [
          { value : null, text: `Sélectionnez votre compagnie` },
          { value : "af", text : `Air France` },
          { value : "autre", text : `Autre Compagnie` }
      ]
    }
    // return Object.assign({}, JSON.parse(JSON.stringify(this.model.fields.profil)), this.model.messages);
    // return Object.assign({}, this.model.fields.profil, this.model.messages);
  },
  computed: {
    ...mapState({
      compagnie: state => state.compagnie,
      started: state => state.started,
    })
  }
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
