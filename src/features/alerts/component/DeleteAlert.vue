<template>
    <slot />
</template>

<script lang="ts" setup>
    import { useAlertsStore } from "@/features/alerts/store/alertsStore"
    import { IAlert } from "@/features/alerts/store/types"

    const alertsStore = useAlertsStore()

    interface IProps {
        alert:IAlert
    }

    const props = defineProps<IProps>()

    function deleteAlert() {
        alertsStore.deleteAlert(props.alert)
    }
</script>