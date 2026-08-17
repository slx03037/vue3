<template>
    <comChild v-bind="userC"/>
</template>

<script setup lang="ts">
import comChild from './ComChild.vue'

interface UserC{
    name: string,
    age: number
    gender: string
}

const userC: UserC = {
    name: '홍길동',
    age: 20,
    gender: '남자'
}




</script>