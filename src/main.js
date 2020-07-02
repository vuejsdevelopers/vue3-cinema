import "@/assets/style.scss";
import { createApp } from "vue";
import genres from "@/util/genres";

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
            <h2>Filter results</h2>
            <div class="filter-group">
                <check-filter
                    v-for="genre in genres"
                    v-bind:title="genre"
                ></check-filter>
            </div>
        </div>
      `,
      data: () => ({
        genres
      }),
      components: {
        "check-filter": {
          props: {
            title: String
          },
          template: `
            <div 
              v-on:click="checked = !checked"
              v-bind:class="{ 'check-filter': true, active: checked }"
            >
              <span class="checkbox"></span>
              <span class="check-filter-title">{{ title }}</span>
            </div>
          `,
          data: () => ({
            checked: false
          })
        }
      }
    }
  }
}).mount("#app");
