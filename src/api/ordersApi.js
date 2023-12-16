import axios from 'axios'
// import { orders, sneakers } from '@/constans/constans.js'
//
// export const fetchOrders = async () => {
//   try {
//     const { data } = await axios.get('http://localhost:3000/orders')
//     orders.value = data
//   } catch (e) {
//     console.log(e)
//   }
// }
//
// export const updateOrders = async (order) => {
//   try {
//     if (!order.isAdded) {
//       const { data } = await axios.post('http://localhost:3000/orders', {
//         ...order,
//         parentId: order.id,
//         isAdded: true
//       })
//       order.isAdded = true
//       order.orderId = data.id
//       orders.value.push(data)
//     } else {
//       await axios.delete(`http://localhost:3000/orders/${order.id}`)
//       orders.value = orders.value.filter((o) => o.id !== order.id)
//       order.isAdded = false
//     }
//   } catch (e) {
//     console.log(e)
//   }
// }
//
// export const deleteOrder = async (order) => {
//   try {
//     await axios.delete(`http://localhost:3000/orders/${order.id}`)
//     orders.value = orders.value.filter((o) => o.id !== order.id)
//     sneakers.value.find((o) => o.id === order.parentId).isAdded = false
//   } catch (e) {
//     console.log(e)
//   }
// }
