<template>
  <div id="overview">
    <div class="main">
      <movie-list
        v-bind:genres="genres"
        v-bind:movies="movies"
        v-bind:times="times"
        v-bind:day="day"
      ></movie-list>
      <movie-filter v-on:check-filter="checkFilter" />
    </div>
  </div>
</template>
<script>
import MovieList from "@/components/MovieList";
import MovieFilter from "@/components/MovieFilter";

export default {
  props: {
    genres: Array,
    movies: Array,
    day: Object,
    times: Array
  },
  emits: ["check-filter"],
  components: {
    MovieFilter,
    MovieList
  },
  methods: {
    checkFilter(checked, title, group) {
      this.$emit("check-filter", checked, title, group);
    }
  }
};
</script>
