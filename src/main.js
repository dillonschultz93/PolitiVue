import Vue from 'vue'
import App from './App.vue'
import VeeValidate from "vee-validate"
import BootstrapVue from 'bootstrap-vue'
// import Router from "vue-router"

Vue.use(BootstrapVue)

new Vue({
  // router,
  el: '#app',
  render: h => h(App)
})