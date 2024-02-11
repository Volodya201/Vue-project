<template>
    <Loading>
        <GetAdvantages />
    </Loading>
</template>

<script lang="ts" setup>
    import Loading from "@/widgets/Loading/Loading.vue"
    import { defineAsyncComponent } from "vue"

    const GetAdvantages = defineAsyncComponent(() => import("@/features/advantages/component/GetAdvantages.vue"))
</script>