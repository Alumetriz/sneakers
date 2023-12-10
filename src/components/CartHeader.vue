<script setup>

import ArrowLeftIcon from "@heroicons/vue/24/solid/ArrowLeftIcon.js";

const emit = defineEmits(['close-cart'])
</script>


<template>
  <div class="flex justify-between">
    <ArrowLeftIcon
        class="h-8 w-8 text-[#5C5C5C] transition hover:text-black hover:-translate-x-1 cursor-pointer"
        @click="emit('close-cart')"
    ></ArrowLeftIcon>
    <h2 class="font-bold text-2xl">Корзина</h2>
  </div>
</template>


<style lang="scss" scoped>

</style>