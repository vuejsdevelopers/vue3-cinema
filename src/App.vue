<template>
  <div id="app">
    <div id="title">
      <img src="./assets/logo.png" />
      <h1>Vue.js Cinema</h1>
    </div>
    <keep-alive>
      <router-view
        v-bind:movies="movies"
        v-bind:day="day"
        @set-day="setDay"
      ></router-view>
    </keep-alive>
  </div>
</template>
<script>
import moment from "moment-timezone";
import axios from "axios";
moment.tz.setDefault("UTC");

export default {
  data: () => ({
    movies: [],
    day: moment()
  }),
  async created() {
    const response = await axios.get("/api");
    this.movies = response.data;
  },
  methods: {
    setDay(day) {
      this.day = day;
    }
  }
};
</script>
