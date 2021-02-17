<template>
  <div class="col-md-4 col-sm-12 pt-3">
    <div class="card shadow-md">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h5 class="card-title">Time List</h5>
            <ol>
              <li v-for="(t, i) in solves.times" :key="i">{{ formatSolves(t, solves.penalties[i]) }}</li>
            </ol>

            <div v-if="solves.times !== undefined && solves.times.length === 5">
              <h6>Ao5: {{getAvg}}</h6>
              <button type="button" class="btn rounded-3 px-2" id="commit" @click="$emit('submitTimes', getAvg)">Submit</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeList',
  props: {
    solves: Array,
  },
  methods: {
    formatSolves(t, p){
      if (p === 1){
        t += 2;
        return `${t}+`
      }else if (p === 2){
        return `${t} (DNF)`;
      }else {
        return `${t}`;
      }
    }
  },
  computed: {
    getAvg(){
      let tlist = [];
      let avg = 0;
      let total = 0;
      if(this.solves.times.length > 0){
        for(let i=0; i<this.solves.times.length; i++){
          if (this.solves.penalties[i] == 1){
            tlist.push(this.solves.times[i] + 2)
          }else if(this.solves.penalties[i] == 2){
            tlist.push(null)
          }else {
            tlist.push(this.solves.times[i])
          }
        }
      }

      let max = null;
      let min = 0;

      if (!tlist.includes(null)){
        max = Math.max(...tlist);
        min = Math.min(...tlist);
      }else {
        tlist.splice(tlist.indexOf(null), 1);
        min = Math.min(...tlist);
      }

      for (let i=0; i<tlist.length; i++){
        if (tlist[i] !== max && tlist[i] !== min){
          total += parseFloat(tlist[i]);
        }
      }

      avg = total/3;
      return avg.toFixed(2);
    }
  }
}
</script>

<style scoped>
#commit{
  background: #17b978;
  color: #fff;
}
/* .holder{
  margin-left: 90px;
  width: calc(100% - 90px);
} */
.card{
  background-color: #102970;
  /* background: linear-gradient(to right, #0e153a,#3d5af1); */
  color: #e2f3f5;
  border: none;
  border-radius: 10px;
}
</style>
