<template>
  <h3 class="text-center pt-5">What is <span id="title">TIGR</span> ?</h3>
  <div id="features" class="container-fluid row pt-3">
    <div class="col-md-4">
      <h4>Host Competitions</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui</p>
    </div>
    <div class="col-md-4">
      <h4>Compete</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui</p>
    </div>
    <div class="col-md-4">
      <h4>View Stats</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui</p>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'Features'
  }
</script>

<style scoped>
span#title{
  font-family: 'Pacifico', cursive;
}
#features{
  width: 84vw;
  margin: auto;
}
#features h3{
  color: #164A41;
}
#features p{
  color: #4D774E;
}
</style>
