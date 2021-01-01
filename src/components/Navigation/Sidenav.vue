<template>
  <div class="row">
    <div class="col-1">
      <nav id="sidebar" class="col sidebar">
        <button id="toggler" class="btn shadow-lg"><i class="fas fa-angle-left"></i></button>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Competitions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Stats <sup><span class="badge bg-primary">Beta</span></sup> </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidenav'
}
</script>

<style scoped>
#sidebar{
  position: fixed;
  background-color: #0e153a;
  /* background: linear-gradient(104.87deg, #0e153a 2%, #071a52 60.49%); */
  top: 10vh;
  bottom: 0;
  left: 0;
  z-index: 999;
  box-shadow: -1px 0 0 rgba(0,0,0, 0.1);
  min-width: 20vw;
}

#sidebar .nav-item{
  text-align: center;
  padding: 25px 0;
}

#sidebar .nav-item a{
  color: #e2f3f5;
}
#toggler{
  transform: translateY(-100%);
  margin-top: 20px;
  background: #17b978;
  color: #e2f3f5;
}
</style>
