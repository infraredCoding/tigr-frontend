<template>
  <nav class="navbar navbar-expand-lg bg-transparent shadow-lg">
    <div class="container">
      <a class="navbar-brand bname" href="#">TIGR</a>
      <button class="sidenav-toggler btn bg-transparent d-lg-none d-xl-none" @click.prevent="toggleSidenav">
        <span><i class="fa fa-bars"></i></span>
      </button>
      <div class="navbar d-none d-lg-block">
        <ul class="navbar-nav nav-links">
          <li class="nav-item">
            <a class="px-2" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="px-2" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="px-2" href="#">Competitions</a>
          </li>
          <li class="nav-item">
            <a class="px-2" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="text-white py-2 px-4 rounded-3" id="signup" href="#">Signup</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Sidenav v-if="sidenav"></Sidenav>
</template>

<script>
import Sidenav from './Sidenav'

export default {
  name: 'Navbar',
  components: {
    Sidenav,
  },
  data(){
    return {
      sidenav: false,
    }
  },
  methods: {
    toggleSidenav(){
      this.sidenav = !this.sidenav;
    }
  }
}
</script>

<style scoped>
nav{
  height: 70px;
}

#signup{
  border: 2.5px solid #F1B24A;
  margin-left: 25px;
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
  color: #9DC88D;
}
.nav-link-holder{
  margin-left: auto;
  padding-right: 10vw;
}

li a{
  text-decoration: none;
  color: #fff;
}

li a:hover{
  cursor: pointer;
}

.nav-links{
  margin-left: auto;
  font-size: 18px;
}
</style>
