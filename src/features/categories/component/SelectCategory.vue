<template>
    <EditButton @click.native="onClick" />
</template>

<script setup lang="ts">
    import { useCategoriesStore } from '../store/categoriesStore'
    import { ICategory } from '../store/types'
    import EditButton from "@/shared/ui/EditButton/EditButton.vue"

    interface IProps {
        category: ICategory,
        openPopup: () => void
    }

    const props = defineProps<IProps>()

    const categoriesStore = useCategoriesStore()

    function onClick() {
        categoriesStore.selectCategory(props.category)
        props.openPopup()
    }
</script>

<style scoped>

</style>