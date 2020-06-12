<template>
  <div id="movie-filter">
    <h2>Filter results</h2>
    <h3>By time of day</h3>
    <div class="filter-group">
      <check-filter
        v-for="time in times"
        category="time"
        v-bind:title="time"
        :key="time"
        @check-filter="checkFilter('time', time, $event)"
      ></check-filter>
    </div>
    <h3>By genre</h3>
    <div class="filter-group">
      <check-filter
        v-for="genre in genres"
        category="genre"
        v-bind:title="genre"
        :key="genre"
        @check-filter="checkFilter('genre', genre, $event)"
      ></check-filter>
    </div>
  </div>
</template>
<script>
import genres from "@/util/genres";
import times from "@/util/times";
import CheckFilter from "@/components/CheckFilter.vue";

export default {
  data() {
    return {
      genres,
      times
    };
  },
  methods: {
    checkFilter(category, title, checked) {
      this.$emit("check-filter", { category, title, checked });
    }
  },
  components: {
    CheckFilter
  }
};
</script>
