<template>
  <div
    class="fixed z-20 h-20 flex justify-between w-full px-8 md:px-20 items-center"
  >
    <transition name="fade">
      <div
        v-if="scrollActive"
        class="absolute -z-10 w-full h-full left-0 top-0 bg-white shadow-2xl"
        :class="{ hidden: !scrollActive }"
      ></div>
      <!-- container mx-auto -->
    </transition>
    <div class="container flex justify-between mx-auto">
    <div>
      <!-- logo default -->
      <a href="#"
        ><img
          :class="{ hidden: isHidden }"
          src="/images/logo-bookmark.svg"
          alt=""
      /></a>
      <!-- logo mobile menu -->
      <a href="#"
        ><img
          class="relative z-20"
          :class="{ hidden: !isHidden }"
          src="/images/logo-bookmark-menu.svg"
          alt=""
      /></a>
    </div>
    <div class="gap-10 hidden md:flex">
      <ul class="flex gap-6 items-center uppercase">
        <li class="links"><a href="#">features</a></li>
        <li class="links"><a href="#">pricing</a></li>
        <li class="links"><a href="#">contact</a></li>
        <CustomButton :style="'rounded-lg uppercase bg-secondaryColour duration-200 flex justify-center items-center text-white w-24 h-10 py-2 cursor-pointer hover:bg-white border-2 border-secondaryColour hover:text-secondaryColour'">login</CustomButton>
       
      </ul>
    </div>
    <div class="md:hidden">
      <img
        :class="{ hidden: isHidden }"
        src="/images/icon-hamburger.svg"
        alt=""
        @click="isHidden = !isHidden"
      />
    </div>
    <div :class="{ hidden: !isHidden }" class="relative z-20">
      <img src="/images/icon-close.svg" alt="" @click="isHidden = !isHidden" />
    </div>
</div>


    <!-- Mobile menu -->

    <transition name="fade">
      <div
        v-if="isHidden"
        class="flex fixed z-10 inset-0 justify-center pt-24 w-screen bg-neutral2Colour bg-opacity-95 md:hidden"
        :class="{ hidden: !isHidden }"
      >
        <div class="overflow-y-auto h-full w-full flex">
          <ul
            class="flex uppercase text-lg text-white w-full flex-col items-center gap-4"
          >
            <li
              class="border-t-2 w-4/5 border-white border-opacity-30 text-center pt-4"
            >
              <a href="#">features</a>
            </li>
            <li
              class="border-t-2 w-4/5 border-white border-opacity-30 text-center pt-4"
            >
              <a href="#">pricing</a>
            </li>
            <li
              class="border-b-2 border-t-2 w-4/5 border-white border-opacity-30 text-center pt-4 pb-4"
            >
              <a href="#">contact</a>
            </li>
            <CustomButton :style="'rounded-lg uppercase flex justify-center items-center text-white py-2 border-2 w-4/5 max-w-sm border-white'"

            >
              Login
            </CustomButton>
            <div class="flex mb-10 h-full pb-4">
              <div class="flex gap-6 items-end">
                <a href="https://www.facebook.com/" target="_blank">
                  <img class="h-6" src="/images/icon-facebook.svg" alt="" />
                </a>
                <a href="https://www.twitter.com/" target="_blank">
                  <img class="h-5" src="/images/icon-twitter.svg" alt="" />
                </a>
                <a
                  href="https://github.com/DannyHTML/Bookmark-landing-page"
                  target="_blank"
                >
                  <font-awesome-icon
                    class="mb-[-2.5px]"
                    :icon="['fab', 'github']"
                    size="lg"
                  />
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </transition>
  </div>
  <!-- Mobile menu -->
</template>

<script setup lang="ts">
import CustomButton from "./components/CustomButton.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


const isHidden = ref<boolean>(false);

// Scroll effect header

const scrollActive = ref<boolean>(true);

const handleScroll = (): void => {
  if (!isHidden.value) {
    scrollActive.value = window.scrollY >= 60;
  }
};

onMounted((): void => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount((): void => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped></style>
