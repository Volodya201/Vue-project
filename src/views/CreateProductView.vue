<template>
    <div class="create-product-view">
        <h1>Создать товар</h1>

        <br>

        <CreateProduct />

        <transition>
            <Popup :image="productsStore.newProduct.url_image">
                <EditProductImage />
            </Popup>
        </transition>  
    </div>
</template>

<script setup lang="ts">
    import CreateProduct from '@/features/products/components/CreateProduct.vue'
    import Popup from '@/widgets/Popup/Popup.vue'
    import { useProductsStore } from '@/features/products/store/productsStore'
    import EditProductImage from '@/features/products/components/EditProductImage'

    const productsStore = useProductsStore()
</script>

<style scoped>
    .create-product-view {
        overflow: visible;
    }
</style>