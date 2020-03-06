import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import { ValidationProvider, localize } from 'vee-validate';
import App from './App.vue';
import './assets/styles.scss';


// Activate the French locale for form validation.
localize('fr');

Vue.component('ValidationProvider', ValidationProvider);
Vue.use(BootstrapVue);
Vue.use(Vuex);

import globalStore from './store/modules/global';

const store = new Vuex.Store({
  modules: {
    global: globalStore
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
