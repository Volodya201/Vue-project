<template>
    <div>
        <slot :onClick="selectProduct" />
    </div>
</template>

<script lang="ts" setup>
    import { useProductsStore } from "@/features/products/store/productsStore"
    import { IProduct } from "@/features/products/store/types"
    import router from "@/router"

    const productsStore = useProductsStore()

    interface IProps {
        product: IProduct
    }

    const props = defineProps<IProps>()

    function selectProduct() { 
        productsStore.selectProduct(props.product)

        router.push("/update-product")
    }
</script>

<style scoped>

</style>