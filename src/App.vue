<template>
  <div id="app">
    <div id="title">
      <img src="/logo.png" />
      <h1>Vue.js Cinema</h1>
    </div>
    <keep-alive>
      <router-view
        v-bind:genre="genre"
        v-bind:time="time"
        v-bind:movies="movies"
        v-bind:day="day"
      ></router-view>
    </keep-alive>
  </div>
</template>
<script>
import Vue from "vue";
import { checkFilter, setDay } from "./util/bus";
const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", {
  get() {
    return bus;
  }
});

import moment from "moment-timezone";
moment.tz.setDefault("UTC");

export default {
  data: () => ({
    genre: [],
    time: [],
    movies: [],
    day: moment()
  }),
  created() {
    this.$http.get("/api").then(response => {
      this.movies = response.data;
    });
    this.$bus.$on("check-filter", checkFilter.bind(this));
    this.$bus.$on("set-day", setDay.bind(this));
  }
};
</script>

<style lang="scss"></style>
