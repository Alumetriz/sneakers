import axios from "axios";
import {orders} from "@/constans/constans.js";

export const fetchOrders = async (orders) => {
    console.log({...await axios.get('http://localhost:3000/items')}.data)
    try {
        const { data } = await axios.get('https://3beff67661303c60.mokky.dev/orders')
        orders.value = data
    } catch (e) {
        console.log(e)
    }
}

export const updateOrders = async (order) => {
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