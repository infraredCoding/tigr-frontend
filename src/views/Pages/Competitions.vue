<template>
  <div class="input-group mb-3 mt-4 rounded-pill search-holder mr-auto">
    <span class="input-group-text" id="searchIcon"><i class="fas fa-search"></i></span>
    <Search />
  </div>
  <Table :title="'Ongoing Comps'" :columns="ongoingCols" :data="ongoingComps"/>
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
      ongoingComps: []
    }
  },
  mounted () {
    api.get('Competitions/getAllComps', {
      headers: {
        Authorization: 'Bearer ' + store.getters.getToken
      }
    }).then(res => this.processedData(res.data))
      .catch(err => console.log(err))
  },
  methods: {
    processedData(d){
      for (let i=0; i<d.length; i++){
        let final = {};
        final.c = d[i].name;
        final.start = new Date(d[i].startDate).toLocaleString();
        final.end = new Date(d[i].endDate).toLocaleString();

        this.ongoingComps.push(final);
      }
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
