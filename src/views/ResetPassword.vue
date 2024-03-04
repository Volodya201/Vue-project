<template>
    <AuthForm>
        <resetPassword />
    </AuthForm>
</template>

<script lang="ts" setup>
    import AuthForm from '@/widgets/AuthForm/AuthForm.vue'
    import resetPassword from "@/features/auth/component/resetPassword.vue"
</script>