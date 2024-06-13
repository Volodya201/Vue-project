<template>
    <div class="all" :title="title">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="17.5" r="16" stroke="black" stroke-width="3"/>
            <path d="M6.36492 23H2.95583L6.79674 11.3636H11.1149L14.9558 23H11.5467L9.00128 14.5682H8.91037L6.36492 23ZM5.72855 18.4091H12.1376V20.7727H5.72855V18.4091ZM15.2766 23V11.3636H18.4357V20.4545H23.1402V23H15.2766ZM23.6172 23V11.3636H26.7763V20.4545H31.4808V23H23.6172Z" fill="black"/>
        </svg>
    </div>
</template>

<script lang="ts" setup>
    interface IProps {
        title: string
    }

    const props = defineProps<IProps>()
</script>

<style scoped>
    .all {
        cursor: pointer;
        user-select: none;
        display: inline;
    }
</style>