<template>
    <form @submit.prevent="onSubmit" class="create-advantages">
        <mainInput v-model="advantagesStore.newAdvantage.title" placeholder="Введите название Преимущества..." />
        <mainInput v-model="advantagesStore.newAdvantage.urlImage" placeholder="Введите url картинки..." />
        <primaryButton text="Создать" />

        <mainTextarea class="description" v-model="advantagesStore.newAdvantage.description" placeholder="Введите описание Преимущества..." />
    </form>
</template>

<script setup lang="ts">
    import mainInput from "@/shared/ui/MainInput/MainInput.vue"
    import mainTextarea from "@/shared/ui/MainTextarea/MainTextarea.vue"
    import primaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
    import { useAdvantagesStore } from "@/features/advantages/store/advantagesStore"

    const advantagesStore = useAdvantagesStore()

    function onSubmit() {
        advantagesStore.addAdvantage()
    }
</script>

<style scoped>
    .create-advantages {
        display: grid;
        grid-template-columns: 2fr 2fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 15px;
        grid-template-areas: "title urlImage create" "description description description"
    }

    .description {
        grid-area: description;
    }
</style>