<script setup>
import {onMounted, ref, watch} from 'vue'

import axios from 'axios'

let sneakers = ref([])
const fetchData = async (url) => {
  try {
    const { data } = await axios.get(url)
    sneakers.value = data
  } catch (e) {
    console.log(e)
  }
}

onMounted(  () => {
  fetchData('https://3beff67661303c60.mokky.dev/items')
})

const sortBy = ref('')
const searchQuery = ref('')

const onChangeSelect = (value) => {
  sortBy.value = value
}
const handleSearch = (value) => {
  searchQuery.value = value
}

watch(sortBy, () => {
  fetchData(`https://3beff67661303c60.mokky.dev/items?sortBy=${sortBy.value}`)
})

watch(searchQuery, () => {
  fetchData(`https://3beff67661303c60.mokky.dev/items?title=*${searchQuery.value}*`)
})
</script>

<template>
  <div class="w-4/5 mx-auto bg-white my-10 rounded-2xl">
    <home-page :sneakers="sneakers" @sort="onChangeSelect" @search="handleSearch"></home-page>
  </div>
</template>

<style scoped></style>
