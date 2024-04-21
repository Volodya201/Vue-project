<template>
    <form @submit="onSubmit" class="create-product">
        <div class="add-image"></div>
        <div class="base-data">
            <mainInput v-model="q" placeholder="Название" :clear="true" class="base-data__name" />
            <mainInput v-model="w" placeholder="Цена" :clear="true" class="base-data__price" />
            <mainInput v-model="w" placeholder="Скидка" :clear="true" class="base-data__discount" />
            <mainSelect v-model="w" :options="categoriesStore.categories" class="base-data__category" />
            <mainInput v-model="w" placeholder="Лейбл" :clear="true" class="base-data__label" />
        </div>
        <div class="details-data">
            <mainInput v-model="w" placeholder="Состав" :clear="true" class="details-data__consist" />
            <mainTextarea v-model="w" placeholder="Описание" :clear="true" class="details-data__description" cols="5" />
        </div>
        
    </form>
</template>

<script setup lang="ts">
    import mainInput from "@/shared/ui/MainInput/MainInput.vue"
    import mainSelect from "@/shared/ui/MainSelect/MainSelect.vue"
    import mainTextarea from "@/shared/ui/MainTextarea/MainTextarea.vue"
    import primaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
    import { onMounted, ref } from "vue"
    import { useCategoriesStore } from "@/features/categories/store/categoriesStore"

    let q = ref("")
    let w = ref("")
    let e = ref("")
    
    const categoriesStore = useCategoriesStore()

    //onMounted(() => {
        categoriesStore.getCategories()
    //})

    function onSubmit() {
        
    }
</script>

<style scoped lang="scss">
    .create-product {
        display: grid;
        grid-template-columns: 1fr 1.8fr;
        grid-template-areas: "addImage baseData" "detailsData detailsData";
        grid-gap: 25px;
        overflow: visible;
    }

    .add-image {
        grid-area: addImage;
    }

    .base-data {
        grid-area: baseData;
        display: grid;
        gap: 15px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "name name" "price discount" "category label";
        overflow: visible;

        &__name {
            grid-area: name;
        }
        &__price {
            grid-area: price;
        }
        &__discount {
            grid-area: discount;
        }
        &__category {
            grid-area: category;
        }
        &__label {
            grid-area: label;
        }
    }



    .details-data {
        grid-area: detailsData;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        gap: 15px;
    }
</style>