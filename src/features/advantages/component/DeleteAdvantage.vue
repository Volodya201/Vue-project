<template>
    <div>
        <slot :onClick="deleteAdvantage" />
    </div>
</template>

<script lang="ts" setup>
    import { useAdvantagesStore } from "@/features/advantages/store/advantagesStore"

    const advantagesStore = useAdvantagesStore()

    interface IProps {
        categoryId: number
    }

    const props = defineProps<IProps>()

    function deleteAdvantage() {
        advantagesStore.deleteAdvantage(props.categoryId)
    }
</script>