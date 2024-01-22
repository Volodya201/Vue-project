<template>
    <ul class="errors-list">
        <li v-for="(error) of errors" :key="error">{{ error }}</li>
    </ul>
</template>


<script setup lang="ts">
    interface IProps {
        errors: string[]
    }

    const props = defineProps<IProps>()
</script>


<style scoped>
    .errors-list {
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #dc3545;
        font-size: 20px;
        font-weight: bold;
    }
</style>