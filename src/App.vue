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
  <!-- <router-view v-slot="{ component }">
    <transition name="fade" mode="out-in">
      <component :is="component" />
    </transition>
  </router-view> -->
</template>

<style scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: all 0.7s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0px);
} */

/* links styling */

/* .router-link-active {
  text-decoration: none;
  color: black;
  transition: all 0.5s ease-in-out;
}

.router-link-active {
  text-decoration: underline;
  background-color: rgba(10, 40, 209, 0.2);
} */
</style>
