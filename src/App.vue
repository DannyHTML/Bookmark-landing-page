<script setup>
import Header from "./Header.vue";
import FirstSection from "./FirstSection.vue";
import Features from "./Features.vue";
</script>

<template>
  <div class="pb-24 md:pb-28">
    <Header />
  </div>
  <div class="mb-28">
    <FirstSection />
  </div>
  <Features />
  <div
    class="flex flex-col md:flex-row md:max-w-3xl md:border-b-2 md:m-auto items-center justify-center gap-2 px-8 mt-10 mb-12 md:mb-12 md:mt-10"
  >
    <router-link
      to="/"
      class="router-link font-medium capitalize text-center text-lg md:border-t-0 md:border-0 border-t-2 w-full p-4 border-b-2"
      >simple bookmarking</router-link
    >
    <router-link
      to="/SpeedySearching"
      class="router-link font-medium capitalize text-center text-lg w-full p-4 md:border-0 border-b-2"
      >speedy searching</router-link
    >
    <router-link
      to="/EasySharing"
      class="router-link font-medium capitalize text-center text-lg w-full p-4 md:border-0 border-b-2"
      >easy sharing</router-link
    >
  </div>
  <router-view class="mb-40" v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.7s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

/* links styling */

/* .router-link-active {
  text-decoration: none;
  color: black;
  transition: all 0.5s ease-in-out;
}

.router-link-active {
  text-decoration: underline;
} */

/* .router-link::before {
  content: "";
  border-bottom: 2px solid red;
  width: 0%;
  transition: width 0.3s ease;
}

.router-link::after:hover {
  width: 100%;
} */

.router-link-active {
  color: hsl(231, 69%, 60%);
  transition: all 0.2s ease-in-out;
}

.router-link {
  position: relative;
}

.router-link::before {
  content: "";
  position: absolute;
  bottom: -1px;
  right: 0;
  width: 0;
  height: 3px;
  background-color: hsl(231, 69%, 60%);
  transition: width 0.3s ease-in-out;
}

.router-link:hover::before {
  width: 100%;
  left: 0;
}
</style>
