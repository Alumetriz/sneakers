import axios from 'axios'
import { sneakers, filters } from '@/constans/constans.js'

export const fetchData = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`http://localhost:3000/items`, {
      params
    })

    const { data: orders } = await axios.get(`http://localhost:3000/orders`)
    const { data: fav } = await axios.get(`http://localhost:3000/favorites`)
    // console.log(fav)

    sneakers.value = data.map((sneaker) => {
      const isAdded = orders.find((o) => o.id === sneaker.id)
      const isFavorite = fav.find((f) => f.id === sneaker.id)

      if (!isAdded) {
        return {
          ...sneaker,
          isAdded: false,
          isFavorite: !!isFavorite
        }
      }

      return {
        ...sneaker,
        isAdded: true,
        isFavorite: !!isFavorite
      }
    })
  } catch (e) {
    console.log(e)
  }
}

export const fetchFavorites = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/favorites')
    sneakers.value = sneakers.value.map((sneaker) => {
      const favoriteSneaker = data.find((favorite) => favorite.parentId === sneaker.id)

      if (!favoriteSneaker) {
        return {
          ...sneaker,
          isFavorite: false
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

export const updateFavorite = async (sneaker) => {
  try {
    if (!sneaker.isFavorite) {
      const { data } = await axios.post('http://localhost:3000/favorites', {
        ...sneaker,
        parentId: sneaker.id,
        isFavorite: true
      })
      sneaker.isFavorite = true
      sneaker.favoriteId = data.id
    } else {
      await axios.delete(`http://localhost:3000/favorites/${sneaker.id}`)
      sneaker.isFavorite = false
      sneaker.favoriteId = null
    }
  } catch (e) {
    console.log(e)
  }
}
