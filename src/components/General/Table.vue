<template>
  <div class="pt-4 holder">
    <table class="table table-borderless">
      <caption><h4>{{title}}</h4></caption>
      <thead>
        <tr>
          <th v-for="(col, i) in columns" :key="i" scope="col">{{col}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(comps, i) in data" :key="i">
          <td>{{comps.c}}</td>
          <td>{{comps.start}}</td>
          <td>{{comps.end}}</td>
          <td v-if="title === 'Ongoing Comps' && !comps.registered"><button @click="$emit('joinComp', i)" class="btn btn-sm joinComp">Join</button></td>
          <td v-else-if="title === 'Ongoing Comps' && comps.registered"><p class="py-1 rounded-pill joinComp">Joined</p></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    title: String,
    columns: Array,
    data: Array,
  }
}
</script>

<style scoped>
h4{
  color: #e2f3f5;
}
caption{
  caption-side: top;
}
table{
  background-color: #102970;
  color: #e2f3f5;
  border: none;
  border-radius: 10px;
}
.joinComp{
  display: block;
  background: linear-gradient(to right, #9d50bb, #6e48aa);
  color: #e2f3f5;
}
.holder{
  overflow-x: auto;
}
/* .holder{
  margin-left: 90px;
  width: calc(100% - 90px);
}
@media screen and (max-width: 675px) {
  .holder{
    width: 100%;
    margin-left: 0;
  }
}
.holder{
  background-color: #102970;
  color: #e2f3f5;
  border: none;
  border-radius: 10px;
} */
</style>
