import Vue from 'vue'
import Vuex from 'vuex'
import { groupBy } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  
  getters: {
    types ({ items }) {
      return groupBy(items, 'type')
    }
  },

  mutations: {
    reset (state, payload) {
      Object.assign(state, payload)
    }
  },

  actions: {
    fetch ({ commit }) {
      fetch(`${process.env.VUE_APP_API}/fetch.php`)
        .then(r => r.json())
        .then(state => commit('reset', state))
    }
  }
})
