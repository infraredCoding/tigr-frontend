<template>
  <nav class="px-5 shadow-lg">
    <div class="row">
        <h4 class="col bname pt-3">TIGR</h4>
    </div>
    <ul class="nav-links">
          <button class="btn text-white bg-transparent" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-ellipsis-v"></i>
          </button>
          <ul class="dropdown-menu" id="ss" aria-labelledby="dropdownMenuLink">
            <li v-if="loggedIn"><button class="btn text-black"><i class="far fa-bell"></i>  Notifications</button></li>
            <li v-if="loggedIn"><button class="btn text-black" @click.prevent="logout"><i class="fas fa-sign-out-alt"></i>  Logout</button></li>
          </ul>
        <li v-if="loggedIn"><button class="btn text-white ls"><i class="far fa-bell"></i></button></li>
        <li v-if="loggedIn"><button class="btn text-white ls" @click.prevent="logout"><i class="fas fa-sign-out-alt"></i></button></li>
    </ul>
  </nav>

</template>

<script>

export default {
  name: 'Navbar',
  components: {
    // Sidenav,
  },
  data(){
    return {
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
.bname{
  /* font-family: 'Lobster', cursive; */
  font-family: 'Pacifico', cursive;
  font-size: 27px;
  color: #e2f3f5;
}
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

@media screen and (max-width: 400px) {
  .ls{
    display: none;
  }
}

@media screen and (min-width: 401px){
  #dropdownMenuLink{
    display: none;
  }
  #ss{
    display: none;
  }
}
</style>
