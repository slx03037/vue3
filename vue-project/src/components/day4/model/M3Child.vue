<template>
    <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p>子组件内容:{{ modelValue }}</p>
</template>

<script setup lang="ts">


const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

</script>