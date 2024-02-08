<template>
    <!-- <td v-if="!isEditing" @dblclick="toggleTextarea"> {{ description }}</td>
    <textarea 
        v-else 
        @blur="onBlur" 
        class="form-control" 
        :value="modelValue"
        @input="($event) => onInput($event)"
    ></textarea> -->


    <td>
        <div v-if="!isEditing" @dblclick="toggleTextarea">{{ description }}</div>
        <textarea 
            v-else 
            v-focus 
            @blur="onBlur" 
            class="form-control" 
            :value="modelValue"
            @input="($event) => onInput($event)">
        </textarea>
    </td>
</template>

<script lang="ts" setup>
    // import MainTextarea from "@/shared/ui/MainTextarea/MainTextarea.vue"
    import { useAdvantagesStore } from "@/features/advantages/store/advantagesStore"
    import { vFocus } from "@/shared/directives/index"
    import { ref } from "vue"

    const isEditing = ref(false)

    interface IProps {
        id: number,
        description: string,
        modelValue: string,
    }

    const props = defineProps<IProps>()

    const emit = defineEmits(["update:modelValue"])

    const advantagesStore = useAdvantagesStore()

    function toggleTextarea() {
        isEditing.value = !isEditing.value
    }

    function onBlur() {
        advantagesStore.editDescription(props.id)
        toggleTextarea()
    }

    function onInput(event: Event) {
        const text = (event.target as HTMLInputElement).value;
        emit('update:modelValue', text)
    }


</script>