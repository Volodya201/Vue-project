<template>
    <Loading>
        <GetOrders />
    </Loading>
</template>

<script lang="ts" setup>
    import Loading from "@/widgets/Loading/Loading.vue"
    import { defineAsyncComponent } from "vue"

    const GetOrders = defineAsyncComponent(() => import("@/features/orders/component/GetOrders.vue"))
</script>