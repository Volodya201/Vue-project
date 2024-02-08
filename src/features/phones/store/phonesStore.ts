import { defineStore } from "pinia"
import { ref } from "vue"
 
export const usePhonesStore = defineStore("phones", () => {
    const phones = ref([
        {id: Date.now(), text: ""}
    ])

    function addPhone() {
        const phone = {id: Date.now(), text: phones.value[0].text}

        phones.value.push(phone)

        phones.value[0].text = ""
    }


    function deletePhone(phoneId:number) {
        phones.value = phones.value.filter(phone => phone.id !== phoneId)
    }

    return {
        phones,
        addPhone,
        deletePhone
    }
})