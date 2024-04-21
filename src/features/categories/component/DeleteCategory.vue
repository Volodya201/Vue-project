<template>
    <div>
        <slot :onClick="deleteCategory" />
    </div>
</template>

<script lang="ts" setup>
    import { useCategoriesStore } from "@/features/categories/store/categoriesStore"

    const categoriesStore = useCategoriesStore()

    interface IProps {
        categoryId: number
    }

    const props = defineProps<IProps>()

    function deleteCategory() { 
        categoriesStore.deleteCategory(props.categoryId)
    }
</script>

<style scoped>

</style>