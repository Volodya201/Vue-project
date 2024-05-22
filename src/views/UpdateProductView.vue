<template>
    <div class="create-product-view">
        <h1>Изменить товар</h1>

        <br>

        <UpdateProduct />
    </div>
</template>

<script setup lang="ts">
    import UpdateProduct from '@/features/products/components/UpdateProduct.vue'
    import MainSelect from "@/shared/ui/MainSelect/MainSelect.vue"
</script>

<style scoped>
    .create-product-view {
        overflow: visible;
    }
</style>