<template>
    <div class="addImage">
        <div v-if="!url" class="plus">+</div>
        <div v-else class="image">
            <img :src="url">
        </div>
    </div>
</template>

<script lang="ts" setup>
    interface IProps {
        url: string
    }

    const props = defineProps<IProps>()
</script>

<style scoped>
    .addImage {
        width: 100%;
        height: 200px;
        border: 1px solid #04041A;
        border-radius: 31px;
    }

    .plus {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 128px;
        font-family: "PorterSansBlock";
        user-select: none;
    }

    .image {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 100%;
    }

    .image img {
        max-width: 50%;
        max-height: 50%;
    }
</style>