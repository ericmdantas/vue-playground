import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Todo from './components/Todo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },    
  ]
})
