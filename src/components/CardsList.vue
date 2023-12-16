<script setup>

defineProps({
  sneakers: {
    type: Array
  }
})

const emit = defineEmits(['sendFavoritesData', 'sendOrdersData', 'deleteFavorite', 'deleteOrder'])

const sendFavoritesData = (sneaker) => {
  emit('sendFavoritesData', sneaker)
}

const sendOrdersData = (sneaker) => {
  emit('sendOrdersData', sneaker)
}

const deleteFavorite = (sneaker) => {
  emit('deleteFavorite', sneaker)
}
const deleteOrder = (sneaker) => {
  emit('deleteOrder', sneaker)
}
</script>

<template>
  <div class="grid-cols-4 grid gap-10 mt-8" v-auto-animate>
    <card-item
      v-for="sneaker in sneakers"
      :key="sneaker.id"
      :sneaker="sneaker"
      @send-favorites-data="sendFavoritesData"
      @send-orders-data="sendOrdersData"
      @delete-favorite="deleteFavorite"
      @delete-order="deleteOrder"
    ></card-item>
  </div>
</template>
