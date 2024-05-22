<template>
    <div class="addOrderItems">
        <div class="order-items">
            <h2>Товары в заказе</h2>

            <br>

            <OrderItemTable :orderItemsArray="ordersStore.newOrder.orderItems" />
        </div>

        <div class="products">
            <h2>Товары</h2>

            <br>

            <SearchProducts />

            <br>

            <ProductTable :plusButton="true" />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import OrderItemTable from '@/widgets/OrderItemTable/OrderItemTable.vue'
    import ProductTable from '@/widgets/ProductTable/ProductTable.vue'
    import SearchProducts from "@/features/products/components/SearchProducts.vue"
    import { useOrdersStore } from '@/features/orders/store/ordersStore';

    const ordersStore = useOrdersStore()
</script>

<style scoped>

    .addOrderItems {
        display: flex;
        justify-content: space-between;
    }

    .order-items {
        width: 40%;
    }

    .products {
        width: 55%;
    }

    .scroll {
        overflow-y: auto;
        height: 400px;
    }
    
</style>