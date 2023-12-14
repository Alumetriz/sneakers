<script setup>
const props = defineProps({
  sneakers: {
    type: Array
  }
})
console.log('test', props.sneakers)
</script>

<template>
  <div class="grid-cols-4 grid gap-10 mt-8">
    <!--    <div-->
    <!--      v-for="sneaker in sneakers"-->
    <!--      :key="sneaker.id"-->
    <!--      class="relative border border-gray-200 p-8 rounded-3xl cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"-->
    <!--    >-->
    <!--      <img src="@/assets/img/like-1.svg" alt="" class="absolute cursor-pointer h-9 w-9" />-->
    <!--      <img :src="sneaker.img" alt="Sneakers" />-->

    <!--      <h3 class="mt-2">{{ sneaker.title }}</h3>-->

    <!--      <div class="flex items-center justify-between mt-5">-->
    <!--        <div class="flex flex-col">-->
    <!--          <span class="text-[#BDBDBD]">Цена:</span>-->
    <!--          <span class="font-bold text-sm">{{ sneaker.price.toLocaleString('us-US') }} руб.</span>-->
    <!--        </div>-->
    <!--        <img src="@/assets/img/plus.svg" alt="Add" class="cursor-pointer h-9 w-9" />-->
    <!--      </div>-->
    <!--    </div>-->
    <card-item v-for="sneaker in sneakers" :key="sneaker.id" :sneaker="sneaker"></card-item>
  </div>
</template>
