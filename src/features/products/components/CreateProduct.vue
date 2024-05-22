<template>
    <form @submit.prevent="onSubmit" class="create-product">
        <div class="add-image">
            <TogglePopup v-slot="addImageProps">
                <AddProductImage :openPopup="addImageProps.onClick" />
            </TogglePopup>
        </div>
        <div class="base-data">
            <mainInput v-model="productsStore.newProduct.title" placeholder="Название" :clear="true" class="base-data__name" />
            <mainInput v-model="productsStore.newProduct.price_original" placeholder="Цена" :clear="true" class="base-data__price" />
            <mainInput v-model="productsStore.newProduct.discount" placeholder="Скидка" :clear="true" class="base-data__discount" />
            <mainSelect v-model="productsStore.newProduct.category_id" :options="categoriesStore.categories" :defaultTitle="'Выберите категорию'" class="base-data__category" />
            <mainInput v-model="productsStore.newProduct.category_id" placeholder="Лейбл" :clear="true" class="base-data__label" />
        </div>
        <div class="details-data">
            <mainInput v-model="productsStore.newProduct.consist" placeholder="Состав" :clear="true" class="details-data__consist" />
            <mainTextarea v-model="productsStore.newProduct.description" placeholder="Описание" :clear="true" class="details-data__description" cols="5" />
            <div class="buttons">
                <DangerButtonText class="delete-button" text="Удалить" />
                <PrimaryButton type="submit" class="save-button" text="Добавить товар" />
            </div>
        </div>
        
    </form>
</template>

<script setup lang="ts">
    import mainInput from "@/shared/ui/MainInput/MainInput.vue"
    import mainSelect from "@/shared/ui/MainSelect/MainSelect.vue"
    import mainTextarea from "@/shared/ui/MainTextarea/MainTextarea.vue"
    import MainAddImage from "@/shared/ui/MainAddImage/MainAddImage.vue"
    import { useCategoriesStore } from "@/features/categories/store/categoriesStore"
    import { useProductsStore } from "@/features/products/store/productsStore"
    import AddProductImage from "@/features/products/components/AddProductImage.vue"
    import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
    import DangerButtonText from "@/shared/ui/DangerButtonText/DangerButtonText.vue"
    import TogglePopup from "@/features/popup/components/TogglePopup.vue"
    
    const categoriesStore = useCategoriesStore()
    categoriesStore.getCategories()

    const productsStore = useProductsStore()

    function onSubmit() {
        productsStore.addProduct()
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