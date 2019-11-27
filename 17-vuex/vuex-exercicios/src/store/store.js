import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'
Vue.use(Vuex)
import * as getters from './getters'

export default new Vuex.Store({
  state: {
    nome: 'Maria',
    sobrenome: 'Silva',
  },
  getters,
  modules: {
      carrinho,
      parametros
  }
})