<template>
    <form class="form" @submit.prevent="onSubmit" v-if="!authStore.status">
        <MainInput v-model="authStore.registerData.email" placeholder="Имейл" />
        <MainInput v-model="authStore.registerData.username" placeholder="Никнейм" />
        <MainInput v-model="authStore.registerData.password" placeholder="Пароль" />
        <PrimaryButton text="Зарегистрироваться" />
        <p>Уже есть аккаунт? <router-link to="/login">Войдите в него</router-link></p>
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

    const authStore = useAuthStore()

    async function onSubmit() {
        await authStore.registerUser()
    }

    onMounted(() => {
        authStore.status = false
    })
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