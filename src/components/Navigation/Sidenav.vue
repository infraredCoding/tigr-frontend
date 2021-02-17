<template>
  <div class="col-1">
    <nav id="sidebar" class="sidebar">
      <ul class="nav navs">
        <button id="toggler" class="btn shadow-lg" @click="toggleSidebar"><i class="fas fa-bars"></i></button>
        <li class="nav-item">
          <router-link :to="{ name: 'Dashboard'}" class="nav-link"><i class="fas fa-tachometer-alt"></i> <span class="link-text">Dashboard</span></router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Competitions'}" class="nav-link"><i class="fas fa-trophy"></i> <span class="link-text">Competitions</span></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-history"></i> <span class="link-text">History</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-chart-area"></i> <span class="link-text">Stats</span><sup><span class="badge bg-primary">Beta</span></sup> </a>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'compInfo' }" class="nav-link btn btn-primary text-white"><i class="fas fa-sitemap"></i> <span class="link-text">Host A Comp</span></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-cog"></i> <span class="link-text">Settings</span></a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Sidenav',
  methods: {
    toggleSidebar(){
      const sidebar = document.querySelector('#sidebar');
      const toggler = document.querySelector('#toggler i');

      if (toggler.classList.contains('fa-angle-double-left')){
        toggler.classList.replace('fa-angle-double-left', 'fa-bars');
      }else {
        toggler.classList.replace('fa-bars', 'fa-angle-double-left');
      }
      sidebar.classList.toggle('toggle');

      this.expanded = !this.expanded;
    }
  }
}
</script>

<style scoped>
#sidebar{
  position: fixed;
  background-color: #0e153a;
  /* background: linear-gradient(104.87deg, #0e153a 2%, #071a52 60.49%); */
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  /* transform: translateX(0%); */
  transition: all 0.5s ease-out;
  box-shadow: -1px 0 0 rgba(0,0,0, 0.1);
  width: 90px;
}

#sidebar.toggle{
  width: 20%;
}
.toggle #toggler{
  transform: translateX(20%);
}
.toggle .link-text{
  display: inline-block;
}

.link-text{
  font-size: 16px;
  display: none;
}

#sidebar .nav-item{
  text-align: center;
  padding: 15px;
}

#sidebar .nav-item a{
  color: #e2f3f5;
}
#toggler{
  /* transform: translateY(-100%); */
  /* transform: translateX(00%); */
  margin-left: 20px;
  margin-top: 20px;
  background: #17b978;
  color: #e2f3f5;
  width: 50px;
  transition: all 0.2s ease-out;
}

.navs{
  display: flex;
  flex-direction: column;
}

/* less than 675 no sidebar, need to toggle it*/
@media screen and (max-width: 675px){
  #sidebar {
    width: 0;
  }
  #toggler{
    margin-left: 10px;
    background-color: transparent;
    border-radius: 40%;
  }
  #sidebar .nav-item{
    display: none;
  }
  #sidebar.toggle{
    width: 90%;
  }
  #sidebar.toggle .nav-item{
    display: block;
  }
}
</style>
