<template>
    <slot :onClick="checkApplication" />
</template>

<script lang="ts" setup>
    import { useApplicationsStore } from "@/features/applications/store/applicationsStore"

    const applicationsStore = useApplicationsStore()

    interface IProps {
        applicationId: number
    }

    const props = defineProps<IProps>()

    function checkApplication() {
        applicationsStore.checkApplication(props.applicationId)
    }
</script>