import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!store.getters.loggedIn) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.redirectDash)) {

    if (store.getters.loggedIn) {
      next({
        path: '/dashboard',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})


const app = createApp(App)
app.use(router)
app.use(store)
app.use(Vuex)
app.mount('#app')
