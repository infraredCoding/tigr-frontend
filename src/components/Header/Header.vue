<template>
  <div class="holder container">
    <h1>
      TIGR
    </h1>
    <h3>A Platform For Online Speedcubing Competitions</h3>
  </div>
  <div class="pt-3">
    <button type="button" name="button" class="cta btn btn-outline rounded-pill px-4">Get Started</button>
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
    background: #F1B24A;
    color: #fff;
    font-weight: bold;
  }
</style>
