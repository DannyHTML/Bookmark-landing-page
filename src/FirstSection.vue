<template>
  <div
    class="flex flex-col items-center md:justify-between w-full sm:flex sm:flex-row"
  >
    <div
      class="relative sm:order-1 justify-center max-w-2xl md:w-full z-0 px-8 mb-20"
    >
      <div class="max-w-xl md:max-w-2xl">
        <img src="/images/illustration-hero.svg" alt="" />
        <div
          class="absolute top-10 right-0 -z-10 w-9/12 h-full lg:top-14 lg:h-5/6 rounded-l-full bg-primaryColour"
        ></div>
      </div>
    </div>
    <div class="px-8 md:ml-10 max-w-2xl">
      <h1
        class="capitalize text-2xl md:text-3xl lg:text-5xl sm:text-left font-medium text-center md:mb-8 lg:mb-12 mb-4"
      >
        a simple bookmark manager
      </h1>
      <p class="text-center sm:text-left md:text-lg sm:mb-6 mb-2">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <div class="flex h-10 justify-center sm:justify-start gap-4">
        <div>
          <CustomButton :style="'p-2 bg-primaryColour custom-shadow text-white text-sm rounded-md'"
          >
            Get it on Chrome
          </CustomButton>
        </div>
        <div>
          <CustomButton :style="'p-2 bg-neutral1Colour custom-shadow bg-opacity-20 text-neutral2Colour text-sm rounded-md'">
            Get it on Firefox
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from './components/CustomButton.vue';
</script>

<style scoped></style>
