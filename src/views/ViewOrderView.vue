<template>
    <div>
        <div>
            <p>Id пользователя: {{ ordersStore.viewingOrder.user_id }}</p>
            <p>Имейл пользователя: {{ ordersStore.viewingOrder.user.email }}</p>
            <p>Сумма заказа: {{ ordersStore.viewingOrder.total_sum }}</p>
        </div>

        <div>
            <GetOrderItems :orderItemsArray="ordersStore.viewingOrder.order_items" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useOrdersStore } from "@/features/orders/store/ordersStore"
    import GetOrderItems from "@/features/orders/component/GetOrderItems"

    const ordersStore = useOrdersStore()
</script>