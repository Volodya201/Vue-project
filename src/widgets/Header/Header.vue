<template>
    <header class="header">
        <div class="container container-flex">
            <router-link to="/" >
                <img src="@/assets/logo.svg">
            </router-link>

            <SecondaryButton text="Выйти" />
        </div>
    </header>
</template>


<script setup lang="ts">
    import SecondaryButton from "@/shared/ui/SecondaryButton/SecondaryButton.vue"
</script>


<style scoped>
    .header {
        background: linear-gradient(90deg, #04041A, #15164D);
        padding: 0 20px;
        height: 80px;
        grid-area: header;
    }

    .container-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>