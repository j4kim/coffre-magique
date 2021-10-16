import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    types: [
      {
        type: 'Goutte',
        items: [
          {
            name: 'Mirabelle',
            degree: 45
          },
          {
            name: 'Abricotine',
            degree: 56
          }
        ]
      },
      {
        type: 'Liqueur',
        items: [
          {
            name: 'Suze',
            degree: 20
          }
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
