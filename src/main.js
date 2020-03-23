import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue'
import { ValidationProvider, extend, localize } from "vee-validate";
import fr from "vee-validate/dist/locale/fr.json";
import * as rules from "vee-validate/dist/rules";
import App from './components/App.vue';

import dataStore from './model/store';
import './assets/styles.scss';

// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => { extend(rule, rules[rule]); });
localize("fr", fr);

// Install VeeValidate components globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.use(Vuex);
Vue.use(BootstrapVue);

const store = new Vuex.Store(dataStore);

new Vue({store, render: h => h(App) }).$mount('#app');
