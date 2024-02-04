import { defineStore } from "pinia"
import { ref } from "vue"
import { IAlert } from "@/features/alerts/store/types"

export const useAlertsStore = defineStore("alerts", () => {

    const alerts = ref<IAlert[]>([])

    function newAlert(alert:IAlert) {
        alert.createdAt = Date.now()
        alerts.value.push(alert)
    }

    // setInterval(() => {
    //     alerts.value.filter(alert => {
    //         if ((alert.createdAt + 3000) < Date.now()) return true
    //         return false
    //     })
    // }, 1000)

    return {
        alerts,
        newAlert
    }
})