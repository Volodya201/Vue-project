<template>
    <h1>Товары  <router-link class="create" to="/create-product">+</router-link></h1>

    <br>

    <ProductTable />
</template>

<script lang="ts" setup>
    import ProductTable from '@/widgets/ProductTable/ProductTable.vue'


</script>

<style scoped>
    .create {
        text-decoration: none;
        font-weight: 700;
        color: #030319;
    }
</style>