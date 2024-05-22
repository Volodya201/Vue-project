<template>
    <div class="create-order-view">
        <h1>Создать заказ</h1>

        <br>
        
        <form @submit.prevent="onSubmit">
            <MainInput v-model="ordersStore.newOrder.user_id" placeholder="User id" :clear="true" />

            <p>Сумма заказа: {{ ordersStore.newOrder.total_sum }}</p>

            <DangerButtonText class="delete-button" text="Удалить" />
            <PrimaryButton type="submit" class="save-button" text="Добавить заказ" />
        </form>

        <br>

        <div>
            <AddOrderItems />
        </div>
    </div>
</template>

<script setup lang="ts">
    import AddOrderItems from '@/features/orders/component/AddOrderItems.vue'
    import { useOrdersStore } from '@/features/orders/store/ordersStore'
    import MainInput from "@/shared/ui/MainInput/MainInput.vue"
    import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
    import DangerButtonText from "@/shared/ui/DangerButtonText/DangerButtonText.vue"

    const ordersStore = useOrdersStore()
    
    function onSubmit() {
        ordersStore.addOrder()
    }
</script>

<style scoped>
    .create-order-view {
        overflow: visible;
    }
</style>