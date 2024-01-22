<template>
    <textarea 
        class="textarea" 
        @input="($event:ChangeEvent<HTMLInputElement>) => onInput($event.target.value)" 
        :value="modelValue" 
        :placeholder="placeholder" 
        wrap="soft" 
        rows="1" 
        id="textarea"
    ></textarea>
</template>

<script setup lang="ts">
    const props = defineProps(["placeholder", "modelValue"])

    const emit = defineEmits(["update:modelValue"])

    function onInput(text:string) {
        emit("update:modelValue", text)
    }



</script>

<style scoped>
    .textarea {
        background-color: #ffffff;
        color: #030319;
        border: 1px solid #04041A;
        border-radius: 31px;
        padding: 10px 15px;
        font-size: 20px;
        font-weight: 700;      
    }
</style>