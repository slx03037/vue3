<template>
   <paramEmChild @update="update" @username="username" @age="age"></paramEmChild>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import paramEmChild from './ParamEmChild.vue';
const data = ref<string>("");

const username = (value: string) => {
    console.log(value);
    data.value = value
}

const age = (value: number) => {
    console.log(value);
    data.value = value.toString()
}

const update = (value: string) => {
    console.log(value);
    data.value=value
}


</script>