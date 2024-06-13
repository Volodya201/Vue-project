<template>
    <table class="table" v-if="resultCondition">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" v-for="column of columns" :key="column" v-html="column"></th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <slot class="rows" 
                v-for="(item, index) of rows" 
                :key="item.id" 
                :item="item"
                :index="index"
            />
        </tbody>
    </table>

    <p v-else>{{ !roleCondition ? roleMessage : message }}</p>
</template>


<script lang="ts" setup>
import { computed } from 'vue';


    interface IProps {
        condition: boolean,
        columns: string[],
        message: string,
        roleCondition?: boolean,
        roleMessage?: string,
        rows: any[]
    }

    const props = defineProps<IProps>()

    let resultCondition = computed(() => props.condition && props.roleCondition)

    console.log("condition: ", props.condition)
    console.log("roleCondition: ", props.roleCondition)
    console.log("resultCondition: ", resultCondition.value)
</script>

<style scoped>
    .table {
        table-layout: fixed;
        max-height: 100%;
    }
    
    tbody {
        overflow-y: auto !important;
    }

    .rows {
        display: flex;
    }
</style>