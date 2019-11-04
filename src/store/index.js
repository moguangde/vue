import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import shopping from './modules/shopping'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    shopping
  }
})
