<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const cartIsOpen = ref(false)

const openCart = () => {
  cartIsOpen.value = true
}

const closeCart = () => {
  cartIsOpen.value = false
}
const orders = ref([])

const updateOrders = async (order) => {
  try {
    if (!order.isAdded) {
      const { data } = await axios.post('https://3beff67661303c60.mokky.dev/orders', {
        ...order,
        parentId: order.id,
        isAdded: true
      })
      order.isAdded = true
      order.orderId = data.id
      orders.value.push(data)
    } else {
      await axios.delete(`https://3beff67661303c60.mokky.dev/orders/${order.id}`)
      orders.value = orders.value.filter((o) => o.id !== order.id)
    }
  } catch (e) {
    console.log(e)
  }
}

const fetchOrders = async () => {
  try {
    const { data } = await axios.get('https://3beff67661303c60.mokky.dev/orders')
    orders.value = data
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  fetchOrders()
})
</script>

<template>
  <div class="w-4/5 mx-auto bg-white my-10 rounded-2xl">
    <the-header @open-cart="openCart"></the-header>

    <shopping-cart
      :cart-is-open="cartIsOpen"
      @close-cart="closeCart"
      :orders="orders"
      @update-cart="updateOrders"
    ></shopping-cart>

    <router-view @update-cart="updateOrders"></router-view>
  </div>
</template>

<style scoped></style>