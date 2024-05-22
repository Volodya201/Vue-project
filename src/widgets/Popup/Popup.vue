<template>
    <div class="popup" v-if="popupStore.isVisible">
        <div class="blackout" @click="closePopup"></div>

        <div class="popup-window">
            <div class="image">
                <img :src="image || '@/assets/bouquet.svg'" alt="Картинка не найдена!">
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">
    import { usePopupStore } from "@/features/popup/store/popupStore"

    const popupStore = usePopupStore()

    interface IProps {
        image: string|void
    }

    const props = defineProps<IProps>()

    function closePopup() {
        popupStore.closePopup()      
    }
</script>

<style scoped>

    .popup {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 200;
    }
    .blackout {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;  
        background-color: rgba(0, 0, 0, 0.45);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
    }

    .popup-window {
        position: relative;
        background-color: #fff;
        min-width: 62%;
        max-width: 62%;
        min-height: 60%;
        max-height: 60%;
        border-radius: 26px;
        padding: 25px;
        display: grid;
        grid-template-columns: 1fr 1.1fr;
        grid-gap: 25px;
        z-index: 5;
    }

    .image {
        border: 1px solid #030319;
        border-radius: 21px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 20px;
        text-wrap: wrap;
    }

    .image img {
        max-width: 90%;
        max-height: 90%;
    }
</style>