<script setup>

defineProps({
  sneakers: {
    type: Array
  }
})

const emit = defineEmits(['updateFavorite'])

const updateFavorite = (sneaker) => {
  emit('updateFavorite', sneaker)
}
</script>

<template>
  <div class="grid-cols-4 grid gap-10 mt-8">
    <card-item
      v-for="sneaker in sneakers"
      :key="sneaker.id"
      :sneaker="sneaker"
      @update-favorite="updateFavorite"
    ></card-item>
  </div>
</template>
