import axios from "axios"
import router from "@/router/index"
import { useAuthStore } from "@/features/auth/store"


const instance = axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + localStorage.getItem("accessToken")

    return config
})

instance.interceptors.response.use(config => {
    return config
}, async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401) {  
        const authStore = useAuthStore()
        try {
            const tokens = await instance.get("auth/refresh")

            localStorage.setItem("accessToken", tokens.data.accessToken)

            originalRequest.headers.Authorization = "Bearer " + tokens.data.accessToken

            authStore.isAuth = true

            return instance(originalRequest)
        } catch (error) {
            router.push("/login")
            authStore.isAuth = false
        }
    }
})


instance.interceptors.request.use(config => {
    return config
})



export {instance}