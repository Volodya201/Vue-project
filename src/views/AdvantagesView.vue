<template>
    <h1>Преимущества</h1>

    <br>

    <CreateAdvantage />

    <!-- errors -->

    <br>
    <br>

    <AdvantageTable />

    <transition>
        <Popup>
            <EditAdvantage />
        </Popup>
    </transition>  
</template>


<script setup lang="ts">
    import CreateAdvantage from "@/features/advantages/component/CreateAdvantage.vue"
    import AdvantageTable from "@/widgets/AdvantageTable/AdvantageTable.vue"
    import Popup from "@/widgets/Popup/Popup.vue"
    import EditAdvantage from "@/features/advantages/component/EditAdvantage.vue"
</script>

<style scoped>
    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
        opacity: 1;
        transform: scale(1);
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
        transform: scale(0.3);
    }
</style>