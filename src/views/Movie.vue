<template>
  <div id="detail" v-if="movie">
    <movie-item v-bind:movie="movie">
      <div class="movie-details">
        <p class="movie-genre">{{ movie.movie.Genre }}</p>
        <p class="movie-plot">{{ movie.movie.Plot }}</p>
        <table>
          <tr>
            <td>Released date:</td>
            <td>{{ movie.movie.Released }}</td>
          </tr>
          <tr>
            <td>Running time:</td>
            <td>{{ movie.movie.Runtime }}</td>
          </tr>
          <tr>
            <td>Director:</td>
            <td>{{ movie.movie.Director }}</td>
          </tr>
          <tr>
            <td>Cast:</td>
            <td>{{ movie.movie.Actors }}</td>
          </tr>
        </table>
      </div>
    </movie-item>
    <div class="home">
      <router-link v-bind:to="{ name: 'home' }">Back to results</router-link>
    </div>
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
      next({ name: "home" });
    }
  }
};
</script>
