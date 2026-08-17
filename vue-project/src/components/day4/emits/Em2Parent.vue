<template>
    <paramEmChild @myEvent="childEvent"/>
    <p>接收子组件数据:{{ childData }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import paramEmChild from './ParamEmChild.vue'

const emit = defineEmits(['childEvent'])

const childData = ref<string>('')

const childEvent = (data: string) => {
  childData.value = data
  emit('childEvent', childData.value)

}

</script>