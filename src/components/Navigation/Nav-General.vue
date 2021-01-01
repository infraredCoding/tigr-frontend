<template>
  <nav class="px-5 shadow-lg">
    <div>
        <h4 class="bname pt-3">TIGR</h4>
    </div>
    <ul class="nav-links">
        <!-- <li v-if="loggedIn"><a href="#"><i class="far fa-user ic"></i></a></li> -->
        <li v-if="loggedIn"><button class="btn text-white">Profile</button></li>
        <li v-if="loggedIn"><button class="btn text-white" @click.prevent="logout"><i class="fas fa-sign-out-alt"></i></button></li>
    </ul>
    <!-- <div class="burger" @click.prevent="toggleSidenav">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div> -->
  </nav>
  <!-- <Sidenav v-if="sidenav"></Sidenav> -->
</template>

<script>
// import Sidenav from './Sidenav'

export default {
  name: 'Navbar',
  components: {
    // Sidenav,
  },
  data(){
    return {
      sidenav: false,
    }
  },
  computed:{
    loggedIn(){
      return this.$store.getters.loggedIn
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logoutUser').then(this.$router.push({ name: 'Login'}))
    },
    // toggleSidenav(){
    //   const burger = document.querySelector(".burger");
    //   const nav = document.querySelector(".nav-links");
    //   const navLinks = document.querySelectorAll(".nav-links li");
    //
    //       //Toggle Nav
    //     nav.classList.toggle("nav-active");
    //
    //     //Animate Links
    //     navLinks.forEach((link, index) => {
    //         if (link.style.animation) {
    //             link.style.animation = ""
    //         } else {
    //             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    //         }
    //     });
    //     //Burger Animation
    //     burger.classList.toggle("toggle");
    // }
  }
}
</script>

<style scoped>
.ic{
  font-size: 25px;
}
nav{
  background: #071a52;
  /* background: linear-gradient(104.87deg, #071a52 2%, #086972 60.49%); */
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  min-height: 10vh;
}
.nav-links{
  display: flex;
  padding-top: 16px;
  justify-content: flex-end;
  width: 60%;
}
.nav-links li {
    list-style: none;
}

.nav-links a {
  color: rgb(226, 226, 226);
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
  margin-right: 35px;
}
/*
.burger {
    display: none;
}

.burger div {
    width: 25px;
    height: 3px;
    background-color: rgb(226, 226, 226);
    margin: 5px;
    transition: all 0.3s ease;
}
@media screen and (max-width: 1024px) {
  .nav-links {
      width: 70%;
  }
}
@media screen and (max-width: 995px) {
  body {
    overflow-x: hidden;
  }
  .nav-links {
    position: fixed;
    right: 0px;
    height: 90vh;
    top: 10vh;
    justify-content: space-around;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  .nav-links a{
    color: #4D774E;
  }
  .burger {
    padding-top: 12px;
    display: block;
    cursor: pointer;
  }
  #signup{
    background-color: #F1B24A;
    color: #fff;
  }
} */
.nav-active {
  transform: translateX(0%);
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
#signup{
  border: 2.5px solid #F1B24A;
}

.sidenav-toggler{
  border: 2.5px solid #F1B24A;
  border-radius: 10px;
  color: #fff;
}
#signup:hover{
  background: #F1B24A;
  transition: 0.25s ease-in-out;
}
.bname{
  /* font-family: 'Lobster', cursive; */
  font-family: 'Pacifico', cursive;
  font-size: 27px;
  color: #e2f3f5;
}
</style>
