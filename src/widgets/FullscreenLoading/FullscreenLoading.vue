<template>
    <div class="wrapper" v-if="loadingStore.isVisisble">
        <div class="loading">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useLoadingStore } from "@/features/loading/store/index"

    const loadingStore = useLoadingStore()
</script>

<style scoped>
    .wrapper { 
        background-color: #ffffff65;
        width: 100%;
        height: 100svh;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .v-enter-active {
        transition: 1s linear;
    }
    .v-enter-from {
        opacity: 0;
    }

    .v-enter-to {
        opacity: 1;
    }

    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }

    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #11112c;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #11112c transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>