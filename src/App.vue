<script setup>
import { onMounted, ref } from 'vue'
import { fetchOrders, updateOrders } from '@/api/ordersApi.js'
import {orders} from "@/constans/constans.js";

const cartIsOpen = ref(false)

const openCart = () => {
  cartIsOpen.value = true
}

const closeCart = () => {
  cartIsOpen.value = false
}

onMounted(() => {
  fetchOrders(orders)
})
</script>

<template>
  <div class="w-4/5 mx-auto bg-white my-10 rounded-2xl">
    <the-header @open-cart="openCart"></the-header>

    <shopping-cart
      :cart-is-open="cartIsOpen"
      @close-cart="closeCart"
      :orders="orders"
      @update-cart="updateOrders"
    ></shopping-cart>

    <router-view @update-cart="updateOrders"></router-view>
  </div>
</template>

<style scoped></style>
