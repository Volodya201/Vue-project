<template>
    <input class="input"  @input="($event:ChangeEvent<HTMLInputElement>) => onInput($event.target.value)" :value="modelValue" :placeholder="placeholder" />
</template>

<script setup lang="ts">
    import { vClear } from "@/shared/directives/index"

    const props = defineProps(["placeholder", "modelValue"])

    const emit = defineEmits(["update:modelValue"])

    function onInput(text:string) {
        emit("update:modelValue", text)
    }

    //v-clear="onInput('')"
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