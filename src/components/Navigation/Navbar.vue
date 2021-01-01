<template>
  <nav class="bg-transparent shadow-lg px-5">
    <div>
        <h4 class="bname pt-3">TIGR</h4>
    </div>
    <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Competition</a></li>
        <li><a href="#">About</a></li>
        <li><router-link to="/login" class="btn rounded-pill px-4" id="signup">Login</router-link></li>
    </ul>
    <div class="burger" @click.prevent="toggleSidenav">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
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
  methods: {
    toggleSidenav(){
      const burger = document.querySelector(".burger");
      const nav = document.querySelector(".nav-links");
      const navLinks = document.querySelectorAll(".nav-links li");

          //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    }
  }
}
</script>

<style scoped>
nav{
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  min-height: 10vh;
}
.nav-links{
  display: flex;
  padding-top: 20px;
  justify-content: space-around;
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
}

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
    background-color: #17b978;
    color: #fff;
  }
}
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

.sidenav-toggler{
  border: 2.5px solid #F1B24A;
  border-radius: 10px;
  color: #fff;
}
#signup{
  background: #17b978;
  transition: 0.25s ease-in-out;
}
.bname{
  /* font-family: 'Lobster', cursive; */
  font-family: 'Pacifico', cursive;
  font-size: 27px;
  color: #e2f3f5;
}
</style>
