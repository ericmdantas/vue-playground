import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    todo: {},
    todoLoading: false,
    cacheTodoDone: false
  }, 
  mutations: {
    loading(state, status) {
      state.todoLoading = status;
    },
    cacheTodo(state, todo) {
      state.todo = todo
      state.cacheTodoDone = true
    },
  },
  actions: {
    cacheTodo({commit}, value = 99) {
      commit('loading', true)

      return fetch('https://jsonplaceholder.typicode.com/todos/' + value)
        .then(t => t.json())
        .then(t => commit('cacheTodo', t))
        .finally(() => commit('loading', false))
    },
    getSome({dispatch}, value) {
      dispatch('cacheTodo', value)
    }
  }
})
