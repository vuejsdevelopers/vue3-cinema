<template>
  <div id="overview">
    <day-select v-bind:selected="day" @set-day="setDay"></day-select>
    <div class="main">
      <movie-list
        v-bind:genre="genre"
        v-bind:time="time"
        v-bind:movies="movies"
        v-bind:day="day"
      ></movie-list>
      <movie-filter @check-filter="checkFilter" />
    </div>
  </div>
</template>
<script>
import MovieList from "@/components/MovieList.vue";
import MovieFilter from "@/components/MovieFilter.vue";
import DaySelect from "@/components/DaySelect.vue";

export default {
  props: ["movies", "day"],
  emits: ["set-day"],
  data: () => ({
    time: [],
    genre: []
  }),
  methods: {
    setDay(day) {
      this.$emit("set-day", day);
    },
    checkFilter({ category, title, checked }) {
      if (checked) {
        this[category].push(title);
      } else {
        const index = this[category].indexOf(title);
        if (index > -1) {
          this[category].splice(index, 1);
        }
      }
    }
  },
  components: {
    MovieList,
    MovieFilter,
    DaySelect
  }
};
</script>
