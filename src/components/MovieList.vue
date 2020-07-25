<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length">
      <movie-item
        v-for="movie in filteredMovies"
        v-bind:key="movie.id"
        v-bind:movie="movie"
        v-bind:day="day"
        v-bind:times="times"
      />
    </div>
    <div v-else-if="movies.length" class="no-results">
      No results.
    </div>
    <div v-else class="no-results">
      Loading...
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import MovieItem from "@/components/MovieItem";
import times from "@/util/times";
export default {
  components: {
    MovieItem
  },
  props: {
    genres: Array,
    movies: Array,
    day: Object,
    times: Array
  },
  methods: {
    genreFilter(movie) {
      if (!this.genres.length) {
        return true;
      } else {
        const movieGenres = movie.movie.Genre.split(", ");
        return movieGenres.some(genre => this.genres.includes(genre));
      }
    },
    timeFilter(movie) {
      if (!this.times.length || this.times.length === 2) {
        return true;
      } else {
        return movie.sessions.some(session => {
          if (!dayjs(session.time).isSame(this.day, "day")) {
            return false;
          } else if (this.times[0] === times.BEFORE_6PM) {
            return dayjs(session.time).hour() < 18;
          } else {
            return dayjs(session.time).hour() >= 18;
          }
        });
      }
    }
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(this.genreFilter).filter(this.timeFilter);
    }
  }
};
</script>
