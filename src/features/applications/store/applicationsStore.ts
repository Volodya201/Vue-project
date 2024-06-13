import { defineStore } from "pinia"
import { reactive, ref } from "vue"

import { IApplication, INewApplication } from "@/features/applications/store/types"
import { instanceNest } from "@/shared/axios"
import { AxiosError } from "axios"

import { useAlertsStore } from "@/features/alerts/store/alertsStore"

import { io } from "socket.io-client"

const socket = io("http://localhost:5000")

export const useApplicationsStore = defineStore("applications", () => {
    const applications = ref<IApplication[]>([])
    const newApplication = reactive<INewApplication>({
        user_id: null,
        wish: ""
    })

    const getAllApplicationsBool = ref<boolean>(false)
    const showDateWithTime = ref<boolean>(false)

    async function getApplications() {
        (!getAllApplicationsBool.value) ? getUncheckedApplications() : getAllApplications()
    }

    async function getUncheckedApplications() {
        const { data } = await instanceNest.get<IApplication[]>("applications")

        if (showDateWithTime.value) {
            data.map((application) => application.createdAt = parseDateWithTime(application.createdAt))
        } else {
            data.map((application) => application.createdAt = parseDate(application.createdAt.substr(0, 10)))
        }

        applications.value = data
    }

    async function getAllApplications() {
        const { data } = await instanceNest.get<IApplication[]>("applications/all")

        if (showDateWithTime.value) {
            data.map((application) => application.createdAt = parseDateWithTime(application.createdAt))
        } else {
            data.map((application) => application.createdAt = parseDate(application.createdAt.substr(0, 10)))
        }

        applications.value = data
    }

    async function addApplication() {
        try {
            const { data } = await instanceNest.post("applications", newApplication)

            applications.value.push(data)
            newApplication.wish = ""
            newApplication.user_id = null

        } catch (error) {
            
        }
    }

    async function checkApplication(id:number) {
        try {
            const foundApplication = applications.value.find(application => application.id === id)

            if (!foundApplication) return

            socket.emit("checkApplication", id)

            applications.value = applications.value.map(application => {
                if(application.id !== id) return application

                return {...application, checked: !application.checked}
            })

        } catch (error) {
            
        }
    }

    function parseDate(date:string): string {
        const year = date.substr(0, 4)
        const month = date.substr(5, 2)
        const day = date.substr(8, 2)

        return `${day}.${month}.${year}`
    }

    function parseDateWithTime(date:string): string {
        return date.substr(11, 8) + " " + parseDate(date.substr(0, 10))
    }

    return {
        applications,
        newApplication,
        getAllApplicationsBool,
        showDateWithTime,
        getApplications,
        checkApplication,
        addApplication
    }
})