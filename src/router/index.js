import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Movie from "@/views/Movie";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: Home
    },
    {
      name: "movie",
      path: "/movie/:id",
      component: Movie
    },
    {
      path: "/:catchAll(.*)",
      redirect: { name: "home" }
    }
  ]
});
