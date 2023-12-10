<script setup>
import { HEADER_ITEMS } from '@/constans.js'

const emit = defineEmits(['open-cart'])

const openCart = () => {
  emit('open-cart')
}
</script>

<template>
  <header class="flex justify-between items-center border-b border-[#EAEAEA] p-11">
    <a href="#" class="flex gap-3.5 items-center">
      <img src="@/assets/img/logo.png" alt="Logo" class="h-10 w-10" />
      <div>
        <h1 class="font-bold text-xl uppercase">Sneakers</h1>
        <p class="text-[#9D9D9D]">Магазин лучших кроссовок</p>
      </div>
    </a>

    <nav>
      <ul class="flex gap-8">
        <li v-for="item in HEADER_ITEMS" :key="item.title">
          <a href="#" class="flex gap-2.5" @click.prevent="item.title === 'Корзина' ? openCart() : ''">
            <img :src="item.img" :alt="item.title" />
            <span class="text-[#5C5C5C] font-normal">{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
