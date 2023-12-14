<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import axios from 'axios'

const emit = defineEmits(['update-cart'])

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

const updateFavorite = async (sneaker) => {
  try {
    if (!sneaker.isFavorite) {
      const { data } = await axios.post('https://3beff67661303c60.mokky.dev/favorites', {
        ...sneaker,
        parentId: sneaker.id,
        isFavorite: true
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

const updateCart = (sneaker) => {
  emit('update-cart', sneaker)
}

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
  <main class="p-11">
    <filter-panel @sort="onChangeSelect" @search="handleSearch"></filter-panel>

    <cards-list
      :sneakers="sneakers"
      @update-favorite="updateFavorite"
      @update-cart="updateCart"
    ></cards-list>
  </main>
</template>

<style lang="scss" scoped></style>
