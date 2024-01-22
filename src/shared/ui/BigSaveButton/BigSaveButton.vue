<template>
    <button class="button">{{ text }}</button>
</template>

<script setup lang="ts">
    const props = defineProps(["text"])
</script>

<style scoped>
    .button {
        width: 100%;
        height: 46px;
        background-color: #1A8509;
        color: #ffffff;
        border: none;
        border-radius: 12px;
        outline: none;
        font-size: 20px;
        font-weight: bold;
    }
    
</style>