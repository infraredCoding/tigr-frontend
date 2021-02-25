<template>
  <h2>Some Comp 2021</h2>
  <div class="row">
    <EventBox v-for="(ev, i) in events" :key="i"
      :puzzle="ev.eventName.split('-')[0]"
      :round="ev.eventName.split('-')[1]"
      :start="ev.startTime" :end="ev.endTime"
      @compete="competeInEvent"/>
  </div>
</template>

<script>
import EventBox from '../../components/Comps/EventBox'
import { api } from '../../axios/axios-api.js'

export default {
  name: 'CompOverview',
  components: {
    EventBox,
  },
  data () {
    return {
      events: [],
    }
  },
  mounted () {
    api.get(`Competitions/eventSchedules/${this.$route.params.id}`)
      .then(res => this.events = res.data)
      .catch(err => console.log(err))
  },
  methods: {
    competeInEvent(p, r){
      this.$router.push({name: 'Compete', params: {compid: this.$route.params.id, event: p, round: r.split('')[1]}})
    }
  }
}
</script>

<style scoped>
h2 {
  color: #fff;
}
</style>
