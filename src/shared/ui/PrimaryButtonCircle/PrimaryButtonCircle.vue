<template>
    <button class="button">
        <span class="button-text">
            {{ text }}
        </span>
    </button>
    
</template>

<script setup lang="ts">
    const props = defineProps(["text"])
</script>

<style scoped>
    .button {
        background-color: #030319;
        color: #ffffff;
        border: 1px solid #0A0A22;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        /* padding: 10px; */
        font-size: 35px;
        font-weight: 700;
        width: 50px;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>