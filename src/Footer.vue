<template>
  <div class="bg-neutral2Colour text-white">
    <div class="flex justify-center pt-8 pb-8">
      <div class="mx-8 text-center">
        <div class="mb-8">
          <a href="#"
            ><img
              class="mb-8"
              src="/images/logo-bookmark-footer.svg"
              alt="Logo of company"
          /></a>
          <ul class="uppercase flex flex-col gap-4">
            <li><a href="#">features</a></li>
            <li><a href="#">pricing</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </div>
        <div class="flex justify-center items-center gap-10">
          <div>
            <a href="https://www.facebook.com/" target="_blank"
              ><img src="/images/icon-facebook.svg" alt=""
            /></a>
          </div>
          <div>
            <a href="https://www.twitter.com/" target="_blank"
              ><img src="/images/icon-twitter.svg" alt=""
            /></a>
          </div>
          <div>
            <a
              href="https://github.com/DannyHTML/Bookmark-landing-page"
              target="_blank"
            >
              <font-awesome-icon
                class="mb-[-2.5px]"
                :icon="['fab', 'github']"
                size="xl"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<style scoped></style>
