import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import i18n from './i18n';
import VeeValidate from 'vee-validate';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';

Vue.use(VeeValidate, {
  // Rename the field bag to something other than 'fields' as there is confict
  // with BootstrapVue
  fieldsBagName: 'veeFields'
});

Vue.use(BootstrapVue);
Vue.config.productionTip = true;

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
