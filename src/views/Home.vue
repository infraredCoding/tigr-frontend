<template>
  <header>
    <Navbar />
    <Header />
  </header>
  <Features />
  <Footer />
</template>

<script>
import Navbar from '../components/Navigation/Navbar'
import Header from '../components/Header/Header'
import Features from '../components/Intro/Features'
import Footer from '../components/Intro/Footer'

export default{
  name: 'Home',
  components: {
    Navbar,
    Header,
    Features,
    Footer,
  }
}
</script>
<style>
header{
  background: linear-gradient(104.87deg, rgba(7, 26, 82, 0.94) 2%, rgba(8, 105, 114, 0.94) 60.49%), url('../assets/bg_proto.png');
  height: 70vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
