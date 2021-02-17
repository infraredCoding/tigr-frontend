<template>
  <h3 class="text-center text-white mb-3">Comp Info</h3>
  <form class="mx-auto shadow-lg form-holder rounded-3 px-5 pt-5" @submit.prevent="submitInfo">
    <div class="form-group pb-2 pt-2">
      <label for="compName">Competition Name</label>
      <input type="text" class="form-control" id="compName" placeholder="Something Open 2020" v-model="compName">
    </div>
    <div class="row">
      <div class="form-group py-2 col-md-6">
        <label for="compStart">Start Date</label>
        <input type="datetime-local" class="form-control" id="compStart" v-model="start">
      </div>
      <div class="form-group py-2 col-md-6">
        <label for="compEnd">End Date</label>
        <input type="datetime-local" class="form-control" id="compEnd" v-model="end">
      </div>
    </div>
    <div class="form-group pt-2 px-3">
      <div class="form-check form-group text-white pt-2">
        <p>I agree to the T&amp;C and Privacy Policy of TIGR
          <input class="form-check-input" type="checkbox" value="" id="flexCheck" required>
        </p>
      </div>
    </div>
    <input type="submit" class="btn text-white rounded-3 px-4 mt-1 mb-3" value="Next" />
  </form>
</template>

<script>
import { api } from '../../axios/axios-api.js'
import store from '../../store'

export default {
  name: 'CompForm',
  data () {
    return{
      compName: '',
      start: null,
      end: null
    }
  },
  methods: {
    submitInfo(){
      api.post('Competitions/AddComp', {
        Name: this.compName,
        StartDate: this.start,
        EndDate: this.end
      },
      {
        headers: {
          Authorization: 'Bearer ' + store.getters.getToken
        }
      })
        .then(res => {
          console.log(res)
          this.$router.push({ name: 'submitScrambles', params: { id: res.data.compId }})
        })
        .catch(err => console.log(err))
      console.log(`${this.compName} = ${this.start} - ${this.end}`)
    }
  }
}
</script>

<style scoped>
.form-holder{
  background-color: #132761;
  width: 70%;
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
