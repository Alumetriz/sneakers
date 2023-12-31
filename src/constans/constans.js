import { reactive, ref } from 'vue'

export const sneakers = ref([])
export const orders = ref([])
export const favorites = ref([])

export const filters = reactive({
  sortBy: 'name',
  searchQuery: ''
})

export const percent = 0.05

export const ordersIsBought = ref(false)
