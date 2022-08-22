import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Create from '../components/Create.vue'
import Edit from '../components/Edit.vue'
import List from '../components/List.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
