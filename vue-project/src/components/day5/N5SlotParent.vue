<template>

    <n5SlotChild>
        <template v-slot:[slotName1]></template>
        <template #[slotName2]></template>
        <template v-slot:footer></template>
    </n5SlotChild>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import n5SlotChild from './N5SlotChild.vue'

const slotName1 = ref('header')
const slotName2 = ref('default')
</script>