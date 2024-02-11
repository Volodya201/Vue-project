<template>
    <input class="input" v-clear="() => clear"  @input="($event:ChangeEvent<HTMLInputElement>) => onInput($event.target.value)" :value="modelValue" :placeholder="placeholder" />
</template>

<script setup lang="ts">
    import { vClear } from "@/shared/directives/index"

    interface IProps {
        placeholder: string,
        modelValue: any,
        clear?: boolean
    }

    const props = defineProps<IProps>()

    const emit = defineEmits(["update:modelValue"])

    function clear() {
        if (props.clear) emit('update:modelValue', '')
    }

    function onInput(text:string) {
        emit("update:modelValue", text)
    }
</script>

<style scoped>
    .input {
        background-color: #ffffff;
        color: #030319;
        border: 1px solid #04041A;
        border-radius: 31px;
        padding: 10px 15px;
        font-size: 20px;
        font-weight: 700;        
    }
</style>