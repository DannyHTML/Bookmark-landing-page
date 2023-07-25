<script setup>
import Header from "./Header.vue";
import FirstSection from "./FirstSection.vue";
import Features from "./Features.vue";
import CustomLinks from "./components/CustomLinks.vue";
import Extensions from "./Extensions.vue";
import Faq from "./Faq.vue";
import Contact from "./Contact.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <div>
    <div class="pb-24 md:pb-28">
      <Header />
    </div>
    <div class="mb-28">
      <FirstSection />
    </div>
    <Features />
    <CustomLinks />
    <router-view class="mb-28" v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <div class="mb-20">
      <Extensions />
    </div>
    <div class="mb-28">
      <Faq />
    </div>
    <Contact />
    <Footer />
  </div>
</template>

<style scoped></style>
