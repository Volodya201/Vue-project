import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import { instance } from "@/shared/axios"

export const usePopupStore = defineStore("products", () => {

    const products = ref<IProduct[]>([

    ])

    const newProduct = reactive<INewProduct>({
        title: "",
        price_original: 0,
        discount: 0,
        category_id: 0,
        label_id: 0,
        consist: "",
        description: ""
    })

    async function getProducts() {
        try {
            const { data } = await instance.get("products")
            products.value = data
        } catch (error) {
            products.value = []
        }  
    }

    return {
        products,
        newProduct,
        getProducts
    }
})