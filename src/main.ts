import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { Collapse } from "vue-collapsed";
import "./style.css";
import "./assets/custom-style.css";
import App from "./App.vue";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", 
    component: () => import("./components/SimpleBookmarking.vue") },
    { path: "/SpeedySearching", 
    component: () => import("./components/SpeedySearching.vue") },
    { path: "/EasySharing", 
    component: () => import("./components/EasySharing.vue") },
  ],
});

createApp(App).use(router).component("Collapse", Collapse).mount("#app");
