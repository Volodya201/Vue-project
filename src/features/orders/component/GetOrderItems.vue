<template>
    <Table 
        :condition="orderItemsArray.length > 0"
        message="Добавьте товары в заказ"
        :columns="['Товар', 'Количество', 'Цена']"
        :rows="orderItemsArray"
    >
        <template v-slot="orderItemProps: {index:number, item:IOrderItem}">
            <tr>
                <th scope="row">{{ orderItemProps.index + 1 }}</th>
                <td>{{ orderItemProps.item.product.title }}</td>
                <td>{{ orderItemProps.item.count }}</td>
                <td>{{ (orderItemProps.item.product.price_with_discount * orderItemProps.item.count).toFixed(2) }}</td>
            </tr>
        </template>
    </Table>
</template>

<script setup lang="ts">
    import { useOrdersStore } from "@/features/orders/store/ordersStore"
    import Table from "@/shared/ui/Table/Table.vue"
    import { IOrderItem } from "@/features/orders/store/types"

    const ordersStore = useOrdersStore()

    interface IProps {
        orderItemsArray: IOrderItem[]
    }

    const props = defineProps<IProps>()

    // await ordersStore.getOrders()
</script>

<style scoped>
    .table-buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: end;
        gap: 20px;
        height: 100%;
        align-content: stretch
    }

    .number {
        text-align: right;
    }
</style>