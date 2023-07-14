<template>
  <div class="relative">
    <div
      class="fixed z-50 h-20 flex justify-between w-full px-8 md:justify-between md:px-20 items-center"
    >
      <div>
        <img
          :class="{ hidden: isHidden }"
          src="/images/logo-bookmark.svg"
          alt=""
        />
        <img
          :class="{ hidden: !isHidden }"
          src="/images/logo-bookmark-menu.svg"
          alt=""
        />
      </div>
      <div class="gap-10 hidden md:flex">
        <ul class="flex gap-6 items-center uppercase">
          <li><a href="#">features</a></li>
          <li><a href="#">pricing</a></li>
          <li><a href="#">contact</a></li>
          <button
            class="rounded-lg uppercase bg-secondaryColour flex justify-center items-center text-white w-24 h-10 py-2 hover:bg-white border-2 border-secondaryColour hover:text-secondaryColour"
            type="button"
          >
            Login
          </button>
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
      <div :class="{ hidden: !isHidden }">
        <img
          src="/images/icon-close.svg"
          alt=""
          @click="isHidden = !isHidden"
        />
      </div>
    </div>
    <!-- Mobile menu -->
    <transition name="fade">
      <div
        v-if="isHidden"
        class="flex absolute justify-center pt-24 w-screen h-screen bg-neutral2Colour bg-opacity-90"
        :class="{ hidden: !isHidden }"
      >
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
          <button
            class="rounded-lg uppercase flex justify-center items-center text-white py-2 border-2 w-4/5 max-w-sm border-white"
            type="button"
          >
            Login
          </button>
          <div class="flex items-end mb-10 h-full">
            <div class="flex gap-6 items-center">
              <img class="h-6" src="/images/icon-facebook.svg" alt="" />
              <img class="h-5" src="/images/icon-twitter.svg" alt="" />
            </div>
          </div>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isHidden = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
