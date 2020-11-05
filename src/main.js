import "@/assets/style.scss";
import { createApp } from "vue";
import router from "@/router";
import axios from "axios";
import dayjs from "dayjs";

const app = createApp({
  methods: {
    checkFilter(checked, title, group) {
      if (checked) {
        this[group].push(title);
      } else {
        this[group] = this[group].filter(item => item !== title);
      }
    },
    daySelected(day) {
      this.day = day;
    }
  },
  data: () => ({
    genres: [],
    movies: [],
    day: dayjs(),
    times: []
  }),
  async created() {
    const { data } = await axios.get("/api");
    this.movies = data;
  }
});
app.use(router);
app.mount("#app");
