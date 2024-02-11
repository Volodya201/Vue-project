<template>
    <form class="form" @submit.prevent="onsubmit">
        <MainInput v-model="advantagesStore.updatingAdvantage.title" class="full-width" placeholder="Название" />
        <MainInput v-model="advantagesStore.updatingAdvantage.urlImage" class="full-width" placeholder="URL картинки" />
        <BigSaveButton text="Сохранить" class="full-width btn" />
    </form>
    
</template>

<script lang="ts" setup>
    import MainInput from '@/shared/ui/MainInput/MainInput.vue'
    import BigSaveButton from "@/shared/ui/BigSaveButton/BigSaveButton.vue"
    import { useAdvantagesStore } from "@/features/advantages/store/advantagesStore"
    import { usePopupStore } from '@/features/popup/store/popupStore'

    const advantagesStore = useAdvantagesStore()
    const popupStore = usePopupStore()

    const id = advantagesStore.updatingAdvantage.id

    async function onsubmit() {
        await advantagesStore.editAdvantage(id)
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