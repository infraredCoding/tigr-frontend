<template>
  <form class="bg-white rounded-3 px-5 pt-3 mt-5 shadow-lg" @submit.prevent="registerUser">
    <h3 class="text-center">Create An Account</h3>
    <div class="form-group pb-2 pt-2 px-3">
      <input type="text" class="form-control" placeholder="Full Name" v-model="name">
    </div>
    <div class="form-group py-2 px-3">
      <input type="email" class="form-control" placeholder="Email" v-model="email">
    </div>
    <div class="form-group py-2 px-3">
      <input type="text" class="form-control" placeholder="Username" v-model="username">
    </div>
    <div class="form-group py-2 px-3">
      <input type="text" class="form-control" placeholder="WCA ID (Optional)" v-model="wca">
    </div>
    <div class="form-group py-2 px-3">
      <input type="password" class="form-control" placeholder="Password" v-model="pass">
    </div>
    <div class="form-group py-2 px-3">
      <input type="password" class="form-control" placeholder="Confirm Password" v-model="passC" :class="{'is-invalid' : comparePasswords === false}">
    </div>
    <span id="conf" v-if="comparePasswords === false">Passwords Don't Match</span>
    <div class="form-group pt-2 px-3">
      <div class="form-check form-group pt-2">
        <p>I agree to the T&amp;C and Privacy Policy of TIGR
          <input class="form-check-input success" type="checkbox" value="" id="flexCheck" required>
        </p>
      </div>
    </div>
    <input type="submit" class="btn text-white rounded-pill mt-1" value="Register" />
    <p class="pt-2 pb-2">Already have an account? <router-link to="/login" class="link">Login</router-link></p>
  </form>
</template>

<script>
// import { api } from '../../axios/axios-api.js'

export default {
  name: 'SignupForm',
  data () {
    return{
      name: '',
      email: '',
      username: '',
      phone: '',
      wca: '',
      pass: '',
      passC: '',
    }
  },
  computed: {
    comparePasswords(){
      if (this.pass !== '' && this.passC !== ''){
        return this.passC === this.pass;
      }
      return null;
    }
  },
  methods: {
    registerUser(){
      if (this.pass === this.passC && this.pass !== ''){
        this.$store.dispatch('registerUser', {
          username: this.username,
          name: this.name,
          email: this.email,
          pass: this.pass,
          wca: this.wca,
        }).then(this.$router.push({ name: 'Login'}))
        .catch(e => console.log(e))
      }
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
#conf{
  color: red;
  font-size: 14px;
}
input[type="submit"]{
  /* background: linear-gradient(to right, #164A41, #4D774E); */
  background: #17b978;
  padding-left: 70px;
  padding-right: 70px;
}
.link{
  text-decoration: none;
  color: #17b978;
  font-weight: bold;
}
p{
  font-size: 15px;
}
</style>
