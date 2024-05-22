<template>
    <Table 
        :condition="productsStore.products.length > 0"
        message="Нет товаров"
        :columns="['Товар', 'Цена', 'Состав', 'Описание']"
        :rows="productsStore.products">
        <template v-slot="productsProps: {index:number, item:IProduct}">
            <tr>
                <th scope="row">{{ productsProps.index + 1 }}</th>
                <td>{{ productsProps.item.title }}</td>
                <td>{{ productsProps.item.price_with_discount }}</td>
                <td>{{ productsProps.item.consist }}</td>
                <td>{{ productsProps.item.description }}</td>
                <td v-if="!plusButton">
                    <template class="table-buttons">
                        <SelectProduct :product="productsProps.item">
                            <template v-slot="updateProps">
                                <EditButton @click="updateProps.onClick()" />
                            </template>
                        </SelectProduct>

                        <DeleteProduct :productId="productsProps.item.id">
                            <template v-slot="deleteProps">
                                <DangerButton @click="deleteProps.onClick()" />
                            </template>
                        </DeleteProduct>
                    </template>
                </td>

                <td v-else>
                    <AddOrderItem :product="productsProps.item">
                        <template v-slot="addProps">
                            <PlusButton @click="addProps.onClick()" />
                        </template>
                    </AddOrderItem>
                </td>
            </tr>
        </template>
    </Table>
</template>

<script setup lang="ts">
    import { useProductsStore } from "@/features/products/store/productsStore"
    import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue"
    import Table from "@/shared/ui/Table/Table.vue"
    import { IProduct } from "@/features/products/store/types"
    import DeleteProduct from "./DeleteProduct.vue"
    import SelectProduct from "@/features/products/components/SelectProduct"
    import EditButton from "@/shared/ui/EditButton/EditButton.vue"
    import PlusButton from "@/shared/ui/PlusButton/PlusButton.vue"
    import AddOrderItem from "@/features/orders/component/AddOrderItem.vue"

    interface IProps {
        plusButton?: boolean
    }

    const props = defineProps<IProps>()

    const productsStore = useProductsStore()


    await productsStore.getProducts()
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
</style>