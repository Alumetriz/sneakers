<script setup>
import { ref } from 'vue'

defineProps({
  sneakers: {
    type: Array
  }
})

const cartIsOpen = ref(false)

const openCart = () => {
  cartIsOpen.value = true
}

const closeCart = () => {
  cartIsOpen.value = false
}
</script>

<template>
  <shopping-cart :cart-is-open="cartIsOpen" @close-cart="closeCart"></shopping-cart>

  <the-header @open-cart="openCart"></the-header>

  <main class="p-11">
    <filter-panel></filter-panel>

    <cards-list :sneakers="sneakers"></cards-list>
  </main>
</template>

<style lang="scss" scoped></style>
