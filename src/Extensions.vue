<template>
  <div class="mx-8 text-center mb-10">
    <h2 class="capitalize text-xl font-medium mb-3">download the extension</h2>
    <p>
      We’ve got more browsers in the pipeline. Please do let us know if you’ve
      got a favourite you’d like us to prioritize.
    </p>
  </div>
  <div v-for="item in extensions" :key="item.id" class="flex justify-center">
    <div
      class="mx-8 text-center max-h-max mb-8 pb-6 max-w-xs rounded-lg border-2 border-primaryColour border-opacity-10 shadow-xl"
    >
      <div class="mb-6 mt-6 flex justify-center">
        <img :src="item.logo" :alt="item.alt" />
      </div>
      <h3 class="font-medium mb-1">{{ item.title }}</h3>
      <p class="mb-6">{{ item.description }}</p>
      <div class="mb-6">
        <img :src="item.dots" />
      </div>
      <div
        class="border-2 border-transparent rounded-md inline-block py-2 px-3 bg-primaryColour text-white"
      >
        <button>{{ item.btnText }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import data from "./assets/data.json";

const extensions = ref(data);
</script>

<style scoped></style>
