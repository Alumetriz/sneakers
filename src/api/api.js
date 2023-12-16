import axios from 'axios'
import { favorites } from '@/constans/constans.js'
// import { sneakers, orders, filters, favorites } from '@/constans/constans.js'

// export const fetchData = async () => {
//   try {
//     const params = {};
//
//     if (filters.sortBy) {
//       params._sort = filters.sortBy.sortBy;
//       params._order = filters.sortBy.sortOrder;
//     }
//     console.log(filters)
//
//     if (filters.searchQuery) {
//       params.q = `${filters.searchQuery}`
//     }
//
//     const { data } = await axios.get(`http://localhost:3000/items`, {
//       params
//     })
//     console.log(data)
//     const { data: orders } = await axios.get(`http://localhost:3000/orders`)
//     const { data: fav } = await axios.get(`http://localhost:3000/favorites`)
//     // console.log(fav)
//
//     sneakers.value = data.map((sneaker) => {
//       const isAdded = orders.find((o) => o.id === sneaker.id)
//       const isFavorite = fav.find((f) => f.id === sneaker.id)
//
//       if (!isAdded) {
//         return {
//           ...sneaker,
//           isAdded: false,
//           isFavorite: !!isFavorite
//         }
//       }
//
//       return {
//         ...sneaker,
//         isAdded: true,
//         isFavorite: !!isFavorite
//       }
//     })
//   } catch (e) {
//     console.log(e)
//   }
// }

// export const fetchFavorites = async () => {
//   try {
//     const { data } = await axios.get('http://localhost:3000/favorites')
//     sneakers.value = sneakers.value.map((sneaker) => {
//       const favoriteSneaker = data.find((favorite) => favorite.parentId === sneaker.id)
//
//       if (!favoriteSneaker) {
//         return {
//           ...sneaker,
//           isFavorite: false
//         }
//       }
//
//       return {
//         ...sneaker,
//         isFavorite: true,
//         favoriteId: favoriteSneaker.id
//       }
//     })
//   } catch (e) {
//     console.log(e)
//   }
// }

// export const updateFavorite = async (sneaker) => {
//   try {
//     if (!sneaker.isFavorite) {
//       const { data } = await axios.post('http://localhost:3000/favorites', {
//         ...sneaker,
//         parentId: sneaker.id,
//         isFavorite: true
//       })
//       sneaker.isFavorite = true
//       sneaker.favoriteId = data.id
//     } else {
//       await axios.delete(`http://localhost:3000/favorites/${sneaker.id}`)
//       sneaker.isFavorite = false
//       sneaker.favoriteId = null
//     }
//   } catch (e) {
//     console.log(e)
//   }
// }

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
    } else {
      await axios.delete(`http://localhost:3000/${endpoint}/${sneaker.id}`)
      sneaker.isFavorite = false
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
    } else {
      await axios.delete(`http://localhost:3000/${endpoint}/${sneaker.id}`)
      sneaker.isAdded = false
    }
  } catch (e) {
    console.log(e)
  }
}
