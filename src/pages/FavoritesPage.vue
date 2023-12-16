<script setup>
import { onMounted } from 'vue'
import { fetchFavorites, updateFavorite } from '@/api/favoritesApi.js'
import { favorites } from '@/constans/constans.js'
import ChevronLeftIcon from '@heroicons/vue/24/solid/ChevronLeftIcon'
import { fetchData } from '@/api/api.js'
import ArrowLeftIcon from '@heroicons/vue/24/solid/ArrowLeftIcon.js'

onMounted(() => {
  fetchFavorites()
  fetchData()
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

    <cards-list
      v-if="favorites.length"
      :sneakers="favorites"
      @update-favorite="updateFavorite"
    ></cards-list>
    <div v-else class="flex flex-col gap-3 items-center justify-center h-full p-11">
      <img src="@/assets/img/emoji-1.png" alt="" class="h-16 w-16" />
      <h3 class="font-semibold text-2xl">Закладок нет :(</h3>
      <p class="text-lg text-[#9D9D9D] max-w-sm text-center">Вы ничего не добавляли в закладки</p>
      <router-link to="/">
        <button
          class="relative bg-lime-500 hover:bg-lime-600 active:bg-lime-700 disabled:bg-slate-300 text-white w-[250px] rounded-2xl p-5 mt-3"
        >
          <span class="flex items-center justify-center gap-5 font-semibold text-xl">
            <ArrowLeftIcon class="w-6 h-6 transition arrow-icon-left" />
            Вернуться назад
          </span>
        </button>
      </router-link>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>