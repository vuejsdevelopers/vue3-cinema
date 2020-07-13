<template>
  <div id="movie-list">
    <div v-for="movie in filteredMovies" v-bind:key="movie.title">
      {{ movie.title }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    movies: [
      {
        title: "Pulp Fiction",
        Genre: "Crime, Comedy"
      },
      {
        title: "Home Alone",
        Genre: "Comedy"
      },
      {
        title: "Austin Powers",
        Genre: "Comedy"
      }
    ]
  }),
  props: {
    genres: Array
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(movie => {
        if (!this.genres.length) {
          return true;
        } else {
          const movieGenres = movie.Genre.split(", ");
          return movieGenres.some(genre => this.genres.includes(genre));
        }
      });
    }
  }
};
</script>
