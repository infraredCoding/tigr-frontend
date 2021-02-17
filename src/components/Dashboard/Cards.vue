<template>
  <div class="row pt-2 holder">
    <div class="col-md-4 col-sm-12 pt-3">
      <div class="card shadow-lg">
        <div class="card-body">
          <div class="row">
            <span class="icon-holder col"><i class="icon rounded-pill px-3 py-3 fas fa-trophy fa-2x"></i></span>
            <div class="col">
              <h6 class="card-title">Comps Attended</h6>
              <h4 class="card-text">5</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4 col-sm-12 pt-3">
      <div class="card shadow-lg">
        <div class="card-body">
          <div class="row">
            <span class="icon-holder col"><i class="icon1 rounded-pill px-3 py-3 fas fa-list-ul fa-2x"></i></span>
            <div class="col">
              <h6 class="card-title">Comps Hosted</h6>
              <h4 class="card-text">5</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4 col-sm-12 pt-3">
      <div class="card shadow-lg">
        <div class="card-body">
          <div class="row">
            <span class="icon-holder col"><i class="icon2 rounded-pill px-3 py-3 fas fa-calendar-day fa-2x"></i></span>
            <div class="col">
              <h6 class="card-title">Upcoming Comps</h6>
              <h4 class="card-text">5</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards'
}
</script>

<style scoped>
.icon{
  padding-top: 10px;
  background: linear-gradient(to right, #a7ff83, #17b978);
}

.icon1{
  padding-top: 10px;
  background: linear-gradient(to right, #9d50bb, #6e48aa);
}

.icon2{
  padding-top: 10px;
  background: linear-gradient(to right, #f2709c, #ff9272);
}
/* .holder{
  margin-left: 90px;
  width: calc(100% - 90px);
} */
.card{
  background-color: #102970;
  /* background: linear-gradient(to right, #0e153a,#3d5af1); */
  color: #e2f3f5;
  border: none;
  border-radius: 10px;
}
/*
@media screen and (max-width: 675px) {
  .holder{
    width: 100%;
    margin-left: 0;
  }
} */
</style>
