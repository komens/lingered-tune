import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

Vue.prototype.axios = axios
Vue.use(VueLazyload, {
  error: 'assets/logo.png',
  loading: 'assets/logo.png'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
