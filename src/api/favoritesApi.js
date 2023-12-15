import axios from 'axios'
import { favorites } from '@/constans/constans.js'

export const fetchFavorites = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/favorites')
    favorites.value = data
  } catch (e) {
    console.log(e)
  }
}

export const updateFavorite = async (sneaker) => {
  try {
    await axios.delete(`http://localhost:3000/favorites/${sneaker.id}`)
    sneaker.isFavorite = false
  } catch (e) {
    console.log(e)
  }
}