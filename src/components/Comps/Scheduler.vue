<template>
  <form class="mx-auto shadow-lg form-holder rounded-3 px-5 pt-3 pb-3" @submit.prevent="submitInfo">
    <div class="row justify-content-center">
      <div class="col-md-4 col-lg-4" v-for="(ev, i) in events" :key="i">
        <h5 class="text-center text-white pt-4">{{ev.eventName.split('-')[0]}} - {{ev.eventName.split('-')[1]}}</h5>
        <div class="form-group py-2">
          <label for="evStart">Start Time</label>
          <input type="datetime-local" class="form-control" required id="evStart" v-model="eventSch[i].StartTime">
        </div>
        <div class="form-group py-2">
          <label for="evEnd">End Time</label>
          <input type="datetime-local" class="form-control" id="evEnd" v-model="eventSch[i].EndTime" required>
        </div>
        <div class="form-group py-2">
          <label for="evEnd">Cutoff</label>
          <input type="number" class="form-control" id="evEnd" v-model="eventSch[i].Cutoff">
        </div>
        <div class="form-group py-2">
          <label for="evEnd">Top x Cubers Qualifies For Next Round</label>
          <input type="number" class="form-control" id="evEnd" v-model="eventSch[i].Qualifies" required>
        </div>
      </div>
      <!-- <EvSchedules v-for="ev in events"
        :key="ev.eventId" class="col-md-4 col-lg-4"
        :ev="ev.eventName.split('-')[0]"
        :round="ev.eventName.split('-')[1]" /> -->
    </div>
    <input type="submit" class="btn text-white rounded-3 px-4 mt-1 mb-3" value="Submit" />
  </form>
</template>

<script>
// import EvSchedules from './EventScheduleForm'
import { api } from '../../axios/axios-api.js'
// import { mapMutations } from 'vuex';
import { mapMultiRowFields } from 'vuex-map-fields';

export default {
  name: 'Schedules',
  components: {
    // EvSchedules
  },
  data () {
    return{
      events: [],
    }
  },
  computed: {
    ...mapMultiRowFields(['eventSch'])
  },
  methods: {
    submitInfo(){
      console.log(this.$store.getters.getSchedule);
      api.post(`Competitions/sumbitSchedules/${this.$route.params.id}`, this.$store.getters.getSchedule)
        .then(res =>
          {
            console.log(res)
            this.$router.push({ name: 'Competitions' })
          })
        .catch(err => console.log(err))
    }
  },
  mounted(){
    api.get(`Competitions/eventSchedules/${this.$route.params.id}`)
      .then(res =>
        {
          console.log(res)
          this.events = res.data
          for(let i=0; i<this.events.length; i++){ this.$store.commit('addEventRow', this.events[i].eventId) }
        }
      )
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>
input[type=submit]{
  background-color: #17b978;
}
.form-holder{
  background-color: #132761;

}
input:not([type=submit]):not([type=checkbox]){
  border: 1.5px solid #17b978;
  background-color: transparent;
  border-radius: 7px;
  color: #fff;
}
input[type=submit]{
  background-color: #17b978;
}
label{
  color: #fff;
}
::placeholder{
  color: #a9d1d6;
}
</style>
