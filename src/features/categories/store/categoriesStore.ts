import { defineStore } from "pinia"
import { reactive, ref } from "vue"

import { ICategory, INewCategory } from "@/features/categories/store/types"
import { instanceNest } from "@/shared/axios"
import { AxiosError } from "axios"

export const useCategoriesStore = defineStore("categories", () => {
    const categories = ref<ICategory[]>([])
    const newCategory = reactive<INewCategory>({
        title: "",
        urlImage: ""
    })
    const errors = ref<string[]>([])
    const enoughAccess = ref<boolean>(false)

    const updatingCategory = reactive<ICategory>({
        id: 0,
        title: "",
        urlImage: ""
    })


    async function getCategories() {
        try {
            const { data } = await instanceNest.get("categories")
            categories.value = data

            enoughAccess.value = true
        } catch (error) {
            categories.value = []
            enoughAccess.value = false
        }  
    }

    async function selectCategory(category:ICategory) {
        updatingCategory.id = category.id
        updatingCategory.title = category.title
        updatingCategory.urlImage = category.urlImage
    }

    async function addCategory() {
        try {
            const { data } = await instanceNest.post<ICategory|AxiosError>("categories", newCategory)

            console.log("data: ", data)

            //@ts-ignore
            if (data.statusCode === 400) throw new Error(JSON.stringify(data))
            //@ts-ignore
            if (data.statusCode === 403) throw new Error("403")
            //@ts-ignore
            if (data.statusCode === 500) throw new Error("500")

            // categories.value.push(data.data)
            // newCategory.title = ""
            // newCategory.urlImage = ""
        } catch (error:AxiosError|any) {
            const currentError = JSON.parse(error.message)

            errors.value = []
            
            if (currentError === "403") errors.value.push("Недостаточно прав")
            else if (currentError === "500") errors.value.push("Ошибка сервера, повторите попытку позже")
            else errors.value = [...currentError.message]
        }
    }

    async function deleteCategory(categoryId:number) {
        try {
            await instanceNest.delete(`categories/${categoryId}`)

            categories.value = categories.value.filter(category => category.id !== categoryId)
        } catch (error) {
            console.log(error)
        } 
    }

    async function editCategory(categoryId:number) {
        try {
            const {data} = await instanceNest.patch<ICategory>(`categories/${categoryId}`, updatingCategory)

            const foundCategories = categories.value.find(category => category.id === categoryId)
            if (foundCategories) {
                foundCategories.title = data.title
                foundCategories.urlImage = data.urlImage
            }
        } catch (error) {
            
        }
    }

    return {
        categories,
        newCategory,
        updatingCategory,
        errors,
        enoughAccess,
        getCategories,
        selectCategory,
        addCategory,
        deleteCategory,
        editCategory
    }
})