import Vue from 'vue'
import Vuex from 'vuex'
import { cloneDeep, groupBy, maxBy } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      items: []
    },
    savedData: '{items:[]}',
    editable: {}
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
    },
    byId: ({ data }) => (id) => {
      return data.items.find(i => i.id == id)
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
    setEditable (state, item = { bottles:[], dose: 4 }) {
      state.editable = cloneDeep(item)
    },
    editItem ({ data, editable }) {
      let index = data.items.findIndex(i => i.id == editable.id)
      data.items.splice(index, 1, editable)
    },
    deleteItem ({ data, editable }) {
      data.items = data.items.filter(i => i.id != editable.id)
    },
    drink ({ editable }) {
      let index = editable.selectedBottleIndex || 0
      let bottle = editable.bottles[index]
      if (bottle.remains == 0 && confirm("Supprimer la bouteille ?")) {
        editable.bottles.splice(index, 1)
      } else {
        bottle.remains = Math.max(0, bottle.remains - editable.dose)
      }
    },
    selectBottle ({ editable }, index) {
      editable.selectedBottleIndex = index
    },
    addBottle ({ editable }) {
      editable.bottles.push(
        editable.bottles.length ?
          {
            volume: editable.bottles[0].volume,
            remains: editable.bottles[0].volume
          } :
          {
            volume: 75,
            remains: 75
          }
      )
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
        ...cloneDeep(state.editable)
      })
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
