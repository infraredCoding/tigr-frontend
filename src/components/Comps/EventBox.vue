<template>
  <div class="col-md-3 col-sm-6 pt-4">
    <div class="card shadow-md py-2">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h5 class="card-title">{{puzzle}} {{round}}</h5>
            <h6 v-if="now < starts">Starts at {{starts.toLocaleTimeString()}}</h6>
            <h6 v-else-if="now > ends">This Event Has Ended</h6>
            <h6 v-else>This event is currently going on</h6>
            <button type="button" class="btn rounded-3 px-2" id="compete"
            :disabled="now > ends || now < starts"
            @click.prevent="$emit('compete', puzzle, round)">
              Compete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventBox',
  props: {
    puzzle: String,
    round: String,
    start: String,
    end: String
  },
  data () {
    return {
      now: new Date(),
      starts: new Date(this.start),
      ends: new Date(this.end),
    }
  },
  methods: {
    competeWindow(){
      if (this.now.getTime() <= this.ends.getTime() && this.now.getTime() >= this.starts.getTime()){
        return true;
      }else{
        return false;
      }
    }
  }
}
</script>

<style scoped>
#compete{
  background: #17b978;
  color: #fff;
}
.card{
  background-color: #102970;
  /* background: linear-gradient(to right, #0e153a,#3d5af1); */
  color: #e2f3f5;
  border: none;
  border-radius: 10px;
}
</style>
