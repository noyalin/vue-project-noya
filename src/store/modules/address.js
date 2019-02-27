import { apiAddress } from '../../api/index';

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllAddress ({ commit },params) {
    console.log('请求参数---- '+JSON.stringify(params))
    apiAddress().then(res=>{
      commit('setAddress', res.results)
    })
  }
}

// mutations
const mutations = {
  setAddress (state, address) {
    state.all = address
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
