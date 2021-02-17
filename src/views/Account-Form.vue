<template>
  <section>
    <Navbar></Navbar>
    <div class="container-fluid row pb-5">
      <SignupForm class="col-sm-11 col-md-7 col-lg-6" v-if="$route.path == '/signup' "/>
      <LoginForm class="col-sm-11 col-md-7 col-lg-6" v-else-if="$route.path == '/login' "/>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navigation/Navbar'
import SignupForm from '../components/Accounts/signup-form'
import LoginForm from '../components/Accounts/login-form'

export default {
  name: 'AccountForm',
  components: {
    Navbar,
    SignupForm,
    LoginForm,
  }
}
</script>

<style scoped>
section{
  background: linear-gradient(104.87deg, rgba(7, 26, 82, 0.88) 2%, rgba(8, 105, 114, 0.88) 60.49%), url('../assets/bg_proto.png');
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
