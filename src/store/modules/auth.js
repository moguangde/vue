const state = {
  token: null,
  user: null
}
const getters = {
  isAuth: state => {
    return state.token !== null
  },
  user: state => {
    return state.user
  }
}
const mutations = {
  SET_TOKEN (state, params) {
    state.token = params
  },
  SET_USER (state, params) {
    state.user = params
  },
  LOGOUT (state) {
    state.token = null
  }
}
const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
