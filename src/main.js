import "@/assets/style.scss";
import { createApp } from "vue";

createApp({
  components: {
    "movie-list": {
      template: `
        <div id="movie-list">
            <div v-for="movie in movies">{{ movie.title }}</div>
        </div>
      `,
      data: () => ({
        movies: [
          { title: "Pulp Fiction" },
          { title: "Home Alone" },
          { title: "Austin Powers" }
        ]
      })
    },
    "movie-filter": {
      template: `
        <div id="movie-filter">
            Movie list
        </div>
      `
    }
  }
}).mount("#app");
