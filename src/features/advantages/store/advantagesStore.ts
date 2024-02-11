import { defineStore } from "pinia"
import { reactive, ref } from "vue"

import { IAdvantage, INewAdvantage } from "@/features/advantages/store/types"
import { instance } from "@/shared/axios"
import { AxiosError } from "axios"

import { useAlertsStore } from "@/features/alerts/store/alertsStore"

export const useAdvantagesStore = defineStore("advantages", () => {
    const advantages = ref<IAdvantage[]>([])
    const newAdvantage = reactive<INewAdvantage>({
        title: "",
        urlImage: "",
        description: ""
    })
    const errors = ref<string[]>([])

    const updatingAdvantage = reactive<IAdvantage>({
        id: 0,
        title: "",
        urlImage: "",
        description: ""
    })


    async function getAdvantages() {
        try {
            const { data } = await instance.get("advantages")
            advantages.value = data
        } catch (error) {
            advantages.value = []
        }  
    }

    async function selectAdvantage(advantage:IAdvantage) {
        updatingAdvantage.id = advantage.id
        updatingAdvantage.title = advantage.title
        updatingAdvantage.urlImage = advantage.urlImage
        updatingAdvantage.description = advantage.description
    }

    async function addAdvantage() {
        try {
            const { data } = await instance.post<IAdvantage>("advantages", newAdvantage)
            
            advantages.value.push(data)
            newAdvantage.title = ""
            newAdvantage.urlImage = ""
            newAdvantage.description = ""
        } catch (error:AxiosError|any) {
            errors.value = JSON.parse(error.response.data.message)
        }
    }

    async function deleteAdvantage(advantageId:number) {
        try {
            await instance.delete(`advantages/${advantageId}`)

            advantages.value = advantages.value.filter(advantage => advantage.id !== advantageId)
        } catch (error) {
            console.log(error)
        } 
    }


    async function editAdvantage(advantageId:number) {
        try {
            const {data} = await instance.patch<IAdvantage>(`advantages/${advantageId}`, updatingAdvantage)

            const foundAdvantages = advantages.value.find(advantage => advantage.id === advantageId)
            if (foundAdvantages) {              
                foundAdvantages.title = data.title
                foundAdvantages.urlImage = data.urlImage
                foundAdvantages.description = data.description
            }
        } catch (error) {
            
        }
    }


    async function editDescription(advantageId:number) {
        const alertsStore = useAlertsStore()

        try {
            const foundAdvantages = advantages.value.find(advantage => advantage.id === advantageId)

            if (foundAdvantages) {
                const requestResult = await instance.patch<IAdvantage>(`advantages/${advantageId}`, foundAdvantages)

                alertsStore.newAlert({
                    type: "successful",
                    header: "Успешно сохранено",
                    message: `Статус: ${requestResult.status}, статус текст: ${requestResult.statusText}, метод: ${requestResult.config.method}`
                })
            }
        } catch (error:any) {
            let alertData = {type: "error", header: "", message: ""}
            const status = error.response.status
            if (error.name === "AxiosError") {
                alertData.type = status === 304 ? "information" : "error"
                alertData.header = status === 304 ? "Не изменено" : "Ошибка запроса или сервера"
                alertData.message = status === 304 ? `Сервер запрещает изменять на пустые значения` : `URL: "${error.config.url}", сообщение: "${error.message}", метод: "${error.config.method}"`
            } else {
                alertData.header = "Ошибка фронтенда"
                alertData.message = `Произошла ошибка на клиенте, перезагрузите страницу`
            }
            alertsStore.newAlert(alertData)
        }
    }

    return {
        advantages,
        newAdvantage,
        updatingAdvantage,
        errors,
        getAdvantages,
        selectAdvantage,
        addAdvantage,
        deleteAdvantage,
        editAdvantage,
        editDescription
    }
})