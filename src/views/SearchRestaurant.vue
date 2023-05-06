<template>
  <div class="row g-0">
    <div class="container">
      <Carousel />
    </div>

    <!-- Search Restaurant -->
    <div class="row">
      <div class="col-3 ms-3">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              fill="#59CFD7"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </span> 
          <form @submit.prevent="searchRestaurant">
            <input
              type="text"
              class="form-control"
              placeholder="Search Restaurant"
              aria-label="Username"
              aria-describedby="basic-addon1"
              v-model="search"
            />
          </form>
        </div>
        <p class="text-start mb-1" style="text-decoration: none">
          <strong>Based On Type Of Restaurant</strong>
        </p>
        <div class="jarak">
          <a
            href="#"
            class="text-dark mt-2"
            style="text-decoration: none; background-color: #FFFFFFF"
            >Vegetables &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span
              class="badge"
              >2</span
            ></a
          >
          <br />
          <a
            href="#"
            class="text-dark mt-2"
            style="text-decoration: none; background-color: #FFFFFFF"
            >Vegetables &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span
              class="badge"
              >2</span
            ></a
          >
          <br />
          <a
            href="#"
            class="text-dark mt-2"
            style="text-decoration: none; background-color: #FFFFFFF"
            >Vegetables &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span
              class="badge"
              >2</span
            ></a
          >
          <br />
          <a
            href="#"
            class="text-dark mt-2"
            style="text-decoration: none; background-color: #FFFFFFF"
            >Vegetables &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span
              class="badge"
              >2</span
            ></a
          >
        </div>
        <br />
        <p class="text-start mb-1" style="text-decoration: none">
          <strong>Rating</strong>
        </p>
        <div class="jarak">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <p class="star col-5">
              <span>&starf;</span>
              <span>&starf;</span>
              <span>&starf;</span>
              <span>&starf;</span>
              <span>&starf;</span>
            </p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <p class="star col-5">
              <span>&starf;</span>
              <span>&starf;</span>
              <span>&starf;</span>
              <span>&starf;</span>
              <span>&star;</span>
            </p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <p class="star col-5">
              <span>&starf;</span>
              <span>&starf;</span>
              <span>&starf;</span>
              <span>&star;</span>
              <span>&star;</span>
            </p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <p class="star col-5">
              <span>&starf;</span>
              <span>&starf;</span>
              <span>&star;</span>
              <span>&star;</span>
              <span>&star;</span>
            </p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <p class="star col-5">
              <span>&starf;</span>
              <span>&star;</span>
              <span>&star;</span>
              <span>&star;</span>
              <span>&star;</span>
            </p>
          </div>
        </div>
        <p class="text-start mb-1" style="text-decoration: none">
          <strong>Quick Filter</strong>
        </p>
        <div class="jarak">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <p class="text-start mb-1" style="text-decoration: none">
              Open Now
            </p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <p class="text-start mb-1" style="text-decoration: none">Populer</p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <p class="text-start mb-1" style="text-decoration: none">
              Clean Dinning
            </p>
          </div>
        </div>
      </div>
      <div class="col-3 ms-3">
        <label for="default" class="btn btn-default"><input type="checkbox" id="flexCheckDefault" class="form-check-input"><span class="badge"></span>Price: Low-High </label>
        <div class="card mt-3 mb-4" style="width: 300%">
          <div class="card-body">
            <div
              class="isi"
              v-for="restaurant in restaurants.data"
              :key="restaurant._id"
            >
              <CardRestaurant :restaurant="restaurant" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import CardRestaurant from "@/components/CardRestaurant.vue";
import axios from "axios";
const search_url = "http://localhost:5001/api/search";
//const filter_url = "http://localhost:5001/api/filter";

export default {
  components: {
    Carousel,
    CardRestaurant,
  },
  data() {
    return {
      restaurants: [],
      search: "",
    };
  },

  methods: {
    // send search params to routes
    searchRestaurant() {
      this.$router.push({
        path: "/",
        query: {
          nama: this.search,
        },
      });

      // get searched data
      this.getSearchedRestaurants();
    },

    // get all restaurants
    async getSearchedRestaurants() {
      try {
        const nama = ("?nama=" + this.search);
        const response = await axios.get(search_url + "/restaurant/" + nama);
        console.log(response.data);
        this.restaurants = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
        
};
</script>

<style>
/* kalau mau ubah jarak kiri dan atas disini */
#card {
  margin-left: -50rem;
  margin-top: 1rem;
}

.badgebox
{
    opacity: 0;
}

.badgebox + .badge
{
    /* Move the check mark away when unchecked */
    text-indent: -999999px;
    /* Makes the badge's width stay the same checked and unchecked */
	width: 27px;
}

.badgebox:focus + .badge
{
    /* Set something to make the badge looks focused */
    /* This really depends on the application, in my case it was: */
    
    /* Adding a light border */
    box-shadow: inset 0px 0px 5px;
    /* Taking the difference out of the padding */
}

.badgebox:checked + .badge
{
    /* Move the check mark back when checked */
	text-indent: 0;
}
</style>
