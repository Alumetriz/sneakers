<script setup>
import {onMounted, watch} from 'vue'
import { calcCartPrice, calcPercent, buySneaker } from '@/api/cart.js'
import { fetchData } from '@/api/api.js'
import ArrowRightIcon from '@heroicons/vue/24/solid/ArrowRightIcon'
import { orders, ordersIsBought } from '@/constans/constans.js'
import ArrowLeftIcon from '@heroicons/vue/24/solid/ArrowLeftIcon'

defineProps({
  cartIsOpen: {
    type: Boolean
  }
})

const emit = defineEmits(['close-cart', 'updateCart'])

onMounted(() => {
  fetchData(orders, 'orders')
})

watch(orders, () => fetchData(orders, 'orders'))
</script>

<template>
  <div
    class="fixed top-0 left-0 z-10 h-screen w-full bg-black/50"
    v-if="cartIsOpen"
    @click="emit('close-cart')"
  ></div>
  <div
    class="fixed bg-white z-20 right-0 top-0 h-screen transition w-full sm:w-[500px] p-5"
    v-if="cartIsOpen"
  >
    <div class="flex flex-col justify-between h-full">
      <div class="flex flex-col gap-3 h-4/5">
        <cart-header @close-cart="emit('close-cart')"></cart-header>

        <cart-list v-if="orders.length && !ordersIsBought"></cart-list>
        <div v-else class="flex flex-col gap-3 items-center justify-center h-full">
          <img
            :src="
              ordersIsBought
                ? '../src/assets/img/order-success-icon.png'
                : '../src/assets/img/package-icon.png'
            "
            alt=""
            class="h-32 w-32"
          />
          <h3 class="font-semibold text-2xl">
            <!--            Корзина пустая-->
            {{ ordersIsBought ? 'Заказ оформлен!' : 'Корзина пустая' }}
          </h3>
          <p class="text-lg text-[#9D9D9D] max-w-sm text-center">
            {{
              ordersIsBought
                ? 'Ваш заказ скоро будет передан курьерской доставке'
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }}
          </p>
          <button
            class="relative bg-lime-500 hover:bg-lime-600 active:bg-lime-700 disabled:bg-slate-300 text-white w-3/4 rounded-2xl p-5 mt-3"
            @click="emit('close-cart')"
          >
            <span class="flex items-center justify-center gap-5 font-semibold text-xl">
              <ArrowLeftIcon class="w-6 h-6 transition arrow-icon-left" />
              Вернуться назад
            </span>
          </button>
        </div>
      </div>

      <div v-if="orders.length" class="flex flex-col gap-3">
        <div class="flex gap-2 items-center">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ (calcCartPrice() + calcPercent()).toFixed(2) }} руб.</b>
        </div>
        <div class="flex gap-2 items-center">
          <span>Налог 5%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ calcPercent().toFixed(2) }} руб.</b>
        </div>
        <button
          v-bind:disabled="orders.length === 0"
          @click="buySneaker"
          class="relative bg-lime-500 hover:bg-lime-600 active:bg-lime-700 disabled:bg-slate-300 text-white w-full rounded-2xl p-5 mt-3"
        >
          <span class="flex items-center justify-center gap-5 font-semibold text-xl">
            Оформить заказ
            <ArrowRightIcon class="w-6 h-6 transition arrow-icon-right" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button:hover .arrow-icon-right {
  transform: translateX(4px);
}

button:hover .arrow-icon-left {
  transform: translateX(-4px);
}
</style>
