<template>
  <div class="holder container">
    <h1>
      TIGR
    </h1>
    <h3>A Platform For Online Speedcubing Competitions</h3>
  </div>
  <div class="pt-3">
    <router-link to="/signup" type="button" class="cta btn btn-outline rounded-pill px-4">Get Started</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .holder{
    padding-top: 15vh;
    margin: auto;
    color: #fff;
  }
  .holder h1{
    font-family: 'Pacifico', cursive;
  }
  .cta{
    background: #17b978;
    color: #fff;
    font-weight: bold;
  }
</style>
