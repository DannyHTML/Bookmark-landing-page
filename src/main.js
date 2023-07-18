import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { Collapse } from "vue-collapsed";
import "./style.css";
import "./assets/custom-btn-style.css";
import App from "./App.vue";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import SimpleBookmarking from "./components/SimpleBookmarking.vue";
import SpeedySearching from "./components/SpeedySearching.vue";
import EasySharing from "./components/EasySharing.vue";

library.add(faGithub);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: SimpleBookmarking },
    { path: "/SpeedySearching", component: SpeedySearching },
    { path: "/EasySharing", component: EasySharing },
  ],
});

createApp(App).use(router).component("Collapse", Collapse).mount("#app");
