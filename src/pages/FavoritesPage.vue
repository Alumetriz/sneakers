<script setup>
import ChevronLeftIcon from '@heroicons/vue/24/solid/ChevronLeftIcon'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const favorites = ref([])

const fetchFavorites = async () => {
  try {
    const { data } = await axios.get('https://3beff67661303c60.mokky.dev/favorites')
    favorites.value = data
  } catch (e) {
    console.log(e)
  }
}

const updateFavorite = async (sneaker) => {
  try {
    await axios.delete(`https://3beff67661303c60.mokky.dev/favorites/${sneaker.id}`)
    sneaker.isFavorite = false
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  fetchFavorites()
})
</script>

<template>
  <main class="p-11">
    <div class="flex items-center gap-5">
      <ChevronLeftIcon
        class="h-9 p-2 text-[#C8C8C8] border border-gray-200 rounded-md cursor-pointer"
      ></ChevronLeftIcon>
      <h1 class="font-bold text-3xl">Мои закладки</h1>
    </div>

    <cards-list :sneakers="favorites" @update-favorite="updateFavorite"></cards-list>
  </main>
</template>

<style lang="scss" scoped></style>
