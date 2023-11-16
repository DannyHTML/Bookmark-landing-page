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