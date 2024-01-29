<template>
    <Table 
        :condition="advantagesStore.advantages.length > 0"
        message="Нет преимуществ"
        :columns="['Преимущество', 'Описание']"
        :rows="advantagesStore.advantages"
    >
        <template v-slot="advantagesProps: {index:number, item:IAdvantage}">
            <tr>
                <th scope="row">{{ advantagesProps.index + 1 }}</th>
                <td>{{ advantagesProps.item.title }}</td>
                <EditDescription :id="advantagesProps.item.id" v-model="advantagesProps.item.description" :description="advantagesProps.item.description" />
                <td class="table-buttons">
                    <DeleteAdvantage :categoryId="advantagesProps.item.id">
                        <template v-slot="deleteProps">
                            <DeleteButton @click="deleteProps.onClick()" />
                        </template>
                    </DeleteAdvantage>
                    
                    <TogglePopup v-slot="childrenProps">
                        <SelectAdvantage :advantage="advantagesProps.item" :openPopup="childrenProps.onClick" />
                    </TogglePopup>                   
                </td>
            </tr>
        </template>
    </Table>
</template>

<script setup lang="ts">
    import { useAdvantagesStore } from "@/features/advantages/store/advantagesStore"
    import DeleteButton from "@/shared/ui/DeleteButton/DeleteButton.vue"
    import TogglePopup from "@/features/popup/components/TogglePopup.vue"
    import SelectAdvantage from "@/features/advantages/component/SelectAdvantage.vue"
    import DeleteAdvantage from "@/features/advantages/component/DeleteAdvantage.vue"
    import EditDescription from "@/features/advantages/component/EditDescription.vue"
    import Table from "@/shared/ui/Table/Table.vue"
    import { IAdvantage } from "@/features/advantages/store/types"
    import { onMounted } from "vue"

    const advantagesStore = useAdvantagesStore()


    onMounted(() => {
        advantagesStore.getAdvantages()
    })
</script>

<style scoped>
    .table-buttons * {
        /* display: flex;
        justify-content: end;
        gap: 20px; */

        float: right;

        margin-left: 10px;
    }
</style>