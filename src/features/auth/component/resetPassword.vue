<template>
    <form class="form" @submit.prevent="onSubmit" v-if="!authStore.status">
        <MainInput v-model="authStore.resetPasswordData.email" placeholder="Имейл" />
        <MainInput v-model="authStore.resetPasswordData.newPassword" placeholder="Новый пароль" />
        <PrimaryButton text="Cменить пароль" />
        <p>Не забыли пароль? <router-link to="/login">Войдите в аккаунт</router-link></p>
        <p>Действие должно быть подтверждено на электронной почте!</p>
        <p>{{ authStore.message }}</p>
    </form>

    <div v-else>
        <h1>{{ authStore.message }}</h1>
    </div>
</template>

<script lang="ts" setup>
    import MainInput from "@/shared/ui/MainInput/MainInput.vue"
    import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
    import { useAuthStore } from "@/features/auth/store/index"
    import { onMounted } from "vue"
    import router from "@/router"

    const authStore = useAuthStore()

    async function onSubmit() {
        await authStore.resetPassword()
    }

    onMounted(() => {
        authStore.status = false
    })

    async function checkLogin() {
        await authStore.isLogin()

        if (authStore.isAuth) {
            router.replace("/")
        }
    }
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }

    h1 {
        text-align: center;
    }

    p {
        font-size: 20px;
        margin: 0 0;
    }
    
    a {
        text-decoration: none;
        color: #030319;
        font-weight: bold;
    }
</style>