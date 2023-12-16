import { sneakers, percent, orders, ordersIsBought } from '@/constans/constans.js'
// import { deleteOrder, updateOrders } from '@/api/ordersApi.js'
import axios from 'axios'

export const calcCartQuantity = () => {
  return sneakers.value.reduce((acc, obj) => (obj.isAdded ? acc + 1 : acc), 0)
}
export const calcCartPrice = () => {
  return sneakers.value.reduce((acc, obj) => (obj.isAdded ? obj.price + acc : acc), 0)
}

export const calcPercent = () => {
  return calcCartPrice() * percent
}

export const buySneaker = () => {
  orders.value.forEach(async (order) => {
    // await updateOrders(order)
  })
  orders.value = []

  sneakers.value.forEach((sneaker) => {
    sneaker.isAdded = false
  })

  ordersIsBought.value = true

  setTimeout(() => {
    ordersIsBought.value = false
  }, 3000)
}
