<template>
  <h2>Some Comp 2021</h2>
  <div class="row">
    <EventBox v-for="ev in events" :key="ev.eventId"
      :puzzle="ev.eventName.split('-')[0]"
      :round="ev.eventName.split('-')[1]"
      :start="ev.startTime" :end="ev.endTime"
      @compete="competeInEvent"
      @viewRankings="viewRankings"
      :eligible="eligibility[ev.eventId] === true || eligibility[ev.eventId] == null"/>
  </div>
</template>

<script>
import EventBox from '../../components/Comps/EventBox'
import { api } from '../../axios/axios-api.js'
import store from '../../store'

export default {
  name: 'CompOverview',
  components: {
    EventBox,
  },
  data () {
    return {
      events: [],
      eligibility: []
    }
  },
  mounted () {
    api.get(`Competitions/eventSchedules/${this.$route.params.id}`, {
      headers: {
        Authorization: 'Bearer ' + store.getters.getToken
      }
    })
      .then(res => {
        console.log(res)
        this.events = res.data.events
        this.eligibility = res.data.eligibility
      })
      .catch(err => console.log(err))
  },
  methods: {
    competeInEvent(p, r){
      this.$router.push({name: 'Compete', params: {compid: this.$route.params.id, event: p, round: r.split('')[1]}})
    },
    viewRankings(p, r){
      this.$router.push({name: 'rankings', params: {compid: this.$route.params.id, event: p, round: r.split('')[1]}})
    }
  }
}
</script>

<style scoped>
h2 {
  color: #fff;
}
</style>
