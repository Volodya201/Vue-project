<template>
    <template class="center">
        <Loading>
            <ActivateUser />
        </Loading>
    </template>
</template>

<script setup lang="ts">
    import Loading from "@/widgets/Loading/Loading.vue"
    import { defineAsyncComponent } from "vue"
    
    const ActivateUser = defineAsyncComponent(() => import("@/features/auth/component/activateUser.vue"))
</script>

<style scoped>
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>