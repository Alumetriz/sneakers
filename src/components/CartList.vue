<script setup>
import CartItem from '@/components/CartItem.vue'

defineProps({
  orders: {
    type: Array
  }
})

const emit = defineEmits(['updateCart'])

const updateCart = (order) => {
  emit('updateCart', order)
}
</script>

<template>
  <div
    class="overflow-y-auto scrollbar-w-10 scrollbar-track-bg-gray-300 scrollbar-thumb-gray-500 p-3"
  >
    <cart-item
      v-for="order in orders"
      :key="order.id"
      :order="order"
      @update-cart="updateCart"
    ></cart-item>
  </div>
</template>

<style scoped></style>
