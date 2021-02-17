<template>
  <Cards />
  <div class="row">
    <Table class="col-6" :title="'Ongoing Comps'" :columns="ongoingCols" :data="ongoingComps"/>
  </div>

  <div class="row">
    <div class="col-md-6">
      <Table />
    </div>
    <div class="col-md-6">
      <Table />
    </div>
  </div>
</template>

<script>
// import NavG from '../components/Navigation/Nav-General'
import Cards from '../../components/Dashboard/Cards'
// import Sidenav from '../components/Navigation/Sidenav'
import Table from '../../components/General/Table'


export default {
  name: 'Dashboard',
  components: {
    Cards,
    Table
  },
  data () {
    return {
      ongoingCols: ['Competition', 'End Date', 'Actions'],
      ongoingComps: [
        {
        name: 'Some Cube Open',
        endDate: 'Today',
        },
        {
        name: 'Some Cube Open 2',
        endDate: 'Tomorrow',
        },
      ]
    }
  }
}
</script>

<style scoped>
</style>
