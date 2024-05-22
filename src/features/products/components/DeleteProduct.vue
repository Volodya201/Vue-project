<template>
    <div>
        <slot :onClick="deleteProduct" />
    </div>
</template>

<script lang="ts" setup>
    import { useProductsStore } from "@/features/products/store/productsStore"

    const productsStore = useProductsStore()

    interface IProps {
        productId: number
    }

    const props = defineProps<IProps>()

    function deleteProduct() { 
        productsStore.deleteProduct(props.productId)
    }
</script>

<style scoped>

</style>