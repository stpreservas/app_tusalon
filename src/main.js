import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import './../node_modules/bulma/css/bulma.css'; //BulmaCSS
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import * as VueGoogleMaps from "vue2-google-maps";
import vueGeolocation from 'vue-browser-geolocation'
//Configuración de colores BRAND
require("./assets/config.scss");
//APIKEY Maps
require("dotenv").config();

Vue.use(VueGoogleMaps, {
  load: { 
    key: "AIzaSyDpfiySvR2rIRVw1xzNCUmQwRiGDrjVk44"//process.env.VUE_APP_GOOGLE_MAPS_API_KEY
   }
});
Vue.use(vueGeolocation);

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
