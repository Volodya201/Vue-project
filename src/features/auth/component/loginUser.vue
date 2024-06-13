<template>
    <form class="form" @submit.prevent="onSubmit">
        <MainInput v-model="authStore.loginData.email" placeholder="Имейл" />
        <MainInput v-model="authStore.loginData.password" placeholder="Пароль" />
        <PrimaryButton text="Войти" />
        <p>Ещё нет аккаунта? <router-link to="/register">Зарегистрируйтесь</router-link></p>
        <p>Забыли пароль? <router-link to="/reset-password">Сбросьте его</router-link></p>
        <p id="authMessage">{{ authStore.message }}</p>
    </form>
</template>

<script lang="ts" setup>
    import MainInput from "@/shared/ui/MainInput/MainInput.vue"
    import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
    import { useAuthStore } from "@/features/auth/store/index"
    import { useRouter } from "vue-router"
    import { onMounted } from "vue"
    import router from "@/router"

    const authStore = useAuthStore()

    const route = useRouter()

    async function onSubmit() {
        await authStore.loginUser()
        if (authStore.status) {
            await route.push("/")
        }
    }

    onMounted(() => {
        authStore.status = true
    })

    async function checkLogin() {
        await authStore.isLogin()

        if (authStore.isAuth) {
            router.replace("/")
        }
    }

    checkLogin()
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
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