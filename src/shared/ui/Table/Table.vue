<template>
    <table class="table" v-if="condition">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" v-for="column of columns" :key="column">{{ column }}</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <slot 
                v-for="(item, index) of rows" 
                :key="item.id" 
                :item="item"
                :index="index"
            />
        </tbody>
    </table>

    <p v-else>{{ message }}</p>
</template>


<script lang="ts" setup>

    interface IProps {
        condition: boolean,
        columns: string[],
        message: string,
        rows: any[]
    }

    const props = defineProps<IProps>()
</script>