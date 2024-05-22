<template>
    <Loading>
        <GetProducts :plusButton="plusButton" />
    </Loading>
</template>

<script lang="ts" setup>
    import Loading from "@/widgets/Loading/Loading.vue"
    import { defineAsyncComponent } from "vue"

    interface IProps {
        plusButton?: boolean
    }

    const props = defineProps<IProps>()

    const GetProducts = defineAsyncComponent(() => import("@/features/products/components/GetProducts.vue"))
</script>