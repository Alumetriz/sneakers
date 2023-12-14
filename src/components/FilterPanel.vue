<script setup>
import {ref} from "vue";
import MagnifyingGlassIcon from '@heroicons/vue/24/outline/MagnifyingGlassIcon.js'

const emit = defineEmits(['sort', 'search'])

const onSelected = (e) => {
  emit('sort', e.target.value)
}

const searchQuery = ref('')

const onSearch = (e) => {
  emit('search', e.target.value)
}
</script>

<template>
  <div class="flex justify-between items-center">
    <label for="sneakers" class="text-3xl font-bold">Все кроссовки</label>

    <div class="flex gap-3">
      <select
        class="text-gray-900 rounded-lg border border-gray-300 focus:ring-[##E7F6FF] focus:border-[#E7F6FF] shadow-sm"
        @change="onSelected"
      >
        <option value="name">По названию</option>
        <option value="price">По цене (дешевые)</option>
        <option value="-price">По цене (дорогие)</option>
      </select>

      <div class="relative">
        <div class="absolute top-0 bottom-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon class="w-5 h-5 text-[#E4E4E4]" />
        </div>
        <input
          type="text"
          id="sneakers"
          name="sneakers"
          :value="searchQuery"
          @input="onSearch"
          placeholder="Поиск..."
          class="pl-10 text-sm placeholder-[#C4C4C4] text-gray-900 rounded-lg border border-gray-300 focus:ring-[##E7F6FF] focus:border-[#E7F6FF] block p-2.5 shadow-sm"
        />
      </div>
    </div>
  </div>
</template>
