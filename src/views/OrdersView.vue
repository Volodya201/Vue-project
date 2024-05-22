<template>
    <h1>Заказы <router-link class="create" to="/create-order">+</router-link></h1>

    <br>

    <!-- <CreateAdvantage /> -->

    <!-- <ErrorsList :errors="advantagesStore.errors" /> -->

    <OrderTable />

    <!-- <transition>
        <Popup :image="advantagesStore.updatingAdvantage.urlImage">
            <EditAdvantage />
        </Popup>
    </transition>  -->
</template>


<script setup lang="ts">
    import OrderTable from "@/widgets/OrderTable/OrderTable.vue"
    import { useOrdersStore } from "@/features/orders/store/ordersStore"
    import ErrorsList from "@/entities/ErrorsList/ErrorsList.vue"
    import Popup from "@/widgets/Popup/Popup.vue"

    const ordersStore = useOrdersStore()

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
    .create {
        text-decoration: none;
        font-weight: 700;
        color: #030319;
    }
</style>