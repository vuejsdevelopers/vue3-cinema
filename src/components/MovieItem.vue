<template>
  <div class="movie">
    <div class="movie-col-left">
      <router-link
        v-bind:to="{ name: 'movie', params: { id: movie.movie.imdbID } }"
      >
        <img v-bind:src="movie.movie.Poster" />
      </router-link>
    </div>
    <div class="movie-col-right">
      <div class="movie-title">
        <router-link
          v-bind:to="{ name: 'movie', params: { id: movie.movie.imdbID } }"
        >
          <h2>{{ movie.movie.Title }}</h2>
        </router-link>
        <span class="movie-rating">{{ movie.movie.Rated }}</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    movie: Object
  }
};
</script>
