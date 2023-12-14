<script setup>

defineProps({
  sneakers: {
    type: Array
  }
})

const emit = defineEmits(['updateFavorite', 'updateCart'])

const updateFavorite = (sneaker) => {
  emit('updateFavorite', sneaker)
}
const updateCart = (sneaker) => {
  emit('updateCart', sneaker)
}
</script>

<template>
  <div class="grid-cols-4 grid gap-10 mt-8">
    <card-item
      v-for="sneaker in sneakers"
      :key="sneaker.id"
      :sneaker="sneaker"
      @update-favorite="updateFavorite"
      @update-cart="updateCart"
    ></card-item>
  </div>
</template>
