import axios from "axios";

export const fetchFavorites = async (favorites) => {
    try {
        const { data } = await axios.get('https://3beff67661303c60.mokky.dev/favorites')
        favorites.value = data
    } catch (e) {
        console.log(e)
    }
}

export const updateFavorite = async (sneaker) => {
    try {
        await axios.delete(`https://3beff67661303c60.mokky.dev/favorites/${sneaker.id}`)
        sneaker.isFavorite = false
    } catch (e) {
        console.log(e)
    }
}