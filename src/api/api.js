import axios from 'axios'
import {sneakers, favorites} from '@/constans/constans.js'

export const fetchData = async (obj, endpoint) => {
  try {
    const { data: mainData } = await axios.get(`http://localhost:3000/${endpoint}`)

    const { data: favoritesData } = await axios.get(`http://localhost:3000/favorites`)
    const { data: ordersData } = await axios.get(`http://localhost:3000/orders`)
    const favoritesMap = {}
    const ordersMap = {}

    favoritesData.forEach((favorite) => {
      favoritesMap[favorite.id] = true
    })
    ordersData.forEach((order) => {
      ordersMap[order.id] = true
    })

    obj.value = mainData.map((sneaker) => {
      return {
        ...sneaker,
        isAdded: ordersMap[sneaker.id] || false,
        isFavorite: favoritesMap[sneaker.id] || false
      }
    })
  } catch (e) {
    console.log(e)
  }
}

export const sendFavorite = async (obj, endpoint, sneaker) => {
  try {
    if (!sneaker.isFavorite) {
      await axios.post(`http://localhost:3000/${endpoint}`, {
        ...sneaker,
        isFavorite: true
      })
      sneaker.isFavorite = true
    }
  } catch (e) {
    console.log(e)
  }
}

export const sendOrder = async (obj, endpoint, sneaker) => {
  try {
    if (!sneaker.isAdded) {
      await axios.post(`http://localhost:3000/${endpoint}`, {
        ...sneaker,
        isAdded: true
      })
      sneaker.isAdded = true
    }
  } catch (e) {
    console.log(e)
  }
}

export const deleteFavorite = async (sneaker) => {
    try {
      await axios.delete(`http://localhost:3000/favorites/${sneaker.id}`)
      sneaker.isFavorite = false
    } catch (e) {
      console.log(e)
    }
}

export const deleteOrder = async (sneaker) => {
    try {
      await axios.delete(`http://localhost:3000/orders/${sneaker.id}`)
      sneaker.isAdded = false
      sneakers.value.find((s) => s.id === sneaker.id).isAdded = false
      favorites.value.find((s) => s.id === sneaker.id).isAdded = false
    } catch (e) {
      console.log(e)
    }
}