import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = Vue.createApp({})
app.use(VueAxios, axios)

const url = 'http://localhost:5000/api/search'

export default class API {
    static async searchRestaurants(searchTerm) {
        const res = await axios.get(url + '/restaurant/' + searchTerm);
        return res.data;
    }

    static async searchProducts(searchTerm) {
        const res = await axios.get(url + '/product/' + searchTerm);
        return res.data;
    }

    static async getProductsByRestaurantName(searchTerm) {
        const res = await axios.get(url + '/restaurant/product/' + searchTerm);
        return res.data;
    }

    static async getAllRestaurants() {
        const res = await axios.get(url + '/get/restaurant');
        return res.data;
    }
}