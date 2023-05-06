<template>
  <div class="app">
  <!-- Navbar -->
  <NavbarVue />
  <!-- Fitur Pencarian Restaurant -->
  <SearchRestaurant />
  <!-- Footer   -->
  <FooterVue />
  </div>
</template>

<script>
import NavbarVue from "@/components/NavbarVue.vue";
import SearchRestaurant from "./views/SearchRestaurant.vue";
import FooterVue from "@/components/FooterVue.vue"
export default {
  data() {
    return {
    };
  },
  components: {
    NavbarVue: NavbarVue,
    FooterVue: FooterVue,
    SearchRestaurant: SearchRestaurant
  }
};
</script>
