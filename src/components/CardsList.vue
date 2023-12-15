<script setup>
import {updateOrders} from "@/api/ordersApi.js";
import {updateFavorite} from "@/api/api.js";

defineProps({
  sneakers: {
    type: Array
  }
})
</script>

<template>
  <div class="grid-cols-4 grid gap-10 mt-8">
    <card-item
      v-for="sneaker in sneakers"
      :key="sneaker.id"
      :sneaker="sneaker"
      @update-favorite="updateFavorite"
      @update-cart="updateOrders"
    ></card-item>
  </div>
</template>
