<script setup>
import { onMounted, provide, reactive, ref, watch } from 'vue'

import axios from 'axios'

let sneakers = ref([])

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://3beff67661303c60.mokky.dev/favorites')
    sneakers.value = sneakers.value.map((sneaker) => {
      const favoriteSneaker = favorites.find((favorite) => favorite.parentId === sneaker.id)

      if (!favoriteSneaker) {
        return {
          ...sneaker
        }
      }

      return {
        ...sneaker,
        isFavorite: true,
        favoriteId: favoriteSneaker.id
      }
    })
  } catch (e) {
    console.log(e)
  }
}

const fetchData = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://3beff67661303c60.mokky.dev/items`, {
      params
    })
    sneakers.value = data.map((sneaker) => {
      return {
        ...sneaker,
        isFavorite: false
      }
    })
  } catch (e) {
    console.log(e)
  }
}

const addToFavorite = async (sneaker) => {
  try {
    if (!sneaker.isFavorite) {
      const { data } = await axios.post('https://3beff67661303c60.mokky.dev/favorites', {
        ...sneaker,
        parentId: sneaker.id
      })
      sneaker.isFavorite = true
      sneaker.favoriteId = data.id
    } else {
      await axios.delete(`https://3beff67661303c60.mokky.dev/favorites/${sneaker.favoriteId}`)
      sneaker.isFavorite = false
      sneaker.favoriteId = null
    }
  } catch (e) {
    console.log(e)
  }
}

provide('addToFavorite', addToFavorite)

onMounted(() => {
  fetchData()
  fetchFavorites()
})

const filters = reactive({
  sortBy: 'name',
  searchQuery: ''
})

const onChangeSelect = (value) => {
  filters.sortBy = value
}
const handleSearch = (value) => {
  filters.searchQuery = value
}

watch(filters, () => fetchData())
</script>

<template>
  <div class="w-4/5 mx-auto bg-white my-10 rounded-2xl">
    <home-page
      :sneakers="sneakers"
      @sort="onChangeSelect"
      @search="handleSearch"
      @add-to-favorite="addToFavorite"
    ></home-page>
  </div>
</template>

<style scoped></style>
