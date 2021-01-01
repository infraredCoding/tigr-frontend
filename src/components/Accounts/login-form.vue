<template>
  <form class="bg-white rounded-3 px-5 pt-3 mt-5 shadow-lg" @submit.prevent="login">
    <h3 class="text-center">Log In</h3>
    {{res}}
    <div class="form-group py-3 px-3">
      <input type="email" class="form-control" placeholder="Email" v-model="email">
    </div>
    <div class="form-group py-3 px-3">
      <input type="password" class="form-control" placeholder="Password" v-model="password">
    </div>
    <input type="submit" class="btn text-white rounded-3" value="Login" />
    <p class="pt-3">New here? <router-link to="/signup" class="link">Create an account</router-link></p>
  </form>
</template>

<script>
// import {api} from '../../axios/axios-api.js'

export default {
  name: 'LoginForm',
  data () {
    return{
      email: '',
      password: '',
    }
  },
  methods: {
    login () {
      this.$store.dispatch('loginUser', {
        email: this.email,
        password: this.password
      }).then(this.$router.push({ name: 'Dashboard'}))
    }
  }
}
</script>

<style scoped>
h3{
  font-family: 'Ubuntu', sans-serif;
  color: #17b978;
  padding-bottom: 10px;
}
form{
  margin: auto;
}
input[type=submit]{
  background-color: #17b978;
  /* background: #F1B24A; */
  padding-left: 70px;
  padding-right: 70px;
}

.link{
  text-decoration: none;
  color: #17b978;
  font-weight: bold;
}
</style>
