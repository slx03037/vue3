<template>
    <h1>父组件</h1>
    <m1Child v-model="msg"></m1Child>
    <div>输入的内容:{{ msg }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import m1Child from './M1Child.vue'

const msg = ref('')

</script>

