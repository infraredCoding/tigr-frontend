<template>
  <h2>Some Comp 2021</h2>
  <h3>3x3x3 Round-1</h3>
  <div class="row">
    <Timer :scrs="scrambleSet" @addedTime="updateTimeList" />
    <TimeList :solves="timeList" @submitTimes="submitTimes"/>
  </div>
</template>

<script>
import { api } from '../../axios/axios-api.js'
import Timer from '../../components/Comps/Timer'
import TimeList from '../../components/Comps/Times'
import store from '../../store'

export default {
  name: 'Compete',
  components: {
    Timer,
    TimeList,
  },
  data(){
    return {
      scrambleSet: [],
      timeList: []
    }
  },
  mounted(){
    api.get(`Competitions/getScrambles/${this.$route.params.compid}/${this.$route.params.event}/${this.$route.params.round}`)
      .then(res => {
        console.log(res.data);
        this.scrambleSet = res.data.scrambelSet;
      })
      .catch(err => console.log(err))
  },
  methods: {
    updateTimeList(tlist){
      this.timeList = tlist;
    },
    submitTimes(avg){
      const body = {
        Times: this.timeList.times,
        Penalties: this.timeList.penalties,
        Result: avg
      }
      api.post(`Competitions/submitTimes/${this.$route.params.compid}/${this.$route.params.event}/${this.$route.params.round}`,body ,{
        headers: {
          Authorization: 'Bearer ' + store.getters.getToken
        }
      }).then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
h2{
  color: #fff;
}
h3{
  color: #e2f3f5;
}
</style>
