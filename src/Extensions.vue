<template>
  <div class="mx-8 text-center mb-10 md:mb-14">
    <h2 class="capitalize text-xl font-medium mb-3 md:text-2xl">
      download the extension
    </h2>
    <p class="max-w-md m-auto">
      We’ve got more browsers in the pipeline. Please do let us know if you’ve
      got a favourite you’d like us to prioritize.
    </p>
  </div>
  <div class="sm:flex flex-wrap sm:justify-center">
    <div
      v-for="(item, index) in extensions"
      :key="item.id"
      :class="{ 'mt-10': index === 1, 'mt-20': index === 2 }"
      class="flex justify-center"
    >
      <div
        class="mx-8 text-center max-h-max mb-8 h-fit pb-6 max-w-xs rounded-lg border-2 border-primaryColour border-opacity-10 shadow-xl"
      >
        <div class="mb-6 mt-6 flex justify-center">
          <img :src="item.logo" :alt="item.altImg" />
        </div>
        <h3 class="font-medium mb-1">{{ item.title }}</h3>
        <p class="mb-6">{{ item.description }}</p>
        <div class="mb-6">
          <img :src="item.dots" />
        </div>
        <div>
          <CustomButton :style="'inline-block py-2 px-3 bg-primaryColour border-2 border-primaryColour text-white rounded-md hover:bg-white hover:border-2 hover:font-medium hover:border-primaryColour hover:text-primaryColour duration-100'">
            {{ item.btnText }}
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from "./components/CustomButton.vue";
import { ref } from "vue";
import data from "./assets/data.json";

interface Extension {
  id: number;
  logo: string;
  altImg: string;
  dots: string;
  title: string;
  description: string;
  btnText: string;
}

const extensions = ref<Extension[]>(data);
</script>

<style scoped></style>
