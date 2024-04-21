<template>
    <div class="create-product-view">
        <h1>Создать товар</h1>

        <br>

        <CreateProduct />



        <!-- <ErrorsList :errors="categoriesStore.errors" /> -->

        <!-- <CategoryTable /> -->
        

        <!-- <transition>
            <Popup :image="categoriesStore.updatingCategory.urlImage">
                <EditCategory />
            </Popup>
        </transition>   -->
    </div>
</template>

<script setup lang="ts">
    import CreateProduct from '@/features/products/components/CreateProduct.vue'
    import MainSelect from "@/shared/ui/MainSelect/MainSelect.vue"
</script>

<style scoped>
    .create-product-view {
        overflow: visible;
    }
</style>