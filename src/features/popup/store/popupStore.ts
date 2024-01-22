import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import { instance } from "@/shared/axios"
import { IRequestData } from "@/features/popup/store/types"

export const usePopupStore = defineStore("popup", () => {
    const isVisible = ref(false)

    function openPopup() {
        isVisible.value = true
    }

    function closePopup() {
        isVisible.value = false
    }

    return {
        isVisible,
        openPopup,
        closePopup
    }
})