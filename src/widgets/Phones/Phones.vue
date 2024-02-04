<template>
    <div>
        <h1 class="header">Номера телефонов</h1>

        <AddPhone />
    </div>
</template>

<script lang="ts" setup>
    import AddPhone from "@/features/phones/component/AddPhone.vue"
</script>


<style scoped>
    .header {
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 25px 0;
    }
</style>