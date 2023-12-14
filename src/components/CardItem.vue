<script setup>
defineProps({
  sneaker: {
    type: Object
    // title: String,
    // image: String,
    // price: Number,
    // isFavorite: Boolean,
    // isAdded: Boolean,
    // onClickAdd: Function,
    // onClickFavorite: Function
  }
})
</script>

<template>
  <div
    class="relative border border-gray-200 p-8 rounded-3xl cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img src="@/assets/img/like-1.svg" alt="" class="absolute cursor-pointer h-9 w-9" />
    <img :src="sneaker.img" alt="Sneakers" />

    <h3 class="mt-2">{{ sneaker.title }}</h3>

    <div class="flex items-center justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-[#BDBDBD]">Цена:</span>
        <span class="font-bold text-sm">{{ sneaker.price.toLocaleString('us-US') }} руб.</span>
      </div>
      <img src="@/assets/img/plus.svg" alt="Add" class="cursor-pointer h-9 w-9" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
