<script setup>
import { ref } from 'vue'

defineProps({
  sneakers: {
    type: Array
  }
})

const emit = defineEmits(['sort', 'search', 'addToFavorite'])

const addToFavorite = (sneaker) => {
  emit('addToFavorite', sneaker)
}

const sort = (value) => {
  emit('sort', value)
}
const search = (value) => {
  emit('search', value)
}

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
    <filter-panel @sort="sort" @search="search"></filter-panel>

    <cards-list :sneakers="sneakers" @add-to-favorite="addToFavorite"></cards-list>
  </main>
</template>

<style lang="scss" scoped></style>
