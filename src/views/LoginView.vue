<template>
    <AuthForm>
        <loginUser/>
    </AuthForm>
</template>

<script setup lang="ts">
    import AuthForm from "@/widgets/AuthForm/AuthForm.vue"
    import loginUser from "@/features/auth/component/loginUser.vue"
</script>