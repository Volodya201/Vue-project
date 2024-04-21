<template>
    <div>
        <slot :onClick="logout" />
    </div>
</template>

<script setup lang="ts">
    import { useAuthStore } from "@/features/auth/store/index"

    const authStore = useAuthStore()

    function logout() {
        authStore.logout()
    }
</script>