<template>
    <Table 
        :condition="applicationsStore.applications.length > 0"
        message="Нет заявок"
        :roleCondition="true"
        roleMessage="Недостаточно прав"
        :columns="['Имя', 'Имейл', 'Желание', 'Создано в']"
        :rows="applicationsStore.applications"
    >
        <template v-slot="applicationsProps: {index:number, item:IApplication}">
            <tr>
                <th scope="row">{{ applicationsProps.index + 1 }}</th>
                <td>{{ applicationsProps.item.user.username }}</td>
                <td>{{ applicationsProps.item.user.email }}</td>
                <td>{{ applicationsProps.item.wish }}</td>
                <td>{{ applicationsProps.item.createdAt }}</td>

                <td v-if="!applicationsProps.item.checked" class="table-buttons">
                    <CheckApplication v-slot="checkProps" :applicationId="applicationsProps.item.id">
                        <CheckedButton @click="checkProps.onClick()" />
                    </CheckApplication>
                </td>

                <td v-else class="table-buttons">
                    <CheckApplication v-slot="checkProps" :applicationId="applicationsProps.item.id">
                        <UncheckedButton @click="checkProps.onClick()" />
                    </CheckApplication>
                </td>
            </tr>
        </template>
    </Table>
</template>

<script setup lang="ts">
    import { useApplicationsStore } from "@/features/applications/store/applicationsStore"
    import CheckedButton from "@/shared/ui/CheckedButton/CheckedButton.vue"
    import UncheckedButton from "@/shared/ui/UncheckedButton/UncheckedButton.vue"
    import CheckApplication from "@/features/applications/component/CheckApplication.vue"
    import Table from "@/shared/ui/Table/Table.vue"
    import { IApplication } from "@/features/applications/store/types"

    const applicationsStore = useApplicationsStore()


    await applicationsStore.getApplications()
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