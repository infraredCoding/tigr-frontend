<template>
  <header>
    <Navbar />
    <Header />
  </header>
  <Features />
  <Footer />
</template>

<script>
import Navbar from './components/Navigation/Navbar'
import Header from './components/Header/Header'
import Features from './components/Intro/Features'
import Footer from './components/Intro/Footer'

export default{
  name: 'App',
  components: {
    Navbar,
    Header,
    Features,
    Footer,
  }
}
</script>
<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
}
header{
  background-image: url("./assets/bg_proto.png");
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
