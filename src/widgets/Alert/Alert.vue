<template>
    <div :class="'alert ' + props.type">
        <div class="alert-image">
            <img src="@/assets/successful.png" v-if="props.type === 'successful'">
            <img src="@/assets/error.png" v-else-if="props.type === 'error'">
            <img src="@/assets/warning.png" v-else-if="props.type === 'warning'">
            <img src="@/assets/information.png" v-else-if="props.type === 'information'">
        </div>
        <div class="alert-data">
            <h1 class="alert-header">{{ header }}</h1>
            <p class="alert-message">{{ message }}</p>
        </div>
        
        <div class="close-alert">
            <DeleteAlert :alert='{type: "error", header: "", message: "", createdAt: 468468468}'>
                <template>
                    <DangerButton />
                </template>
            </DeleteAlert>
        </div>
    </div>
</template>

<script setup lang="ts">
    import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue"
    import DeleteAlert from "@/features/alerts/component/DeleteAlert.vue"

    interface IProps {
        type: string,
        header: string,
        message: string
    }

    const props = defineProps<IProps>()
</script>

<style scoped lang="scss">
    .alert {
        width: 360px;
        height: auto;
        padding: 0;
        background-color: #f5f5f5;
        color: black;
        border-radius: 15px;
        position: relative;
        
        display: flex;
        align-items: center;
        

        &.successful {
            border: 3px solid #009c00;
        }
        &.error {
            border: 3px solid #ef0000;
        }
        &.warning {
            border: 3px solid #ffce00;
        }
        &.information {
            border: 3px solid #00a2fa;
        }

        &-image {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 25%;

            & img {
                max-width: 60%;
            max-height: 60%;
            }
        }

        &-data {
            padding: 10px 0;
            max-width: 65%;
            height: 100%;
        }

        &-header {
            margin: 0;
            font-size: 20px;
        }

        &-message {
            margin: 5px 0 0 0;
            font-size: 15px;
        }
    }

    .close-alert {
        position: absolute;
        scale: 0.7;
        top: 2px;
        right: 2px;
    }
</style>