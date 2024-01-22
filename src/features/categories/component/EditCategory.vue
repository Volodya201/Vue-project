<template>
    <form class="form" @submit.prevent="onsubmit">
        <MainInput v-model="categoriesStore.updatingCategory.title" class="full-width" />
        <MainInput v-model="categoriesStore.updatingCategory.urlImage" class="full-width" />
        <BigSaveButton text="Сохранить" class="full-width btn" />
    </form>
    
</template>

<script lang="ts" setup>
    import MainInput from '@/shared/ui/MainInput/MainInput.vue'
    import BigSaveButton from "@/shared/ui/BigSaveButton/BigSaveButton.vue"
    import { useCategoriesStore } from '../store/categoriesStore'
    import { usePopupStore } from '@/features/popup/store/popupStore'

    const categoriesStore = useCategoriesStore()
    const popupStore = usePopupStore()

    const id = categoriesStore.updatingCategory.id

    async function onsubmit() {
        await categoriesStore.editCategory(id)
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