import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AccountForm from '../views/Account-Form'
import Main from '../views/Main'
import Dashboard from '../views/Pages/Dashboard'
import Competitions from '../views/Pages/Competitions'
import CompOverview from '../views/Pages/CompOverview'
import AddComp from '../views/Pages/AddComp'
import CompForm from '../components/Comps/CompForm'
import SubmitScramble from '../components/Comps/SubmitScramble'
import Schedules from '../components/Comps/Scheduler'
import Compete from '../views/Pages/Compete'
import Rankings from '../views/Pages/Rankings'

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
    path: '/app',
    name: 'App',
    component: Main,
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: 'dashboard',
        component: Dashboard,
        name: 'Dashboard'
      },
      {
        path: 'competitions',
        component: Competitions,
        name: 'Competitions'
      },
      {
        path: 'competition/:id',
        component: CompOverview,
        name: 'CompOverview'
      },
      {
        path: 'rankings/:compid/:event/:round',
        component: Rankings,
        name: 'rankings'
      },
      {
        path: 'compete/:compid/:event/:round',
        component: Compete,
        name: 'Compete'
      },
      {
        path: 'addComp',
        component: AddComp,
        name: 'AddComp',
        children: [
          {
            path: 'compInfo',
            component: CompForm,
            name: 'compInfo'
          },
          {
            path: 'scrambles/:id',
            component: SubmitScramble,
            name: 'submitScrambles'
          },
          {
            path: 'schedules/:id',
            component: Schedules,
            name: 'makeSchedules'
          }
        ]
      },
    ],
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
