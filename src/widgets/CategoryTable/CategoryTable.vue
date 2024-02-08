<template>
    <Loading>
        <GetCategories />
    </Loading>
</template>

<script lang="ts" setup>
    import Loading from "@/widgets/Loading/Loading.vue"
    import { defineAsyncComponent } from "vue"

    const GetCategories = defineAsyncComponent(() => import("@/features/categories/component/GetCategories.vue"))
</script>