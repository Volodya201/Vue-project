import { defineStore } from "pinia"
import { reactive, ref } from "vue"

import { ICategory, INewCategory } from "@/features/categories/store/types"
import { instance } from "@/shared/axios"
import { AxiosError } from "axios"

export const useCategoriesStore = defineStore("categories", () => {
    const categories = ref<ICategory[]>([])
    const newCategory = reactive<INewCategory>({
        title: "",
        urlImage: ""
    })
    let errors = ref<string[]>([])

    const updatingCategory = reactive<ICategory>({
        id: 0,
        title: "",
        urlImage: ""
    })


    async function getCategories() {
        try {
            const { data } = await instance.get("categories")
            categories.value = data
        } catch (error) {
            categories.value = []
            console.log(error)
        }  
    }

    async function selectCategory(category:ICategory) {
        updatingCategory.id = category.id
        updatingCategory.title = category.title
        updatingCategory.urlImage = category.urlImage
    }

    async function addCategory() {
        try {
            const { data } = await instance.post<ICategory>("categories", newCategory)
            
            categories.value.push(data)
            newCategory.title = ""
            newCategory.urlImage = ""
        } catch (error:AxiosError|any) {
            errors.value = JSON.parse(error.response.data.message)
            console.log(errors) 
        }
    }

    async function deleteCategory(categoryId:number) {
        try {
            await instance.delete(`categories/${categoryId}`)

            categories.value = categories.value.filter(category => category.id !== categoryId)
        } catch (error) {
            console.log(error)
        } 
    }

    async function editCategory(categoryId:number) {
        try {
            const {data} = await instance.patch<ICategory>(`categories/${categoryId}`, updatingCategory)

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
        getCategories,
        selectCategory,
        addCategory,
        deleteCategory,
        editCategory
    }
})