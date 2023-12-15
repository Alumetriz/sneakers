<script setup>
const props = defineProps({
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

const emit = defineEmits(['updateFavorite', 'updateCart'])

const updateFavorite = () => {
  emit('updateFavorite', props.sneaker)
}
const updateCart = () => {
  emit('updateCart', props.sneaker)
}
</script>

<template>
  <div
    class="relative border border-gray-200 p-8 rounded-3xl cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      v-if="!sneaker.isFavorite"
      src="@/assets/img/like-1.svg"
      alt=""
      class="absolute cursor-pointer h-9 w-9"
      @click="updateFavorite"
    />
    <img
      v-else
      src="@/assets/img/like-2.svg"
      alt=""
      class="absolute cursor-pointer h-9 w-9"
      @click="updateFavorite"
    />
    <img :src="sneaker.img" alt="Sneakers" />

    <h3 class="mt-2">{{ sneaker.title }}</h3>

    <div class="flex items-center justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-[#BDBDBD]">Цена:</span>
        <span class="font-bold text-sm">{{ sneaker.price.toLocaleString('us-US') }} руб.</span>
      </div>

      <img
        v-if="!sneaker.isAdded"
        src="@/assets/img/plus.svg"
        alt="Add"
        class="cursor-pointer h-9 w-9"
        @click="updateCart"
      />
      <img
        v-else
        src="@/assets/img/checked.svg"
        alt="Added"
        class="cursor-pointer h-9 w-9"
        @click="updateCart"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
