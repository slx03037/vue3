<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p>子组件值:{{ modelValues }}</p>
    <button @click="sendMsg">Clear</button>
</template>


<script setup lang="ts">

import { ref ,watch} from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const modelValues=ref('');

watch(()=>props.modelValue, (newVal)=>{
    modelValues.value=newVal;
})

function sendMsg() {
    console.log('sendMsg',modelValues.value);
}

defineExpose({
    modelValues,
    sendMsg
});

</script>
