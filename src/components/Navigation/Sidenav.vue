<template>
  <div class="container justify-content-center" id="holder">
    <ul class="items">
      <li class="item">
        <a class="px-2" href="#">Home</a>
      </li>
      <li class="item">
        <a class="px-2" href="#">About</a>
      </li>
      <li class="item">
        <a class="px-2" href="#">Competitions</a>
      </li>
      <li class="item">
        <a class="px-2" href="#">Contact</a>
      </li>
      <li class="item">
        <a class="text-white py-2 px-4 rounded-3" id="signup" href="#">Signup</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidenav'
}
</script>

<style scoped>
#holder{
  margin-top: 75px;
  width: 50%;
  background: #fff;
}
ul li{
  list-style-type: none;
}
li a{
  text-decoration: none;
}
</style>
