<template>
  <div id="detail" v-if="movie">
    <movie-item
      v-bind:movie="movie"
      v-bind:day="day"
      v-bind:times="times"
    ></movie-item>
  </div>
</template>
<script>
import MovieItem from "@/components/MovieItem.vue";
import axios from "axios";

export default {
  props: {
    day: Object,
    times: Array
  },
  data: () => ({
    movie: null
  }),
  components: {
    MovieItem
  },
  async beforeRouteEnter(to, from, next) {
    const { data } = await axios.get("/api");
    const movie = data.find(movie => movie.id === to.params.id);
    if (movie) {
      next(vm => {
        vm.movie = movie;
        return true;
      });
    } else {
      next({ name: "main" });
    }
  }
};
</script>
