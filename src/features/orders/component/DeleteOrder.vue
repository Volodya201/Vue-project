<template>
    <div>
        <slot :onClick="deleteOrder" />
    </div>
</template>

<script lang="ts" setup>
    import { useOrdersStore } from "@/features/orders/store/ordersStore"

    const ordersStore = useOrdersStore()

    interface IProps {
        orderId: number
    }

    const props = defineProps<IProps>()

    function deleteOrder() {
        ordersStore.deleteOrder(props.orderId)
    }
</script>