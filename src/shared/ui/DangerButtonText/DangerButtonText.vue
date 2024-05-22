<template>
    <button class="button">{{ text }}</button>
</template>

<script lang="ts" setup>
    interface IProps {
        text: string
    }

    const props = defineProps<IProps>()
</script>

<style scoped>
    .button {
        background-color: #EE0000;
        color: #ffffff;
        border-radius: 24px;
        padding: 10px 49px;
        font-size: 20px;
        font-weight: 700;
        border: none;
    }
</style>