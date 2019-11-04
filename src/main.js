import Vue from 'vue'
import App from './App.vue'
import router from '_route'
import store from '_store'
import '_plugins/iview'
import '_plugins/echarts'
import '_plugins/particles'
import '_plugins/axios'
import '_plugins/vue-count-to'
import './mock'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
