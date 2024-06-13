<template>
    <div class="clock" :title="title">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="17.5" r="16" stroke="black" stroke-width="3"/>
            <path d="M18 17V7" stroke="black" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M18 17L25 24" stroke="black" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
    </div>
</template>

<script lang="ts" setup>
    interface IProps {
        title: string
    }

    const props = defineProps<IProps>()
</script>

<style scoped>
    .clock {
        cursor: pointer;
        user-select: none;
        display: inline;
    }
</style>