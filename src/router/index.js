import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AccountForm from '../views/Account-Form'
import Dashboard from '../views/Main'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: AccountForm,
    meta: {
      redirectDash: true,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: AccountForm,
    meta: {
      redirectDash: true,
    }
  },

  // auth required
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
