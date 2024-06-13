import { instanceNest } from "@/shared/axios"
import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import { useLoadingStore } from "@/features/loading/store/index"
import router from "@/router"

export const useAuthStore = defineStore("auth", () => {
    const isAuth = ref<boolean>(false)
    const isChecked = ref<boolean>(false)

    const message = ref("")
    const status = ref(true)

    const registerData = reactive({
        email: "",
        username: "",
        password: ""
    })

    const loginData = reactive({
        email: "",
        password: ""
    })

    const resetPasswordData = reactive({
        email: "",
        newPassword: ""
    })


    async function isLogin() {        
        try {
            const data = await instanceNest.get("auth/check-login")

            if (data.status >= 400) throw new Error(" ")

            isAuth.value = true
        } catch (error) {
            isAuth.value = false
        }
    }

    async function registerUser() {
        const loadingStore = useLoadingStore()
        loadingStore.show()
        try {
            await instanceNest.post("auth/register", registerData)
            message.value = "Вам на емейл отправлена ссылка для активации"
            status.value = true

            registerData.email = ""
            registerData.username = ""
            registerData.password = ""
        } catch (error) {
            message.value = "Пользователь с таким имейлом уже существует"
            status.value = false
        }
        loadingStore.hide()
    }

    async function loginUser() {
        const loadingStore = useLoadingStore()
        loadingStore.show()
        try {
            const { data } = await instanceNest.post("auth/login", loginData)

            localStorage.setItem("accessToken", data.accessToken)

            isAuth.value = true
            status.value = true
            loginData.email = ""
            loginData.password = ""
        } catch (error) {
            message.value = "Логин или пароль неверен!"
            status.value = false
        }
        loadingStore.hide()
    }

    async function activateAccount(key:any) {
        try {
            const { data } = await instanceNest.patch("auth/activate/" + key)
            console.log(data)
            status.value = true
        } catch (error) {
            status.value = false
        }
    }

    async function resetPassword() {
        const loadingStore = useLoadingStore()
        loadingStore.show()
        try {
            await instanceNest.post("auth/reset-password", resetPasswordData)
            status.value = true
            message.value = "Зайдите на электронную почту для подтверждения"
        } catch (error) {
            message.value = "Пользователь с таким имейлом не найден"
            status.value = false  
        }
        loadingStore.hide()
    }

    async function confirmPassword(key:any) {
        try {
            await instanceNest.patch("auth/confirm-password/" + key)
            status.value = true
        } catch (error) {
            status.value = false
        }
    }

    async function logout() {
        localStorage.setItem("accessToken", "")
        await instanceNest.get("auth/logout")
        isAuth.value = false
        router.push("/login")
    }


    return {
        isAuth,
        isChecked,
        message,
        status,
        registerData,
        loginData,
        resetPasswordData,
        isLogin,
        registerUser,
        activateAccount,
        loginUser,
        resetPassword,
        confirmPassword,
        logout
    }
})