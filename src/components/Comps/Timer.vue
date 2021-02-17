<template>
  <div @keydown.space="test" class="col-md-8 col-sm-12 pt-3">
    <div class="card shadow-lg">
      <div class="card-body">
        <div class="row mt-2">
          <div class="col">
            <h5 class="card-title" id="scrambles">
              {{scrs[count]}}
            </h5>
          </div>
        </div>
        <div class="row my-4">
          <div class="col">
            <h2 class="time" :class="{ ready: status === 'ready' }">{{formattedTime}}</h2>
            {{status}}
          </div>
        </div>
        <div class="d-flex justify-content-center mt-3 mb-2">

          <button class="btn btn-sm penalty mx-2" id="ok" :disabled="count == 0">Ok</button>
          <button role="button" class="btn btn-sm penalty mx-2" id="plus"
            @click="plus(count-1, $event)"
            :disabled="count == 0">
              +2
          </button>
          <button class="btn btn-sm penalty mx-2" id="dnf"
            @click="dnf(count-1, $event)"
            :disabled="count == 0">DNF</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    scrs: Array
  },
  data () {
    return {
      count: 0,
      status: 'stopped',
      timeList: [],
      penalty: [],
      currentTime: 0,
      ticker: undefined,
      formattedTime: '00:00.00'
    }
  },
  methods: {
    startTimer(e){
      if(e.key == " " && this.status === 'ready'){
        this.status = 'running'
        this.ticker = setInterval(() => {
          this.currentTime += 10;
          this.formattedTime = this.formatTime(this.currentTime);
        }, 10);
      }
    },
    formatTime(secs){
      let measured = new Date(null);
      measured.setMilliseconds(secs);
      let MHSTime = measured.toISOString().substr(14, 8);
      return MHSTime;
    },
    prepOrStop(e){
      if(e.key == " "){
        if(this.status === 'stopped' && this.count < this.scrs.length){
          setTimeout(() => {
            this.status = 'ready';
          }, 200)
        }else if(this.status === 'running'){
          this.status = 'stopped'
          window.clearInterval(this.ticker);

          // this.timeList.push(this.currentTime);
          // this.penalty.push(0);
          this.addToList(parseInt(this.currentTime)/1000, 0);
          this.$emit('addedTime', {'times': this.timeList, 'penalties': this.penalty});
          this.count++;

          this.currentTime = 0;
        }
      }
    },
    addToList(t, p){
      this.timeList.push(t);
      this.penalty.push(p);
    },
    plus(i, e){
      this.penalty[i] = 1;
      e.target.blur();
    },
    dnf(i, e){
      this.penalty[i] = 2;
      e.target.blur();
    }
  },
  created () {
    window.addEventListener('keyup', e => this.startTimer(e))
    window.addEventListener('keydown', e => this.prepOrStop(e))
  }
}
</script>

<style scoped>
.ready{
  color: #17b978;
}
.penalty#ok{
  background: #17b978;
  color: #fff;
}
.penalty#plus{
  background: #775ada;
  color: #fff;
}
.penalty#dnf{
  background: #ff304f;
  color: #fff;
}

#scrambles{
  letter-spacing: 1.5px;
}
.time{
  font-size: 60px;
}
.icon{
  padding-top: 10px;
  background: linear-gradient(to right, #a7ff83, #17b978);
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
