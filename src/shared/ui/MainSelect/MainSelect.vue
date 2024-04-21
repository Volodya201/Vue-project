<template>
    <!-- <select class="select">
        <option
            v-for="option
            in options"
            :key="option.id"
            :value="option.id"
        >{{ option.title }}</option>
    </select> -->

    <div :class="['select', {'is-active': isActive}]" id="select" @click="closeSelect">
        <div class="select__header">
            <span class="select__current">{{ selectedOption }}</span>
            <span class="select__icon"></span>
        </div>
        <div class="select__body">
            <div class="select__item" v-for="(option) in options" :key="option.id" @click="onClick(option)">{{ option.title }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from "vue"

    interface IOption {
        id: number,
        title: string
    }

    interface IProps {
        options: IOption[]
    }

    const props = defineProps<IProps>()

    const emit = defineEmits(["update:modelValue"])

    let selectedOption = ref("")
    
    onMounted(() => {
        selectedOption.value = props.options[0]
        emit("update:modelValue", props.options[0])
    })

    let isActive = ref<boolean>(false)

    function closeSelect() {
        isActive.value = !isActive.value
    }

    function onClick(option:IOption) {
        isActive.value = !isActive.value

        console.log(option)

        selectedOption.value = option.title
        emit("update:modelValue", option.id)
    }
</script>

<style lang="scss">
    .select {
        position: relative;
        overflow: visible;
        background-color: #ffffff;
        color: #030319;
        font-family: var(--bs-body-font-family);

        &__header {
            border: 1px solid #04041A;
            border-radius: 31px;
            padding: 10px 15px;
            font-size: 20px;
            cursor: pointer;
            transition: border-top-left-radius 0.3s linear, border-top-right-radius 0.3s linear;
            user-select: none;
        }
        

        &__current {
            
        }

        &__icon {
            float: right;
            position: relative;
            width: 30px;
            height: 35px;
            scale: 0.75;
            transition: rotate 0.3s linear;
        }

        &__icon::before,
        &__icon::after {
            content: "";
            display: inline-block;
            width: 20px;
            height: 4px;
            background-color: #030319;
            border-radius: 2px;
            position: absolute;
            top: 50%;
            transition: rotate 0.3s linear;
        }

        &__icon::before {
            rotate: 45deg;
            right: 37%;
        }

        &__icon::after {
            rotate: -45deg;
            left: 37%;
        }

        &__body {
            position: absolute;
            left: 0;
            right: 0;
            border: 1px solid #04041A;
            border-top: 0;
            display: none;
            background-color: #ffffff;
        }

        &__item {
            font-size: 20px;
            font-weight: normal;
            line-height: 24px;
            padding: 8px;
            transition: all 0.3s linear;
        }

        &__item:hover {
            background-color: #cfcfcf;
        }

        &.is-active &__header {
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        // &.is-active &__icon::before {
        //     rotate: -45deg;
        // }
        // &.is-active &__icon::after {
        //     rotate: 45deg;
        // }

        &.is-active &__icon {
            rotate: 180deg;
        }

        &.is-active &__body {
            display: block;
            border-radius: 15px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }
</style>