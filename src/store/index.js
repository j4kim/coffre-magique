import Vue from 'vue'
import Vuex from 'vuex'
import { groupBy } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        type: 'Goutte',
        name: 'Mirabelle',
        degree: 45
      },
      {
        id: 2,
        type: 'Goutte',
        name: 'Abricotine',
        degree: 56
      },
      {
        id: 3,
        type: 'Liqueur',
        name: 'Mirabelle',
        degree: 45
      },
    ]
  },
  
  getters: {
    types ({ items }) {
      return groupBy(items, 'type')
    }
  }
})
