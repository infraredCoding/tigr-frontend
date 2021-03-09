<template>
  <div class="pt-4 holder">
    <table class="table table-borderless">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Competitor</th>
          <th>Event</th>
          <th>Solve List</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sub, i) in data" :key="i">
          <td>{{i+1}}</td>
          <td>{{sub.name}}</td>
          <td>{{sub.event}}</td>
          <td>{{formatTimes(sub.solves, i)}}</td>
          <td>{{result(sub.result)}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RankingTable',
  props: {
    data: Array,
  },
  methods: {
    result(r){
      if (r == null){
        return 'DNF'
      }else{
        return r
      }
    },
    formatTimes(s, d){
      let final = ''
      for(let i=0; i<s.length; i++){
        if (this.data[d].pen[i] === 1){
          final += ` ${(parseFloat(s[i]) + 2)}+,`
        }else if (this.data[d].pen[i] === 2){
          final += ` ${parseFloat(s[i])} (DNF),`
        }else {
          final += ` ${parseFloat(s[i])},`
        }
      }
      return final.slice(0, -1);
    }
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
</style>
