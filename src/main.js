import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import "./assets/custom-btn-style.css";
import App from "./App.vue";
import SimpleBookmarking from "./components/SimpleBookmarking.vue";
import SpeedySearching from "./components/SpeedySearching.vue";
import EasySharing from "./components/EasySharing.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: SimpleBookmarking },
    { path: "/SpeedySearching", component: SpeedySearching },
    { path: "/EasySharing", component: EasySharing },
  ],
});

createApp(App).use(router).mount("#app");