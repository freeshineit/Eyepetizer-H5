// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Mint from 'mint-ui'
import Utils from './assets/js/index'
import 'mint-ui/lib/style.css'
import './assets/less/index.less'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.$utils = Utils

Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
