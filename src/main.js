import Vue from 'vue'
import App from './App.vue'
import VeeValidate from "vee-validate"
// import Router from "vue-router"
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCTM6kafG8RQwi0qStGmMMqwK30VV52Enc',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

new Vue({
  // router,
  el: '#app',
  render: h => h(App)
})