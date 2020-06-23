import "@/assets/style.scss";
import { createApp } from "vue";

createApp({
  components: {
    "movie-list": {
      template: `
        <div id="movie-list">
            Movie list
        </div>
      `
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
