<template>
    <em1Child @update="handlerUpdate"/>
    <em1Child @delete="handlerDelete"/>
</template>

<script setup lang="ts">
import em1Child from './Em1Child.vue'

function handlerUpdate(value: number) {
    console.log(value)
}

function handlerDelete(value: number) {
    console.log(value)
}

</script>