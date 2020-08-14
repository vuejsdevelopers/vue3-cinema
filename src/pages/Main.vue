<template>
  <div id="overview">
    <div class="main">
      <movie-list
        v-bind:genres="genres"
        v-bind:movies="movies"
        v-bind:times="times"
        v-bind:day="day"
      ></movie-list>
      <movie-filter v-on:check-filter="checkFilter"></movie-filter>
    </div>
  </div>
</template>
<script>
import MovieList from "@/components/MovieList";
import MovieFilter from "@/components/MovieFilter";
import axios from "axios";
import dayjs from "dayjs";

export default {
  methods: {
    checkFilter(checked, title, group) {
      if (checked) {
        this[group].push(title);
      } else {
        this[group] = this[group].filter(item => item !== title);
      }
    }
  },
  data: () => ({
    genres: [],
    movies: [],
    day: dayjs(),
    times: []
  }),
  components: {
    MovieFilter,
    MovieList
  },
  async created() {
    const { data } = await axios.get("/api");
    this.movies = data;
  }
};
</script>
