<template>
  <NavG />
  <Sidenav />

    <div class="content px-5">
      <router-view />
    </div>

  <!-- <Footer /> -->
</template>

<script>
import NavG from '../components/Navigation/Nav-General'
// import Cards from '../components/Dashboard/Cards'
import Sidenav from '../components/Navigation/Sidenav'
// import Table from '../components/General/Table'
// import Footer from '../components/Intro/Footer'

export default {
  name: 'Main',
  components: {
    NavG,
    // Cards,
    Sidenav,
    // Table,
    // Footer,
    // Sidenav
  }
}
</script>

<style scoped>
*{
  overflow: hidden;
}
.content{
  margin-left: 90px;
  height: 100%;
  min-height: 89vh;
  background-color: #071a52;
  width: calc(100% - 90px);
}
@media screen and (max-width: 675px) {
  .content{
    width: 100%;
    margin-left: 0;
  }
}
</style>
