<script setup>
import ArrowRightIcon from '@heroicons/vue/24/solid/ArrowRightIcon'

defineProps({
  cartIsOpen: {
    type: Boolean
  },
})

const emit = defineEmits(['close-cart', 'updateCart'])
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

        <cart-list></cart-list>
      </div>

      <div class="flex flex-col gap-3">
        <div class="flex gap-2 items-center">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>21 498 руб.</b>
        </div>
        <div class="flex gap-2 items-center">
          <span>Налог 5%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>1074 руб.</b>
        </div>
        <button
            disabled
            class="relative bg-lime-500 hover:bg-lime-600 active:bg-lime-700 disabled:bg-slate-300 text-white w-full rounded-2xl p-5 mt-3"
        >
          <span class="flex items-center justify-center gap-5 font-semibold text-xl">
            Оформить заказ
            <ArrowRightIcon class="w-6 h-6 transition arrow-icon" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button:hover .arrow-icon {
  transform: translateX(4px);
}
</style>
