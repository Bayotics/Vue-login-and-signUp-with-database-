import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelidate from 'vuelidate'
import Toasted from 'vue-toasted'
import AppSocket from './plugins/socket'

Vue.config.productionTip = false



Vue.use(vuelidate)
Vue.use(Toasted)
Vue.use(AppSocket, {connection: 'http://localhost:3001'})


new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App),
}).$mount('#app')






