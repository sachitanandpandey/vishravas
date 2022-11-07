import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: 'newuser'
  },
  getters: {
    getUser (state) {
      return state.currentUser
    }
  },
  mutations: {
    setUser (state, payload) {
      state.currentUser = payload.value
    }
  },
  actions: {
    async currentuser ({ state }) {
      return state.currentUser
    }
  },
  modules: {
  }
})
