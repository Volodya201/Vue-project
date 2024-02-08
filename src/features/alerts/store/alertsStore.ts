import { defineStore } from "pinia"
import { ref } from "vue"
import { IAlert, INewAlert } from "@/features/alerts/store/types"

export const useAlertsStore = defineStore("alerts", () => {

    const alerts = ref<IAlert[]>([])

    function newAlert(alert:INewAlert) {
        const newAlert:IAlert = {
            ...alert,
            createdAt: Date.now()
        }
        alerts.value.push(newAlert)
    }

    function deleteAlert(alert:IAlert) {
        const index = alerts.value.indexOf(alert)

        if (index) alerts.value.splice(index, 1)
    }

    setInterval(() => {
        alerts.value = alerts.value.filter(alert => {
            if ((alert.createdAt + 3000) > Date.now()) return true
        })
    }, 1000)

    return {
        alerts,
        newAlert,
        deleteAlert
    }
})