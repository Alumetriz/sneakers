import axios from "axios";

export const fetchData = async (filters, sneakers) => {
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

export const fetchFavorites = async (sneakers) => {
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

export const updateFavorite = async (sneaker) => {
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