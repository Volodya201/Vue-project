<template>
    <div>
        <h1 class="header">Номера телефонов</h1>

        <Loading>
            <ControlPhones />
        </Loading>
    </div>
</template>

<script lang="ts" setup>
    import Loading from "@/widgets/Loading/Loading.vue"

    import { defineAsyncComponent } from "vue"

    const ControlPhones = defineAsyncComponent(() => import("@/features/phones/component/ControlPhones.vue"))
</script>


<style scoped>
    .header {
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 25px 0;
    }
</style>