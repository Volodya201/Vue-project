<template>
    <GetOrderItems />
</template>

<script lang="ts" setup>
    import Loading from "@/widgets/Loading/Loading.vue"
    import { defineAsyncComponent } from "vue"

    const GetOrderItems = defineAsyncComponent(() => import("@/features/orders/component/GetOrderItems.vue"))
</script>