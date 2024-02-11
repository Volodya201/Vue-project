<template>
    <form @submit.prevent="onSubmit" class="create-category">
        <mainInput v-model="categoriesStore.newCategory.title" placeholder="Введите название категории..." :clear="true" />
        <mainInput v-model="categoriesStore.newCategory.urlImage" placeholder="Введите url картинки..." :clear="true" />
        <primaryButton text="Создать" />
    </form>
    
</template>

<script setup lang="ts">
    import { useCategoriesStore } from "@/features/categories/store/categoriesStore"
    import mainInput from "@/shared/ui/MainInput/MainInput.vue"
    import primaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"

    const categoriesStore = useCategoriesStore()
   

    function onSubmit() {
        categoriesStore.addCategory()
    }
</script>

<style scoped>
    .create-category {
        display: grid;
        grid-template-columns: 1fr 1fr auto;
        grid-gap: 15px;
    }
</style>