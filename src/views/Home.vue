<template>
  <div id="overview">
    <day-select v-bind:day="day" v-on:day-selected="daySelected" />
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
import DaySelect from "@/components/DaySelect"

export default {
  props: {
    genres: Array,
    movies: Array,
    day: Object,
    times: Array
  },
  emits: ["check-filter", "day-selected"],
  components: {
    MovieFilter,
    MovieList,
    DaySelect
  },
  methods: {
    checkFilter(checked, title, group) {
      this.$emit("check-filter", checked, title, group);
    },
    daySelected(day) {
      this.$emit("day-selected", day);
    }
  }
};
</script>
