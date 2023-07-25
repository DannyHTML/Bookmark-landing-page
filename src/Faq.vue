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
        <div
          v-motion-pop-visible-once
          v-for="(question, index) in questions"
          :key="question.id"
        >
          <div
            @click="toggleQuestion(index)"
            :class="eachDivStyle(index)"
            class="cursor-pointer border-t-2 pt-4 pb-4 pr-4 flex justify-between text-lg"
          >
            {{ question.question }}
            <img
              :src="question.arrow"
              :class="{ 'rotate-180': isQuestionOpen(index) }"
              class="object-contain duration-300"
            />
          </div>
          <Collapse :when="isQuestionOpen(index)" class="duration-300">
            <p :class="eachAnswer(index)">
              {{ question.answer }}
            </p>
          </Collapse>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <button class="custom-btn">More Info</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Faq from "./assets/Faq.json";

const questions = ref(Faq);

const isOpen = ref(false);

const eachDivStyle = (index) => {
  if (index === 3) {
    return "border-b-2";
  }
};

const eachAnswer = (index) => {
  if (index === 0 || index === 1 || index === 2) {
    return "mb-4";
  }
  if (index === 3) {
    return "mt-4";
  }
};

const toggleQuestion = (index) => {
  if (isOpen.value === index) {
    isOpen.value = null;
  } else {
    isOpen.value = index;
  }
};

const isQuestionOpen = (index) => {
  return isOpen.value === index;
};
</script>

<style scoped></style>
