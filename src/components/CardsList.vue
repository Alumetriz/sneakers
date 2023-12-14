<script setup>

defineProps({
  sneakers: {
    type: Array
  }
})

const emit = defineEmits(['addToFavorite'])

const addToFavorite = (sneaker) => {
  emit('addToFavorite', sneaker)
}
</script>

<template>
  <div class="grid-cols-4 grid gap-10 mt-8">
    <card-item
      v-for="sneaker in sneakers"
      :key="sneaker.id"
      :sneaker="sneaker"
      @add-to-favorite="addToFavorite"
    ></card-item>
  </div>
</template>
