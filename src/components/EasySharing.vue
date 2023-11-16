<template>
  <div class="sm:flex 2xl:gap-60">
    <div
      class="relative justify-center max-w-2xl md:w-full z-0 px-8 sm:pl-16 md:pl-40 mb-20"
    >
      <div class="md:max-w-md">
        <img src="/images/illustration-features-tab-3.svg" alt="" />
        <div
          class="absolute top-10 left-0 -z-10 w-9/12 h-full lg:top-14 rounded-r-full bg-primaryColour"
        ></div>
      </div>
    </div>
    <div class="px-8 flex flex-col mt-10 text-center md:text-left">
      <h2 class="text-2xl font-bold mb-4 lg:text-3xl">Share your bookmarks</h2>
      <p class="max-w-md">
        Easily share your bookmarks and collections with others. Create a
        shareable link that you can send at the click of a button.
      </p>
      <div class="text-center mt-4 md:text-left">
        <ButtonCustom :style="'py-2 px-4 bg-primaryColour border-2 border-primaryColour text-white rounded-md hover:bg-white hover:border-2 hover:font-medium hover:border-primaryColour hover:text-primaryColour hover:text-lg duration-300'"
        >
          More info
        </ButtonCustom>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonCustom from "./ButtonRouter.vue"
</script>

<style scoped></style>
