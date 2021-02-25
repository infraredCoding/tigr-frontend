<template>
  <div class="input-group mb-3 mt-4 rounded-pill search-holder mr-auto">
    <span class="input-group-text" id="searchIcon"><i class="fas fa-search"></i></span>
    <Search />
  </div>
  <Table @joinComp="joinComp" :status="joinedStatus" :title="'Ongoing Comps'" :columns="ongoingCols" :data="ongoingComps"/>
  <Table :title="'Upcoming Comps'" :columns="upcomingCols" :data="upcomingComps"/>
</template>

<script>
import Search from '../../components/General/SearchBar'
import Table from '../../components/General/Table'
import { api } from '../../axios/axios-api.js'
import store from '../../store'

export default {
  name: 'Competitions',
  components: {
    Table,
    Search,
  },
  data () {
    return {
      ongoingCols: ['Competition', 'Start', 'End', ''],
      ongoingComps: [],
      upcomingCols: ['Comp', 'Start', 'End', ''],
      upcomingComps: [],
      compIds: [],
      registered: {},
    }
  },
  mounted () {
    api.get('Competitions/getAllComps', {
      headers: {
        Authorization: 'Bearer ' + store.getters.getToken
      }
    }).then(res => {
      console.log(res);
      this.registered = res.data.registered;
      this.processedData(res.data.compList);
    })
      .catch(err => console.log(err))
  },
  methods: {
    processedData(d){
      let today = new Date();
      for (let i=0; i<d.length; i++){
        this.compIds.push(d[i].compId);

        let final = {};
        final.c = d[i].name;
        final.start = new Date(d[i].startDate).toLocaleString();
        final.end = new Date(d[i].endDate).toLocaleString();
        final.registered = this.registered[d[i].compId];

        if (new Date(d[i].startDate) > today){
          this.upcomingComps.push(final);
        }else if(new Date(d[i].startDate).getDate() === today.getDate()){
          this.ongoingComps.push(final);
        }
      }
    },
    joinComp(i){
      let index = this.compIds[i];
      api.get(`Competitions/registerForComp/${index}`, {
        headers: {
          Authorization: 'Bearer ' + store.getters.getToken
        }
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.search-holder{
  background-color: #e2f3f5;
  width: 30%;
}

@media screen and (max-width: 920px) {
  .search-holder{
    width: 50%;
  }
}
@media screen and (max-width: 555px) {
  .search-holder{
    width: 70%;
  }
}
@media screen and (max-width: 400px) {
  .search-holder{
    width: 100%;
  }
}
#searchIcon{
  background-color: transparent;
  border: 0;
}
</style>
