<template>
    <div>
        <h1>Контакты</h1>
        <div class="chapters">
            <div class="contacts">
                <Phones />
            </div>
            <div class="solials">
                <Socials />
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
    import Phones from "@/widgets/Phones/Phones.vue"
    import Socials from "@/widgets/Socials/Socials.vue"
</script>

<style scoped>
    .chapters {
        width: 100%;
        margin: 50px 0 0 0;

        display: grid;
        grid-template-columns: 1.25fr 2fr;
        gap: 100px;
    }
</style>