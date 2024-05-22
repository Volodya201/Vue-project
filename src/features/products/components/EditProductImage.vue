<template>
    <form class="form" @submit.prevent="onsubmit">
        <MainInput v-model="productsStore.newProduct.url_image" placeholder="url картинки" class="full-width" />
        <BigSaveButton text="Сохранить" class="full-width btn" />
    </form>
    
</template>

<script lang="ts" setup>
    import MainInput from '@/shared/ui/MainInput/MainInput.vue'
    import BigSaveButton from "@/shared/ui/BigSaveButton/BigSaveButton.vue"
    import { useProductsStore } from '@/features/products/store/productsStore'
    import { usePopupStore } from '@/features/popup/store/popupStore'

    const productsStore = useProductsStore()
    const popupStore = usePopupStore()

    async function onsubmit() {
        popupStore.closePopup()
    }
</script>

<style scoped>
    .form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 30px;
    }

    .input {
        width: 100%;
    }

    .btn {
        justify-self: flex-end;
    }
</style>