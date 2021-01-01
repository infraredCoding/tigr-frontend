<template>
  <NavG />
  <Sidenav />
  <!-- <Footer /> -->
</template>

<script>
import NavG from '../components/Navigation/Nav-General'
import Sidenav from '../components/Navigation/Sidenav'
// import Footer from '../components/Intro/Footer'

export default {
  name: 'Dashboard',
  components: {
    NavG,
    // Footer,
    Sidenav
  }
}
</script>

<style>
</style>
