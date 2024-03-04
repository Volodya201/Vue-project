<template>
    <div class="wrapper">
        <div v-if="authStore.status">
            <img src="@/assets/successful.png">
            <br>
            <br>
            <h1>Ваш аккаунт активирован</h1>
            <h3><router-link to="/login">Ссылка на вход в аккаунт</router-link></h3>
        </div>

        <div v-else>
            <img src="@/assets/error.png">
            <br>
            <br>
            <h1>Неверная ссылка подтверждения</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from "vue-router"
    import { useAuthStore } from "@/features/auth/store/index"
    import { onMounted } from 'vue'
    
    const authStore = useAuthStore()

    const route = useRoute()

    const key = route.params.key

    onMounted(() => {
        authStore.status = true
        authStore.activateAccount(route.params.key)
    })
</script>

<style scoped>
    .wrapper {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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

    img {
        max-width: 100px;
        max-height: 100px;
    }
</style>