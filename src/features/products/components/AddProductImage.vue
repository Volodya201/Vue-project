<template>
    <MainAddImage @click.native="onClick" :url="productsStore.newProduct.url_image" />
</template>

<script setup lang="ts">
    import MainAddImage from "@/shared/ui/MainAddImage/MainAddImage.vue"
    import { useProductsStore } from "../store/productsStore"

    const productsStore = useProductsStore()

    interface IProps {
        openPopup: () => void
    }

    const props = defineProps<IProps>()

    function onClick() {
        props.openPopup()
    }
</script>

<style scoped>

</style>