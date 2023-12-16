<script setup>
import { calcCartQuantity, calcCartPrice, calcPercent } from '@/api/cart.js'
import { orders } from '@/constans/constans.js'

const emit = defineEmits(['open-cart'])

const openCart = () => {
  emit('open-cart')
}
</script>

<template>
  <header class="flex justify-between items-center border-b border-[#EAEAEA] p-11">
    <router-link to="/">
      <div class="flex gap-3.5 items-center">
        <img src="@/assets/img/logo.png" alt="Logo" class="h-10 w-10" />
        <div>
          <h1 class="font-bold text-xl uppercase">Sneakers</h1>
          <p class="text-[#9D9D9D]">Магазин лучших кроссовок</p>
        </div>
      </div>
    </router-link>

    <nav>
      <ul class="flex gap-8">
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <a href="#" class="flex gap-2.5" @click.prevent="openCart">
            <img src="@/assets/img/cart.svg" alt="Корзина" />
            <span
              :class="orders.length > 0 ? 'font-bold text-black' : 'font-normal text-[#5C5C5C]'"
            >
              {{
                orders.length > 0
                  ? `${(calcCartPrice() + calcPercent()).toFixed(2)} руб.`
                  : 'Корзина'
              }}
            </span>
          </a>
        </li>
        <router-link to="/Favorites">
          <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
            <img src="@/assets/img/heart.svg" alt="Закладки" />
            <span class="text-[#5C5C5C] font-normal">Закладки</span>
          </li>
        </router-link>
        <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <a href="#" class="flex gap-2.5" @click.prevent="openCart">
            <img src="@/assets/img/profile.svg" alt="Профиль" />
            <span class="text-[#5C5C5C] font-normal">Профиль</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
