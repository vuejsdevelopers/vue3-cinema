import Vue from "vue";
import VueRouter from "vue-router";
import Overview from "../components/Overview.vue";
import Detail from "../components/Detail.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Overview, name: "home" },
  { path: "/movie/:id", component: Detail, name: "movie" },
  { path: "*", redirect: { name: "home" } }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
