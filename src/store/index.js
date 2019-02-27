import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import address from './modules/address'


Vue.use(Vuex)

let store = new Vuex.Store({
  modules:{
    products,
    address
  }
})

export default  store
