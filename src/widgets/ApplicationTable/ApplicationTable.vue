<template>
    <Loading>
        <GetApplications />
    </Loading>
</template>

<script lang="ts" setup>
    import Loading from "@/widgets/Loading/Loading.vue"
    import { defineAsyncComponent } from "vue"

    const GetApplications = defineAsyncComponent(() => import("@/features/applications/component/GetApplications.vue"))
</script>