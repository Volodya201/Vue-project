<template>
    <div>
        <slot :onClick="popupStore.openPopup" />
    </div>
</template>

<script lang="ts" setup>
    import { usePopupStore } from "@/features/popup/store/popupStore"

    const popupStore = usePopupStore()
</script>

<style scoped>

</style>