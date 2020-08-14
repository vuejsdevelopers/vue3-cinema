import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main";
import Movie from "@/views/Movie";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "main",
      path: "/",
      component: Main
    },
    {
      name: "movie",
      path: "/movie/{:id}",
      component: Movie
    }
  ]
});
