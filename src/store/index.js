import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import stats from './modules/stats'
import meta from './modules/meta'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    
    auth,
    stats,
    meta
  },
  mutations: {
    setItems (state, {resource, items}) {
      state[resource].items = items
    },
    setItem (state, {resource, item}) {
      state[resource].item = item
    },
    addItemToArray (state, {item, index, resource}) {
      Vue.set(state[resource].items, index, item)
    }
  }
})