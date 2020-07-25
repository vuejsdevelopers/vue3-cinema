<template>
  <div id="movie-filter">
    <h2>Filter results</h2>
    <div class="filter-group">
      <h3>Time of day</h3>
      <check-filter
        v-for="time in times"
        v-bind:key="time"
        v-bind:title="time"
        v-on:check-filter="checkFilter($event, time, 'times')"
      ></check-filter>
    </div>
    <div class="filter-group">
      <h3>Genre</h3>
      <check-filter
        v-for="genre in genres"
        v-bind:key="genre"
        v-bind:title="genre"
        v-on:check-filter="checkFilter($event, genre, 'genres')"
      ></check-filter>
    </div>
  </div>
</template>

<script>
import genres from "@/util/genres";
import CheckFilter from "@/components/CheckFilter";
import times from "@/util/times";

export default {
  data: () => ({
    genres,
    times
  }),
  emits: ["check-filter"],
  methods: {
    checkFilter(checked, title, group) {
      this.$emit("check-filter", checked, title, group);
    }
  },
  components: {
    CheckFilter
  }
};
</script>
