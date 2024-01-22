import { defineStore } from "pinia"
import { reactive, ref } from "vue"

import { IAdvantage, INewAdvantage } from "@/features/advantages/store/types"
import { instance } from "@/shared/axios"
import { AxiosError } from "axios"

export const useAdvantagesStore = defineStore("advantages", () => {
    const advantages = ref<IAdvantage[]>([])
    const newAdvantage = reactive<INewAdvantage>({
        title: "",
        urlImage: "",
        description: ""
    })
    let errors = reactive<string[]>([])

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
            console.log(error)
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
            errors = JSON.parse(error.response.data)           
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
        try {
            const foundAdvantages = advantages.value.find(advantage => advantage.id === advantageId)

            if (foundAdvantages) {
                await instance.patch<IAdvantage>(`advantages/${advantageId}`, updatingAdvantage)
            }
        } catch (error) {
            
        }
    }

    return {
        advantages,
        newAdvantage,
        updatingAdvantage,
        getAdvantages,
        selectAdvantage,
        addAdvantage,
        deleteAdvantage,
        editAdvantage,
        editDescription
    }
})