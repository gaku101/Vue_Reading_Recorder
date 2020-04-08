import Vue from 'vue'
import VueRouter from 'vue-router'
import BookSearch from '../components/BookSearch.vue'
// import BookForm from './components/BookForm.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: BookSearch
  },
  // {
  //   path: '/form',
  //   name: 'form',
  //   component: BookForm
  // },
  {path: '*', redirect: '/'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
