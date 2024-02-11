import { defineStore } from "pinia"
import { ref } from "vue"
import { instance } from "@/shared/axios/index"
import { IPhone, IDBPhone } from "@/features/phones/store/types"
 
export const usePhonesStore = defineStore("phones", () => {
    const phones = ref<IPhone[]>([
        {id: -1, phone: ""}
    ])




    async function getPhones() {
        const { data } = await instance.get("phones")

        let gotPhones:IPhone[] = data.map((phone:IDBPhone, index:number) => {
            phone.id = index
            return phone
        })

        phones.value = [phones.value[0], ...gotPhones]
    }

    function addPhone() {
        const phone:IPhone = {id: Date.now(), phone: phones.value[0].phone}

        phones.value.push(phone)

        phones.value[0].phone = ""
    }


    function deletePhone(phoneId:number) {
        phones.value = phones.value.filter(phone => phone.id !== phoneId)
    }

    async function savePhones() {        
        let savingPhones = [...phones.value].map((phone:IDBPhone) => {
            delete phone.id
            return phone
        })

        savingPhones.shift()

        const { data } = await instance.post("phones", {phones: savingPhones})
    }

    return {
        phones,
        getPhones,
        addPhone,
        deletePhone,
        savePhones
    }
})