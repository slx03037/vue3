<template>
    <ChildProps :name="name" :msg="msg" :list="list" />
</template>


<script setup lang="ts">
import { ref } from 'vue'
import ChildProps from './ChildProps.vue'

//const msg = ref('Hello, Props!')
//const name = ref('Vue.js')
const list = ref<string[]>(['Item 1', 'Item 2', 'Item 3'])

const msg = ref()
const name = ref()
</script>

