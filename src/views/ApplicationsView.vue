<template>
    <div class="applications-view">
        <h1 class="header">
            <span>Заявки</span>
            <allIcon @click="changeGetApplicationsRequest" title="Все заявки" />
            <clockIcon @click="changeDateShowing" title="Подробное время" />
        </h1> 
        
        <br>

        <CreateApplication/>

        <br>
        <!-- <router-link class="create" to="/create-order">+</router-link> --> 

        <ApplicationsTable />
    </div>
</template>


<script lang="ts" setup>
    import { useApplicationsStore } from "@/features/applications/store/applicationsStore"
    import ApplicationsTable from "@/widgets/ApplicationTable/ApplicationTable.vue"
    import allIcon from "@/shared/icons/allIcon.vue"
    import clockIcon from "@/shared/icons/clockIcon.vue"
    import CreateApplication from "@/features/applications/component/CreateApplication.vue"
    
    const applicationsStore = useApplicationsStore()

    function changeGetApplicationsRequest() {   
        applicationsStore.getAllApplicationsBool = !applicationsStore.getAllApplicationsBool
        applicationsStore.getApplications()
    }

    function changeDateShowing() {
        applicationsStore.showDateWithTime = !applicationsStore.showDateWithTime
        applicationsStore.getApplications()
    }
</script>

<style scoped>
    .applications-view {
        overflow: auto;
    }   

    .header {
        display: inline-flex;
        gap: 10px;
    }
</style>