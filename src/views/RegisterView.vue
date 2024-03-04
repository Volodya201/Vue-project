<template>
    <AuthForm>
        <registerUser/>
    </AuthForm>
</template>

<script setup lang="ts">
    import AuthForm from "@/widgets/AuthForm/AuthForm.vue"
    import registerUser from "@/features/auth/component/registerUser.vue"
</script>