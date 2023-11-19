<template>
  <div
    class="bg-neutral2Colour md:flex md:justify-center md:items-center text-white text-sm"
  >
    <div
      class="flex justify-center md:w-full md:items-center pt-8 pb-8 md:mx-10"
    >
      <div class="mx-8 text-center md:flex md:justify-between md:w-full">
        <div class="mb-8 md:flex md:-mb-0">
          <a href="#" class="md:mr-10 flex justify-center"
            ><img
              class="mb-8 md:mb-0"
              src="/images/logo-bookmark-footer.svg"
              alt="Logo of company"
          /></a>
          <ul class="uppercase flex flex-col md:flex-row md:items-center gap-4">
            <li class="hover:text-secondaryColour duration-300"><a href="#">features</a></li>
            <li class="hover:text-secondaryColour duration-300"><a href="#">pricing</a></li>
            <li class="hover:text-secondaryColour duration-300"><a href="#">contact</a></li>
          </ul>
        </div>
        <div class="flex justify-center items-center gap-10">
          <div>
            <a href="https://www.facebook.com/" target="_blank"
              >
                <font-awesome-icon
                class="hover:text-secondaryColour duration-300" 
                :icon="['fab', 'square-facebook']" size="xl" />
            </a>
          </div>
          <div>
            <a href="https://www.twitter.com/" target="_blank"
              >          
              <font-awesome-icon 
              class="hover:text-secondaryColour duration-300"
              :icon="['fab', 'twitter']" size="xl" />
            </a>
          </div>

          <div>
            <a
              href="https://github.com/DannyHTML/Bookmark-landing-page"
              target="_blank"
            >
              <font-awesome-icon
                class="mb-[-1px] md:mt-[0px] hover:text-secondaryColour duration-300"
                :icon="['fab', 'github']"
                size="xl"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<style scoped></style>
