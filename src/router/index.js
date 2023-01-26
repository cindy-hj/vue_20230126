import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParentPage from '../views/ParentPage.vue'
import ProvideInject from '../views/ProvideInject.vue'
import EventView from '../views/EventView.vue'
import ComputedWatch from '../views/ComputedWatch.vue'
import SetUp from '../views/SetUp.vue'

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
    path: '/parent',
    name: 'parent',
    component: ParentPage
  },
  {
    path: '/provideinject',
    name: 'provideinject',
    component: ProvideInject
  },
  {
    path: '/event',
    name: 'event',
    component: EventView
  },
  {
    path: '/computedwatch',
    name: 'computedwatch',
    component: ComputedWatch
  },
  {
    path: '/setup',
    name: 'setup',
    component: SetUp
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
