<script setup>
import Header from "./Header.vue";
import FirstSection from "./FirstSection.vue";
import Features from "./Features.vue";
import CustomLinks from "./components/CustomLinks.vue";
</script>

<!-- accordeon -->

<template>
  <div class="pb-24 md:pb-28">
    <Header />
  </div>
  <div class="mb-28">
    <FirstSection />
  </div>
  <Features />
  <CustomLinks />
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
</style>
