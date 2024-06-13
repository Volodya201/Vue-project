<template>
    <Table 
        :condition="categoriesStore.categories.length > 0"
        :roleCondition="categoriesStore.enoughAccess"
        message="Нет категорий"
        roleMessage="Недостаточно прав"
        :columns="['Категория']"
        :rows="categoriesStore.categories">
        <template v-slot="categoriesProps: {index:number, item:ICategory}">
            <tr>
                <th scope="row">{{ categoriesProps.index + 1 }}</th>
                <td>{{ categoriesProps.item.title }}</td>
                <td class="table-buttons">
                    <TogglePopup v-slot="childrenProps">
                        <SelectCategory :category="categoriesProps.item" :openPopup="childrenProps.onClick" />
                    </TogglePopup>

                    <DeleteCategory :categoryId="categoriesProps.item.id">
                        <template v-slot="deleteProps">
                            <DangerButton @click="deleteProps.onClick()" />
                        </template>
                    </DeleteCategory>
                </td>
            </tr>
        </template>
    </Table>
</template>

<script setup lang="ts">
    import { useCategoriesStore } from "@/features/categories/store/categoriesStore"
    import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue"
    import TogglePopup from "@/features/popup/components/TogglePopup.vue"
    import SelectCategory from "@/features/categories/component/SelectCategory.vue"
    import DeleteCategory from "@/features/categories/component/DeleteCategory.vue"
    import Table from "@/shared/ui/Table/Table.vue"
    import { onMounted } from "vue"
    import { ICategory } from "@/features/categories/store/types"

    const categoriesStore = useCategoriesStore()


    await categoriesStore.getCategories()
</script>

<style scoped>
    .table-buttons {
        display: flex;
        justify-content: end;
        gap: 20px
    }
</style>