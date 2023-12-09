<script setup>

import MagnifyingGlassIcon from '@heroicons/vue/24/outline/MagnifyingGlassIcon.js'
import {ref} from "vue";

const sneakersFilter = ref('')
</script>

<template>
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
</template>