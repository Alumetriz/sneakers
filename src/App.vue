<script setup>
import {ref} from "vue";

const cartIsOpen = ref(false)

const openCart = () => {
  cartIsOpen.value = true
}

const closeCart = () => {
  cartIsOpen.value = false
}
</script>

<template>
  <div class="w-4/5 mx-auto bg-white my-10 rounded-2xl">
    <the-header @open-cart="openCart"></the-header>

    <shopping-cart :cart-is-open="cartIsOpen" @close-cart="closeCart"></shopping-cart>

    <router-view></router-view>
  </div>
</template>

<style scoped></style>
