import "@/assets/style.scss";
import { createApp } from "vue";
import MovieList from "@/components/MovieList";
import MovieFilter from "@/components/MovieFilter";

createApp({
  methods: {
    checkFilter(checked, title) {
      if (checked) {
        this.genres.push(title);
      } else {
        this.genres = this.genres.filter(genre => genre !== title);
      }
    }
  },
  data: () => ({
    genres: []
  }),
  components: {
    MovieFilter,
    MovieList
  }
}).mount("#app");
