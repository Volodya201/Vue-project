<template>
    <transition-group tag="div" class="phones-list" name="phones">
        <template v-for="(phone, index) of phonesStore.phones" :key="phone.id">
            <MainInput v-model="phone.text" /> <!-- mask="+7(###)-###-##-##" -->

            <PrimaryButtonCircle v-if="index === 0" text="+" @click="phonesStore.addPhone()"/>
            <DangerButton v-else @click="phonesStore.deletePhone(phone.id)"/>
        </template>
        <PrimaryButton text="Сохранить"/>
    </transition-group>  

</template>

<script lang="ts" setup>
    import MainInput from "@/shared/ui/MainInput/MainInput.vue"
    import PrimaryButtonCircle from "@/shared/ui/PrimaryButtonCircle/PrimaryButtonCircle.vue"
    import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
    import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue"
    import { usePhonesStore } from "@/features/phones/store/phonesStore"
    import { MaskInput } from 'vue-3-mask'

    const phonesStore = usePhonesStore()
</script>



<style scoped>
    .phones-list {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 17px;
    }

    .phones-enter-active,
    .phones-leave-active,
    .phones-move {
        transition: 1s linear;
    }

    .phones-leave-active {
        position: absolute;
    }

    .phones-enter-from,
    .phones-leave-to {
        opacity: 0;
        translate: 100px 0;
    }

    .phones-enter-to,
    .phones-leave-from {
        opacity: 1;
        translate: 0 0;
    }
</style>