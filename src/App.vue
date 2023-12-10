<script setup>
import { onMounted, ref } from 'vue'

let sneakers = ref([])
const fetchData = async () => {
  const response = await fetch('https://6574bc99b2fbb8f6509c9af4.mockapi.io/sneakers')
  const data = await response.json()
  return data
}

onMounted(async () => {
  sneakers.value = await fetchData()
})
</script>

<template>
  <div class="w-4/5 mx-auto bg-white my-10 rounded-2xl">
    <home-page :sneakers="sneakers"></home-page>
  </div>
</template>

<style scoped></style>
