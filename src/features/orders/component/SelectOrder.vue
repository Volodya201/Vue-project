<template>
    <EditButton @click.native="onClick" />
</template>

<script setup lang="ts">
    import { useAdvantagesStore } from "@/features/advantages/store/advantagesStore"
    import { IAdvantage } from '@/features/advantages/store/types'
    import EditButton from "@/shared/ui/EditButton/EditButton.vue"

    interface IProps {
        advantage: IAdvantage,
        openPopup: () => void
    }

    const props = defineProps<IProps>()

    const advantagesStore = useAdvantagesStore()

    function onClick() {
        advantagesStore.selectAdvantage(props.advantage)
        props.openPopup()
    }
</script>

<style scoped>

</style>