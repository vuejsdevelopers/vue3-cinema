<template>
  <div id="movie-filter">
    <h2>Filter results</h2>
    <div class="filter-group">
      <check-filter
        v-for="genre in genres"
        v-bind:key="genre"
        v-bind:title="genre"
        v-on:check-filter="checkFilter"
      ></check-filter>
    </div>
  </div>
</template>

<script>
import genres from "@/util/genres";
import CheckFilter from "@/components/CheckFilter";

export default {
  data: () => ({
    genres
  }),
  emits: ["check-filter"],
  methods: {
    checkFilter(checked, title) {
      this.$emit("check-filter", checked, title);
    }
  },
  components: {
    CheckFilter
  }
};
</script>
