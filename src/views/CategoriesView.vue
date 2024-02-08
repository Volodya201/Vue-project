<template>
    <h1>Категории</h1>

    <br>

    <CreateCategory />

    <ErrorsList :errors="categoriesStore.errors" />

    <br>

    <CategoryTable />

    <transition>
        <Popup :image="categoriesStore.updatingCategory.urlImage">
            <EditCategory />
        </Popup>
    </transition>  
</template>

<script lang="ts" setup>
    import CategoryTable from "@/widgets/CategoryTable/CategoryTable.vue"
    import CreateCategory from "@/features/categories/component/CreateCategory.vue"
    import EditCategory from "@/features/categories/component/EditCategory.vue"
    import ErrorsList from "@/entities/ErrorsList/ErrorsList.vue"
    import Popup from "@/widgets/Popup/Popup.vue"
    import { useCategoriesStore } from "@/features/categories/store/categoriesStore"

    const categoriesStore = useCategoriesStore()




    import { usePopupStore } from "@/features/popup/store/popupStore"


    const popupStore = usePopupStore()
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