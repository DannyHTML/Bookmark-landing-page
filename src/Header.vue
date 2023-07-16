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
    </transition>
    <div>
      <!-- logo default -->
      <a href="/"
        ><img
          :class="{ hidden: isHidden }"
          src="/images/logo-bookmark.svg"
          alt=""
      /></a>
      <!-- logo mobile menu -->
      <a href="/"
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
        <button
          class="rounded-lg uppercase bg-secondaryColour duration-200 flex justify-center items-center text-white w-24 h-10 py-2 hover:bg-white border-2 border-secondaryColour hover:text-secondaryColour"
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
    <div :class="{ hidden: !isHidden }" class="relative z-20">
      <img src="/images/icon-close.svg" alt="" @click="isHidden = !isHidden" />
    </div>

    <!-- Mobile menu -->

    <transition name="fade">
      <div
        v-if="isHidden"
        class="flex absolute z-10 top-0 left-0 justify-center pt-24 w-screen h-screen bg-neutral2Colour bg-opacity-95 viewport-height"
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
              <a href="https://www.facebook.com/" target="_blank"
                ><img class="h-6" src="/images/icon-facebook.svg" alt=""
              /></a>
              <a href="https://www.twitter.com/" target="_blank"
                ><img class="h-5" src="/images/icon-twitter.svg" alt=""
              /></a>
              <a
                href="https://github.com/DannyHTML/Bookmark-landing-page"
                target="_blank"
                ><font-awesome-icon icon="fa-brands fa-github" size="lg"
              /></a>
            </div>
          </div>
        </ul>
      </div>
    </transition>
  </div>
  <!-- Mobile menu -->
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

const isHidden = ref(false);

// Header on scroll behavior

const scrollActive = ref(true);

const handleScroll = () => {
  if (!isHidden.value) {
    const scrollPosition = window.scrollY;
    scrollActive.value = scrollPosition >= 60;
  }
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Define a reactive reference for the viewport height
const vh = ref(window.innerHeight * 0.01);

// Function to update the viewport height reference
const setViewportHeight = () => {
  vh.value = window.innerHeight * 0.01;
};

// Call the function initially
setViewportHeight();

// Call the function whenever the window is resized
onMounted(() => {
  window.addEventListener("resize", setViewportHeight);
});
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

/*  slide */

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

/* Links  */

.links {
  position: relative;
}

.links::before {
  content: "";
  position: absolute;
  bottom: -4px;
  right: 0;
  width: 0;
  height: 2.5px;
  background-color: hsl(0, 94%, 66%);
  transition: width 0.3s ease-in-out;
}

.links:hover::before {
  width: 100%;
  left: 0;
}

.viewport-height {
  height: calc(var(--vh, 1vh) * 100);
}
</style>
