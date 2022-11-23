import { createStore } from "vuex"

export const store = createStore({
  state: {
    categories: null,
    score: null,
  },
  mutations: {
    addCategories(state, categories) {
      state.categories = categories
    },
    addScore(state, score){
      state.score = score
    }
  },
  getters:{
    getCategories(state) {
      return state.categories
    },
    getScore(state){
      return state.score
    }
  },
  actions: {
    addCategories({commit}, categories) {
      commit('addCategories', categories)
    },
    addScore({commit}, score){
      commit('addScore', score)
    }
  }
})

