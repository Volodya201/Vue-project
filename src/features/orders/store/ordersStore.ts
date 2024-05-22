import { defineStore } from "pinia"
import { computed, reactive, ref } from "vue"

import { IOrder, INewOrder, IOrderItem } from "@/features/orders/store/types"
import { instanceNest } from "@/shared/axios"
import { AxiosError } from "axios"

import { useAlertsStore } from "@/features/alerts/store/alertsStore"
import { IProduct } from "@/features/products/store/types"

export const useOrdersStore = defineStore("orders", () => {
    const orders = ref<IOrder[]>([])
    const newOrder = reactive<INewOrder>({
        user_id: null,
        orderItems: [],
        total_sum: computed<number>(() => {
            let price = 0
            for (let orderItemIndex = 0; orderItemIndex < newOrder.orderItems.length; orderItemIndex++) {
                const orderItem = newOrder.orderItems[orderItemIndex]
                price += +(orderItem.product.price_with_discount * orderItem.count).toFixed(2)
            }
            return price
        }),
    })
    const errors = ref<string[]>([])

    const viewingOrder = reactive<IOrder>({
        id: 0,
        total_sum: 0,
        user_id: 0,
        user: {
            username: "",
            email: ""
        },
        order_items: []
    })


    async function getOrders() {
        try {
            const { data } = await instanceNest.get("orders")

            orders.value = data
        } catch (error) {
            orders.value = []
        }  
    }

    async function viewOrder(order:IOrder) {
        viewingOrder.id = order.id
        viewingOrder.user_id = order.user_id
        viewingOrder.user = order.user
        viewingOrder.total_sum = order.total_sum
        viewingOrder.order_items = order.order_items

        console.log(viewingOrder.order_items)        
    }

    async function addOrder() {
        try {
            const { data } = await instanceNest.post<IOrder>("orders", {total_sum: newOrder.total_sum, user_id: newOrder.user_id})
            
            orders.value.push(data)

            const newOrderItemsWithOrderId = newOrder.orderItems.map(orderItem => {
                return {
                    product_id: orderItem.product_id,
                    count: orderItem.count,
                    order_id: data.id
                }
            })

            newOrder.user_id = null
            newOrder.orderItems = []

            await instanceNest.post<IOrderItem[]>("order-items", newOrderItemsWithOrderId)
        } catch (error:AxiosError|any) {
            const alertsStore = useAlertsStore()

            alertsStore.newAlert({
                type: "error",
                header: "Ошибка",
                message: `${JSON.stringify(error.response.data.message)}`
            })
        }
    }

    async function deleteOrder(orderId:number) {
        try {
            await instanceNest.delete(`orders/${orderId}`)

            orders.value = orders.value.filter(order => order.id !== orderId)
        } catch (error) {
            console.log(error)
        } 
    }


    // async function editOrder(orderId:number) {
    //     try {
    //         const {data} = await instanceNest.patch<IOrder>(`orders/${orderId}`, updatingOrder)

    //         const foundOrders = orders.value.find(order => order.id === orderId)
    //         if (foundOrders) {              
    //             foundOrders.title = data.title
    //             foundOrders.urlImage = data.urlImage
    //             foundOrders.description = data.description
    //         }
    //     } catch (error) {
            
    //     }
    // }


    async function addOrderItem(product:IProduct) {
        const foundOrderItem = newOrder.orderItems.findIndex(orderItem => orderItem.product_id === product.id)
        if(foundOrderItem === -1) {
            newOrder.orderItems.push({
                count: 1,
                product_id: product.id,
                product
            })
        } else {
            newOrder.orderItems[foundOrderItem].count++
        }
    }

    return {
        orders,
        newOrder,
        viewingOrder,
        errors,
        getOrders,
        viewOrder,
        addOrder,
        deleteOrder,
        // editOrder,

        addOrderItem
    }
})