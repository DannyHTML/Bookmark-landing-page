<template>
  <div
    class="flex flex-col md:flex-row md:max-w-3xl md:border-b-2 md:m-auto items-center justify-center gap-2 px-8 mt-10 mb-12 md:mb-12 md:mt-10"
  >
    <router-link
      to="/"
      class="router-link font-medium capitalize text-center text-lg md:border-t-0 md:border-0 border-t-2 w-full p-4 border-b-2"
      >simple bookmarking</router-link
    >
    <router-link
      to="/SpeedySearching"
      class="router-link font-medium capitalize text-center text-lg w-full p-4 md:border-0 border-b-2"
      >speedy searching</router-link
    >
    <router-link
      to="/EasySharing"
      class="router-link font-medium capitalize text-center text-lg w-full p-4 md:border-0 border-b-2"
      >easy sharing</router-link
    >
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-active,
.router-link:active,
.router-link:focus {
  color: hsl(231, 69%, 60%);
  transition: all 0.2s ease-in-out;
}

.router-link {
  position: relative;
}

.router-link::before {
  content: "";
  position: absolute;
  bottom: -1px;
  right: 0;
  width: 0;
  height: 3px;
  background-color: hsl(231, 69%, 60%);
  transition: width 0.3s ease-in-out;
}

.router-link:hover::before,
.router-link:focus::before,
.router-link:active::before {
  width: 100%;
  left: 0;
}
</style>
