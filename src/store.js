import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    todo: {},
    todos: [],
    loadingTodo: false,
    loadingTodos: false,
  },
  mutations: {
    loadingTodo(state, status) {
      state.loadingTodo = status
    },
    loadingTodos(state, status) {
      state.loadingTodos = status
    },
    cacheTodo(state, todo) {
      state.todo = todo
    },
    cacheTodos(state, todos) {
      state.todos = todos
    },
    selectTodo(state, todoId) {
      state.todos.forEach((t) => {
        if (t.id === todoId) {
          Vue.set(t, 'selected', true)
        } else {
          Vue.set(t, 'selected', false)
        }
      })
    },
    unselectTodos(state) {
      state.todos.forEach((t) => {
        t.selected = false
      })
    },
  },
  actions: {
    cacheTodo({ commit }, value) {
      commit('loadingTodo', true)

      let BASE_URL = "https://jsonplaceholder.typicode.com/todos/" + value

      return fetch(BASE_URL)
        .then(t => t.json())
        .then(t => commit('cacheTodo', t))
        .finally(() => commit('loadingTodo', false))
    },
    cacheTodos({ commit }) {
      commit('loadingTodos', true)

      const BASE_URL = "https://jsonplaceholder.typicode.com/todos"

      return fetch(BASE_URL)
        .then(t => t.json())
        .then(t => commit('cacheTodos', t))
        .finally(() => commit('loadingTodos', false))
    },
    getById({ dispatch }, value) {
      dispatch('cacheTodo', value)
    }
  },
})
