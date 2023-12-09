<script setup>
import {HEADER_ITEMS} from '@/constans.js'
import MagnifyingGlassIcon from '@heroicons/vue/24/outline/MagnifyingGlassIcon.js'
import {onMounted, reactive, ref} from 'vue'

let sneakers = ref([])
const fetchData = async () => {
  const response = await fetch('https://6574bc99b2fbb8f6509c9af4.mockapi.io/sneakers')
  const data = await response.json()
  return data
}

onMounted(async () => {
  sneakers.value = await fetchData()
  console.log(sneakers.value)
})
const sneakersFilter = ref('')
</script>

<template>
  <div class="w-4/5 mx-auto bg-white my-10 rounded-2xl">
    <header class="flex justify-between items-center border-b border-[#EAEAEA] p-11">
      <div class="flex gap-3.5 items-center">
        <img src="@/assets/img/logo.png" alt="Logo" class="h-10 w-10" />
        <div>
          <h1 class="font-bold text-xl uppercase">Sneakers</h1>
          <p class="text-[#9D9D9D]">Магазин лучших кроссовок</p>
        </div>
      </div>

      <nav>
        <ul class="flex gap-8">
          <li v-for="item in HEADER_ITEMS" :key="item.title">
            <a href="#" class="flex gap-2.5">
              <img :src="item.img" :alt="item.title" />
              <span class="text-[#5C5C5C] font-normal">{{ item.title }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="p-11">
      <div class="flex justify-between items-center">
        <label for="sneakers" class="text-3xl font-bold">Все кроссовки</label>
        <div class="relative">
          <div class="absolute top-0 bottom-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon class="w-5 h-5 text-[#E4E4E4]" />
          </div>
          <input
            type="text"
            id="sneakers"
            name="sneakers"
            v-model="sneakersFilter"
            placeholder="Поиск..."
            class="pl-10 text-sm placeholder-[#C4C4C4] text-gray-900 rounded-lg border border-gray-300 focus:ring-[##E7F6FF] focus:border-[#E7F6FF] block p-2.5 shadow-sm"
          />
        </div>
      </div>

      <div class="grid-cols-4 grid gap-10 mt-8">


        <div
          v-for="sneaker in sneakers"
          :key="sneaker.id"
          class="relative border border-gray-200 p-8 rounded-3xl cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
        >
          <img src="@/assets/img/like-1.svg" alt="" class="absolute cursor-pointer h-9 w-9" />
          <img :src="sneaker.img" alt="Sneakers" />

          <h3 class="mt-2">Мужские Кроссовки Nike Blazer Mid Suede</h3>

          <div class="flex items-center justify-between mt-5">
            <div class="flex flex-col">
              <span class="text-[#BDBDBD]">Цена:</span>
              <span class="font-bold text-sm">{{ sneaker.price.toLocaleString('us-US') }} руб.</span>
            </div>
            <img src="@/assets/img/plus.svg" alt="Add" class="cursor-pointer h-9 w-9" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
