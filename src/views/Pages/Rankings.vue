<template lang="html">
  <h2>Results of {{$route.params.event}} Round {{$route.params.round}}</h2>

  <RankingTable :data="data"/>
</template>

<script>
import RankingTable from '../../components/Comps/EvRanking'
import { api } from '../../axios/axios-api.js'
import store from '../../store'

export default {
  name: 'Rankings',
  components: {
    RankingTable
  },
  data () {
    return{
      data: [],
    }
  },
  mounted () {
    api.get(`Competitions/getRankings/${this.$route.params.compid}/${this.$route.params.event}/${this.$route.params.round}`, {
      headers: {
        Authorization: 'Bearer ' + store.getters.getToken
      }
    })
      .then(res => {
        console.log(res)
        this.formatData(res.data);
      })
      .catch(err => console.log(err))
  },
  methods: {
    formatData(d){
      for(let i=0; i<d.length; i++){
        let dSet = {};
        dSet.name = d[i].competitor.fullName;
        dSet.event = d[i].event.eventName;
        dSet.solves = d[i].times;
        dSet.result = d[i].result;
        dSet.pen = d[i].penalties;

        this.data.push(dSet)
      }
    }
  }
}
</script>

<style scoped>
h2 {
  color: #fff;
}
</style>
