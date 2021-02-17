import { getField, updateField } from 'vuex-map-fields';

const state = {
  eventSch: []
}

const actions = {

}

const mutations = {
  updateField,

  addEventRow(state, eid){
    state.eventSch.push({
      id: eid,
      date: null,
      start: null,
      end: null
    })
  }
}

const getters = {
  getField,

  getSchedule(state){
    return state.eventSch;
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
