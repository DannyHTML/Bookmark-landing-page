<template>
  <div class="bg-primaryColour text-white text-center h-80">
    <div class="w-full flex justify-center">
      <div class="max-w-xs md:max-w-xl mx-8 pt-14 md:mx-0">
        <h2 class="uppercase mb-2">35,000+ already joined</h2>
        <div class="w-full">
          <h3 class="m-auto font-medium md:w-3/4 text-xl md:text-2xl mb-5">
            Stay up-to-date with what we’re doing
          </h3>
        </div>
        <div>
          <form action="" class="md:flex md:justify-between md:gap-3">
            <div class="relative w-full mb-3">
              <div class="flex">
                <input
                  v-model.trim="email"
                  @input="clearError"
                  class="relative z-10 w-full mb-3 md:mb-0 h-10 pl-5 rounded-md outline-none text-black"
                  type="email"
                  name="email"
                  placeholder="Enter your email adress..."
                />
                <!-- hidden by default, show when error message email -->
                <transition name="fade-contact">
                  <img
                    class="absolute z-10 translate-y-1/2 right-4"
                    v-if="isError"
                    src="/images/icon-error.svg"
                    alt=""
                  />
                </transition>
              </div>
              <!-- hidden by default, show when error message email -->
              <transition name="fade-contact">
                <div
                  class="absolute -top-1 -left-1 -right-1 -bottom-2 md:-bottom-5 border-2 rounded-md border-transparent bg-secondaryColour text-black"
                  v-if="isError"
                >
                  <div class="absolute z-10 bottom-0 pl-2 text-white text-xs">
                    <i>Whoops, make sure it's an email </i>
                  </div>
                </div>
              </transition>
            </div>
            <input
              type="button"
              class="custom-btn-contact"
              value="Contact us"
              name="submit"
              @click="validateEmail"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const isError = ref(false);

const clearError = () => (isError.value = false);

const validateEmail = () => {
  const emailPattern = /^[ -~]+@[ -~]+\.[ -~]+$/;

  if (!emailPattern.test(email.value)) {
    isError.value = true;
  } else {
    alert(`Valid email: ${email.value}`);
  }
};
</script>

<style scoped></style>
