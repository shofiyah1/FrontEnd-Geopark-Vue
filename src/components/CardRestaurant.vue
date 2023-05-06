<template>
<div class="row">
  <div class="col-md-6">
    <img
      src="../assets/images/resto.png"
      class="img-fluid"
      alt="Restaurant Geo Wisata"
    />
    <br/>
    <h2></h2>
    <br/>
    <h2></h2>
  </div>
  <div class="col-md-6">
    <h5>{{ restaurant.nama_restoran }}</h5>
    <h5>Aneka {{ restaurant.kategori_restoran }}</h5>
    <h5>{{ restaurant.jam_buka_restoran }} - {{ restaurant.jam_tutup_restoran }} </h5>
  </div>
</div>
</template>

<script>
export default {
  name: "CardRestaurant",
  props: ["restaurant"],
};
</script>

<style>
</style>