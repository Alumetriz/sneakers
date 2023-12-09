<script setup>
defineProps({
  sneakers: {
    type: Array
  }
})
</script>

<template>
  <the-header></the-header>

  <main class="p-11">
    <filter-panel></filter-panel>

    <cards-list :sneakers="sneakers"></cards-list>
  </main>
</template>

<style lang="scss" scoped></style>
