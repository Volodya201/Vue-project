<template>
    <div>
        <MainInput v-model="productsStore.searchingText" placeholder="Поиск" />
    </div>
</template>

<script setup lang="ts">
    import { useProductsStore } from "@/features/products/store/productsStore"
    import MainInput from "@/shared/ui/MainInput/MainInput.vue"

    const productsStore = useProductsStore()
</script>