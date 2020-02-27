import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import { ValidationProvider,localize } from 'vee-validate';

// Activate the French locale for form validation.
localize('fr');

import App from './App.vue';

import './assets/styles.scss';

Vue.component('ValidationProvider', ValidationProvider);
Vue.use(BootstrapVue);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    started: false,
    compagnie: null
  },
  strict: process.env.NODE_ENV !== 'production'
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
