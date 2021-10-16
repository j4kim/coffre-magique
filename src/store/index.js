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
        degree: 45,
        dose: 4,
        bottles: [
          {
            volume: 30,
            remains: 30
          }
        ]
      },
      {
        id: 2,
        type: 'Goutte',
        name: 'Abricotine',
        degree: 56,
        dose: 4,
        bottles: [
          {
            volume: 70,
            remains: 10
          },
          {
            volume: 70,
            remains: 70
          }
        ]
      },
      {
        id: 3,
        type: 'Liqueur',
        name: 'Suze',
        degree: 45,
        dose: 4,
        bottles: [
          {
            volume: 100,
            remains: 100
          }
        ]
      },
    ]
  },
  
  getters: {
    types ({ items }) {
      return groupBy(items, 'type')
    }
  }
})
