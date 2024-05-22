<template>
    <form @submit.prevent="onSubmit" class="create-product">
        <div class="add-image">
            <mainAddImage />
        </div>
        <div class="base-data">
            <mainInput v-model="productsStore.updatingProduct.title" placeholder="Название" :clear="true" class="base-data__name" />
            <mainInput v-model="productsStore.updatingProduct.price_original" placeholder="Цена" :clear="true" class="base-data__price" />
            <mainInput v-model="productsStore.updatingProduct.discount" placeholder="Скидка" :clear="true" class="base-data__discount" />
            <mainSelect v-model="productsStore.updatingProduct.category_id" :options="categoriesStore.categories" :defaultTitle="'Выберите категорию'" class="base-data__category" />
            <mainInput v-model="productsStore.updatingProduct.label_id" placeholder="Лейбл" :clear="true" class="base-data__label" />
        </div>
        <div class="details-data">
            <mainInput v-model="productsStore.updatingProduct.consist" placeholder="Состав" :clear="true" class="details-data__consist" />
            <mainTextarea v-model="productsStore.updatingProduct.description" placeholder="Описание" :clear="true" class="details-data__description" cols="5" />
            <div class="buttons">
                <DangerButtonText class="delete-button" text="Не сохранять" />
                <PrimaryButton type="submit" class="save-button" text="Сохранить" />
            </div>
        </div>
        
    </form>
</template>

<script setup lang="ts">
    import mainInput from "@/shared/ui/MainInput/MainInput.vue"
    import mainSelect from "@/shared/ui/MainSelect/MainSelect.vue"
    import mainTextarea from "@/shared/ui/MainTextarea/MainTextarea.vue"
    import mainAddImage from "@/shared/ui/MainAddImage/MainAddImage.vue"
    import { useCategoriesStore } from "@/features/categories/store/categoriesStore"
    import { useProductsStore } from "@/features/products/store/productsStore"
    import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
    import DangerButtonText from "@/shared/ui/DangerButtonText/DangerButtonText.vue"
    
    const categoriesStore = useCategoriesStore()
    categoriesStore.getCategories()

    const productsStore = useProductsStore()

    function onSubmit() {
        productsStore.updateProduct()
    }
</script>

<style scoped lang="scss">
    .create-product {
        display: grid;
        grid-template-columns: 1fr 1.8fr;
        grid-template-areas: "addImage baseData" "detailsData detailsData";
        gap: 30px;
        overflow: visible;
    }

    .add-image {
        grid-area: addImage;
    }

    .base-data {
        grid-area: baseData;
        display: grid;
        gap: 20px;
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
        gap: 20px;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 25px;
    }

    .save-button {
        flex-grow: 5;
    }

    .delete-button {
        flex-grow: 1.7;
    }
</style>