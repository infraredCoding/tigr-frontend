import {api} from '../../axios/axios-api.js'

const state = {
  token: localStorage.getItem('token') || null,
}

const actions = {
  loginUser(context, credentials){
    return new Promise((resolve, reject) =>{
      api.post('AppUser/Login', {
        Email: credentials.email,
        Password: credentials.password
      })
        .then(response => {
          const token = response.data.token

          localStorage.setItem('token', token)
          context.commit('saveToken', token)
          resolve(response)
        })
        .catch(
          err => {
            console.log(err)
            reject(err)
        })
    })
  },

  registerUser(context, credentials){
    api.post('AppUser/Register', {
      UserName: credentials.username,
      FullName: credentials.name,
      Email: credentials.email,
      Password: credentials.pass,
      WcaId: credentials.wca,
    }).then(
        this.$router.push({ name: 'Login' })
      )
      .catch(err => console.log(err))
  },

  logoutUser(context){
      localStorage.removeItem('token')
      context.commit('deleteToken')
  }
}

const mutations = {
  saveToken(state, token){
    state.token = token
  },
  deleteToken(state){
    state.token = null;
  }
}

const getters = {
  loggedIn(state){
    return state.token !== null;
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
