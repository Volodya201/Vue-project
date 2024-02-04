<template>
    <div class="addPhone">
        <MainInput />
        <PrimaryButtonCircle text="+" />
    </div>
</template>

<script lang="ts" setup>
    import MainInput from "@/shared/ui/MainInput/MainInput.vue"
    import PrimaryButtonCircle from "@/shared/ui/PrimaryButtonCircle/PrimaryButtonCircle.vue"
</script>



<style scoped>
    .addPhone {
        /* display: flex; */
    }
</style>