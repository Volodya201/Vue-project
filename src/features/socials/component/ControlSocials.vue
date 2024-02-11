<template>
    <transition-group tag="div" class="socials-list" name="socials">
        <template v-for="(social, index) of socialsStore.socials" :key="social.id">
            <MainInput v-model="social.urlIcon" placeholder="URL картинки" :clear="false" />
            <MainInput v-model="social.link" placeholder="Ссылка" />

            <PrimaryButtonCircle v-if="index === 0" text="+" @click="socialsStore.addSocial()"/>
            <DangerButton v-else @click="socialsStore.deleteSocial(social.id)"/>
        </template>
        <PrimaryButton class="saveButton" key="1.5" text="Сохранить" @click="socialsStore.saveSocials()"/>
    </transition-group>

</template>

<script lang="ts" setup>
    import MainInput from "@/shared/ui/MainInput/MainInput.vue"
    import PrimaryButtonCircle from "@/shared/ui/PrimaryButtonCircle/PrimaryButtonCircle.vue"
    import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
    import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue"
    import { useSocialsStore } from "@/features/socials/store/socialStore"

    const socialsStore = useSocialsStore()

    await socialsStore.getSocials()
    
</script>



<style scoped>
    .socials-list {
        display: grid;
        grid-template-columns: 1fr 1fr auto;
        gap: 17px;
    }

    .saveButton {
        grid-column: 1/3;
    }

    .socials-enter-active,
    .socials-leave-active,
    .socials-move {
        transition: 0.3s linear;
    }

    .socials-leave-active {
        position: absolute;
    }

    .socials-enter-from,
    .socials-leave-to {
        opacity: 0;
        translate: 100px 0;
    }

    .socials-enter-to,
    .socials-leave-from {
        opacity: 1;
        translate: 0 0;
    }
</style>