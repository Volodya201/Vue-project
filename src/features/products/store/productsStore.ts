import { defineStore } from "pinia"
import { ref, reactive, computed } from "vue"
import { instanceNest } from "@/shared/axios"
import router from "@/router"
import { useAlertsStore } from "@/features/alerts/store/alertsStore"
import { IProduct, INewProduct } from "@/features/products/store/types"

export const useProductsStore = defineStore("products", () => {

    const products = ref<IProduct[]>([])

    const newProduct = reactive<INewProduct>({
        title: "",
        url_image: "http://url.for/tests",
        price_original: null,
        discount: null,
        category_id: null,
        // label_id: null,
        consist: "",
        description: ""
    })

    let updatingProduct = reactive<IProduct>({
        id: 0,
        title: "",
        url_image: "",
        price_original: 0,
        discount: 0,
        price_with_discount: 0,
        category_id: 0,
        label_id: 0,
        consist: "",
        description: ""
    })

    const searching = ref<string>("")
    const searchingText = computed({
        get: () => searching.value,
        set: (val:string) => {
            searching.value = val

            if (searching.value === "") {
                getProducts()
                return
            }

            getFoundProducts()
        }
    })

    async function getProducts() {
        try {
            const { data } = await instanceNest.get("products")
            products.value = data
        } catch (error) {
            products.value = []
        }  
    }

    async function getFoundProducts() {
        try {
            const { data } = await instanceNest.get("products/ilike/" + searching.value)
            products.value = data
        } catch (error) {
            products.value = []
        }  
    }


    async function addProduct() {
        try {
            const { data } = await instanceNest.post<IProduct>("products", {...newProduct})

            router.push("/products")
            
            products.value.push(data)
            newProduct.title = ""
            newProduct.url_image = ""
            newProduct.price_original = null
            newProduct.discount = null
            newProduct.category_id = null
            //newProduct.label_id = null
            newProduct.consist = ""
            newProduct.description = ""
        } catch (error) {
            
        }  
    }

    async function selectProduct(product:IProduct) {
        updatingProduct.id = product.id
        updatingProduct.title = product.title
        updatingProduct.url_image = product.url_image
        updatingProduct.price_original = product.price_original
        updatingProduct.discount = product.discount
        updatingProduct.price_with_discount = product.price_with_discount
        updatingProduct.category_id = product.category_id
        //updatingProduct.label_id = product.label_id
        updatingProduct.consist = product.consist
        updatingProduct.description = product.description

        // if you ask for what i did it, ill answer for nothing other not be able to enter to updaingProduct    
    }

    async function updateProduct() {
        const alertsStore = useAlertsStore()
        try {
            const {data} = await instanceNest.patch<IProduct>(`products/${updatingProduct.id}`, updatingProduct)

            const foundProduct = products.value.find(product => product.id === updatingProduct.id)
            if (foundProduct) {              
                foundProduct.id = data.id
                foundProduct.title = data.title
                foundProduct.url_image = data.url_image
                foundProduct.price_original = data.price_original
                foundProduct.discount = data.discount
                foundProduct.price_with_discount = data.price_with_discount
                foundProduct.category_id = data.category_id
                //foundProduct.label_id = data.label_id
                foundProduct.consist = data.consist
                foundProduct.description = data.description
            }

            alertsStore.newAlert({
                type: "successful",
                header: "Успешно сохранено",
                message: `Успешно сохранен товар с индексом ${updatingProduct.id}`
            })
            
            router.push("/products")

        } catch (error) {
            alertsStore.newAlert({
                type: "error",
                header: "Произошла ошибка",
                message: `Это очень плохо`
            })
        }
    }

    async function deleteProduct(id:number) {
        try {
            const { data } = await instanceNest.delete("products/" + id)

            products.value = products.value.filter(product => product.id !== id)
        } catch (error) {
            
        }
    }

    return {
        products,
        newProduct,
        updatingProduct,
        searchingText,
        getProducts,
        getFoundProducts,
        addProduct,
        selectProduct,
        updateProduct,
        deleteProduct
    }
})