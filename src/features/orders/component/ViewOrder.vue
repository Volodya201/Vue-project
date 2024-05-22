<template>
    <div>
        <slot :onClick="viewOrder" />
    </div>
</template>

<script lang="ts" setup>
    import { useOrdersStore } from "@/features/orders/store/ordersStore"
    import { IOrder } from "@/features/orders/store/types"
    import router from "@/router/index"

    const ordersStore = useOrdersStore()

    interface IProps {
        order: IOrder
    }

    const props = defineProps<IProps>()

    function viewOrder() {
        ordersStore.viewOrder(props.order)

        router.push("view-order")
    }
</script>