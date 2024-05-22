<template>
    <div>
        <slot :onClick="addOrderItem" />
    </div>
</template>

<script lang="ts" setup>
    import { useOrdersStore } from "@/features/orders/store/ordersStore"
    import { IProduct } from "@/features/products/store/types"

    const ordersStore = useOrdersStore()

    interface IProps {
        product: IProduct
    }

    const props = defineProps<IProps>()

    function addOrderItem() {
        ordersStore.addOrderItem(props.product)
    }
</script>