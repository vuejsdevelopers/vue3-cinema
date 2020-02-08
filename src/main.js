import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.scss";

import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;
import VueResource from "vue-resource";
Vue.use(VueResource);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Tooltip from "./util/tooltip";
Vue.use(Tooltip);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
