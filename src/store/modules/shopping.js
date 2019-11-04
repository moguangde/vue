const state = {
  shoppingNumber: null,
  shoppingData: []
}
const getters = {
  shoppingNumber: state => {
    return state.shoppingNumber
  },
  shoppingData: state => {
    return state.shoppingData
  }
}
const mutations = {
  ADD_SP (state, params) {
    let item = state.shoppingData.filter((item, index, arr) => {
      if (item.id === params.id) {
        item.count = params.count
        return item
      }
    })
    if (item.length === 0) {
      state.shoppingData.push(params)
      state.shoppingNumber += 1
    }
  },
  DEL_SP (state, params) {
    let delIndex = -1
    state.shoppingData.filter((item, index, arr) => {
      if (item.id === params) {
        delIndex = index
      }
    })
    if (delIndex !== -1) {
      state.shoppingData.splice(delIndex, 1)
      state.shoppingNumber -= 1
    }
  },
  CHECK (state, params) {
    state.shoppingData = []
    state.shoppingNumber = 0
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
