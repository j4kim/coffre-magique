import Vue from 'vue'
import Vuex from 'vuex'
import { clone, groupBy, maxBy } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      items: []
    },
    savedData: '{items:[]}',
    newItem: {
      name: '',
      type: '',
      degree: undefined,
      dose: 4
    }
  },
  
  getters: {
    types ({ data }) {
      return groupBy(data.items, 'type')
    },
    last ({ data }) {
      return maxBy(data.items, 'id')
    },
    newId (state, { last }) {
      return last ? last.id + 1 : 1
    },
    hasChanged (state) {
      return JSON.stringify(state.data) !== state.savedData
    }
  },

  mutations: {
    reset (state, payload) {
      state.savedData = JSON.stringify(payload)
      Object.assign(state.data, payload)
    },
    add ({ data }, item) {
      data.items.push(item)
    },
    resetNewItem (state) {
      state.newItem = {}
    }
  },

  actions: {
    fetch ({ commit }) {
      fetch(`${process.env.VUE_APP_API}/fetch.php`)
        .then(r => r.json())
        .then(data => commit('reset', data))
    },
    addNewItem ({ state, getters, commit }) {
      commit('add', {
        id: getters.newId,
        ...clone(state.newItem)
      })
      commit('resetNewItem')
    },
    save ({ state, dispatch }) {
      fetch(`${process.env.VUE_APP_API}/save.php`, {
        method: "POST",
        body: JSON.stringify(state.data)
      }).then(() => {
        return dispatch('fetch')
      })
    }
  }
})
