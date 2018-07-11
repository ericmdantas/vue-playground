import Vue from 'vue'
import Vuex from 'vuex'
import Todo from './models/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    todo: new Todo(),
    todos: [],
    todosCache: [],
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
      state.todo = new Todo(todo)
    },
    cacheTodos(state, todos) {
      todos.forEach((t) => {
        t.selected = false
      })

      const todosInstance = todos.map(t => new Todo(t))

      state.todos = todosInstance
      state.todosCache = todosInstance
    },
    selectTodo(state, todoId) {
      state.todos.forEach((t) => {
        if (t.id === todoId) {
          t.selected = true
        } else {
          t.selected = false
        }
      })
    },
    unselectTodos(state) {
      state.todos.forEach((t) => {
        t.selected = false
      })
    },
  },
  getters: {
    evenTodos(state) {
      return state.todos.filter((t) => t.id % 2 === 0)
    },
    oddTodos(state) {
      return state.todos.filter((t) => t.id % 2 === 1)
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
