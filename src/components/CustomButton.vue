<template>
    <button :class="style">
        <slot></slot>
    </button>
</template>
<script setup lang="ts">

const props = defineProps<{
    style: string
}>();

</script>


<!-- rounded-lg uppercase bg-secondaryColour duration-200 flex justify-center items-center text-white w-24 h-10 py-2 cursor-pointer hover:bg-white border-2 border-secondaryColour hover:text-secondaryColour -->


<!-- mobile  -->
<!-- rounded-lg uppercase bg-secondaryColour duration-200 flex justify-center items-center text-white w-24 h-10 py-2 cursor-pointer hover:bg-white border-2 border-secondaryColour hover:text-secondaryColour -->