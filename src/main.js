import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import Axios from './network/request'
Vue.config.productionTip = false

Vue.use(Axios)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

