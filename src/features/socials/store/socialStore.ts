import { defineStore } from "pinia"
import { ref } from "vue"
import { instance } from "@/shared/axios/index"
import { ISocial, IDBSocial } from "@/features/socials/store/types"
 
export const useSocialsStore = defineStore("socials", () => {
    const socials = ref<ISocial[]>([
        {id: -1, urlIcon: "", link: ""}
    ])

    async function getSocials() {
        const { data } = await instance.get("socials")

        let gotSocials:ISocial[] = data.map((social:IDBSocial, index:number) => {
            social.id = index
            return social
        })

        socials.value = [socials.value[0], ...gotSocials]
    }

    function addSocial() {
        const social:ISocial = {id: Date.now(), urlIcon: socials.value[0].urlIcon, link: socials.value[0].link}

        socials.value.push(social)

        socials.value[0].urlIcon = ""
        socials.value[0].link = ""
    }


    function deleteSocial(socialId:number) {
        socials.value = socials.value.filter(social => social.id !== socialId)
    }

    async function saveSocials() {
        
        let savingSocials = [...socials.value].map((social:IDBSocial) => {
            delete social.id
            return social
        })

        savingSocials.shift()

        const { data } = await instance.post("socials", {socials: savingSocials})
    }

    return {
        socials,
        getSocials,
        addSocial,
        deleteSocial,
        saveSocials
    }
})