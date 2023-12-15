<script setup>
import { onMounted } from 'vue'
import {fetchFavorites, updateFavorite} from "@/api/favoritesApi.js";
import {favorites} from "@/constans/constans.js";
import ChevronLeftIcon from '@heroicons/vue/24/solid/ChevronLeftIcon'
import {fetchData} from "@/api/api.js";

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

    <cards-list :sneakers="favorites" @update-favorite="updateFavorite"></cards-list>
  </main>
</template>

<style lang="scss" scoped></style>
