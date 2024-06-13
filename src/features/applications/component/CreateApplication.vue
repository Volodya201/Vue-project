<template>
    <form @submit.prevent="onSubmit" class="create-advantages">
        <mainInput v-model="applicationsStore.newApplication.user_id" placeholder="Введите id пользователя" :clear="true" />
        <mainInput v-model="applicationsStore.newApplication.wish" placeholder="Введите ваше пожелание" :clear="true" />
        <primaryButton text="Создать" />
    </form>
</template>

<script setup lang="ts">
    import mainInput from "@/shared/ui/MainInput/MainInput.vue"
    import mainTextarea from "@/shared/ui/MainTextarea/MainTextarea.vue"
    import primaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
    import { useApplicationsStore } from "@/features/applications/store/applicationsStore"
    import { vClear } from "@/shared/directives/index"

    const applicationsStore = useApplicationsStore()

    function onSubmit() {
        applicationsStore.addApplication()
    }
</script>

<style scoped>
    .create-advantages {
        display: grid;
        grid-template-columns: 2fr 2fr 1fr;
        grid-gap: 15px;
    }
</style>