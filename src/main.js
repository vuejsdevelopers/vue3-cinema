import "@/assets/style.scss";
import { createApp } from "vue";
import MovieList from "@/components/MovieList";
import MovieFilter from "@/components/MovieFilter";
import axios from "axios";
import dayjs from "dayjs";

createApp({
  methods: {
    checkFilter(checked, title, group) {
      if (checked) {
        this[group].push(title);
      } else {
        this[group] = this[group].filter(item => item !== title);
      }
    }
  },
  data: () => ({
    genres: [],
    movies: [],
    day: dayjs(),
    times: []
  }),
  components: {
    MovieFilter,
    MovieList
  },
  async created() {
    const { data } = await axios.get("/api");
    this.movies = data;
  }
}).mount("#app");
