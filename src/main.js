import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import SimpleBookmarking from "./components/SimpleBookmarking.vue";
import SpeedySearching from "./components/SpeedySearching.vue";
import EasySharing from "./components/EasySharing.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: SimpleBookmarking },
    { path: "/SpeedySearching", component: SpeedySearching },
    { path: "/EasySharing", component: EasySharing },
  ],
});

createApp(App).use(router).mount("#app");
