<template>
  <div class="flex justify-center">
    <div class="mb-10 max-w-xl">
      <div class="mx-8 text-center mb-8">
        <h2 class="capitalize text-2xl font-medium mb-4">
          frequently asked questions
        </h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div class="mx-8">
        <div v-for="(question, index) in questions" :key="question.id">
          <div
            @click="handleMultiple(index)"
            :class="{ 'border-b-2': index === 3}"
            class="cursor-pointer border-t-2 pt-4 pb-4 pr-4 flex justify-between text-lg"
          >
            {{ question.question }}
            <img
              :src="question.arrow"
              :class="{ 'rotate-180': question.isExpanded}"
              class="object-contain duration-300"
            />
          </div>
          <Collapse :when="question.isExpanded" class="duration-300">
            <p :class="{ 'mb-4': index === 0 || index === 1 || index === 2, 'mt-4': index === 3}" >
              {{ question.answer }}
            </p>
          </Collapse>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <CustomButton :style="'py-2 px-4 bg-primaryColour text-white rounded-md border-2 border-primaryColour hover:bg-white hover:border-2 hover:font-medium hover:border-primaryColour hover:text-primaryColour hover:text-lg duration-300'">More Info</CustomButton>
  </div>
</template>

<script setup lang="ts">
import CustomButton from "./components/CustomButton.vue";
import { ref } from "vue";
import Faq from "./assets/Faq.json";

interface Questions {
  id: number;
  question: string;
  answer: string; 
  arrow: string;
  isExpanded: boolean;
}

const questions = ref<Questions[]>(Faq);

const handleMultiple = (index: number) => {
  questions.value.forEach((question, i) => {
    question.isExpanded = i === index ? !question.isExpanded : false;
  })
}

</script>

<style scoped></style>
