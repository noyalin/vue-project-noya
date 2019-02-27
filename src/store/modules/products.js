import { apiProduct } from '../../api/index';

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit },params) {
    console.log('请求参数---- '+JSON.stringify(params))
    apiProduct().then(res=>{
      commit('setProducts', res.results)
    })
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
