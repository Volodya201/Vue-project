<template>
    <Table 
        :condition="ordersStore.orders.length > 0"
        message="Нет заказов"
        :columns="['Сумма', 'Пользователь']"
        :rows="ordersStore.orders"
    >
        <template v-slot="orderProps: {index:number, item:IOrder}">
            <tr>
                <th scope="row">{{ orderProps.index + 1 }}</th>
                <td>{{ orderProps.item.total_sum }}</td>
                <td>{{ orderProps.item.user.username }}</td>
                <td class="table-buttons">
                    <template class="table-buttons">
                        <ViewOrder :order="orderProps.item">
                            <template v-slot="viewProps">
                                <InfoButton @click="viewProps.onClick()" />
                            </template>
                        </ViewOrder>
                    </template>
                    <!-- <DeleteOrder :orderId="orderProps.item.id">
                        <template v-slot="deleteProps">
                            <DangerButton @click="deleteProps.onClick()" />
                        </template>
                    </DeleteOrder>
                    
                    <TogglePopup v-slot="childrenProps">
                        <SelectAdvantage :order="orderProps.item" :openPopup="childrenProps.onClick" />
                    </TogglePopup> -->
                </td>
            </tr>
        </template>
    </Table>
</template>

<script setup lang="ts">
    import { useOrdersStore } from "@/features/orders/store/ordersStore"
    import InfoButton from "@/shared/ui/InfoButton/InfoButton.vue"
    import Table from "@/shared/ui/Table/Table.vue"
    import { IOrder } from "@/features/orders/store/types"
    import ViewOrder from "@/features/orders/component/ViewOrder"
    import { onMounted } from "vue"

    const ordersStore = useOrdersStore()


    await ordersStore.getOrders()
</script>

<style scoped>
    .table-buttons {
        display: flex;
        justify-content: end;
        gap: 20px
    }
</style>