import { createRouter, createWebHistory } from "vue-router";
import Overview from "@/views/Overview.vue";
import Detail from "@/views/Detail.vue";

const routes = [
  { path: "/", component: Overview, name: "home" },
  { path: "/movie/:id", component: Detail, name: "movie" },
  { path: "/*", redirect: { name: "home" } }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
