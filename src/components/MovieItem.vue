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
      <div class="movie-sessions">
        <div
          v-for="session in filteredSessions"
          class="session-time-wrapper"
          v-bind:key="session.id"
        >
          <div class="session-time">{{ formatSessionTime(session.time) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import times from "@/util/times";

export default {
  props: {
    movie: Object,
    day: Object,
    times: Array
  },
  computed: {
    filteredSessions() {
      return this.movie.sessions.filter(this.dayFilter).filter(this.timeFilter);
    }
  },
  methods: {
    dayFilter(session) {
      return dayjs(session.time).isSame(this.day, "day");
    },
    timeFilter(session) {
      if (!this.times.length || this.times.length === 2) {
        return true;
      } else {
        if (this.times[0] === times.BEFORE_6PM) {
          return dayjs(session.time).hour() < 18;
        } else {
          return dayjs(session.time).hour() >= 18;
        }
      }
    },
    formatSessionTime(raw) {
      return dayjs(raw).format("h:mm A");
    }
  }
};
</script>
