<template>
    <uChild v-bind="userA"/>
</template>

<script setup lang="ts">
import uChild from './UChild.vue'

interface UserA{
    name: string,
    age: number
    gender: string
}

const userA: UserA = {
    name: '홍길동',
    age: 20,
    gender: '남자'
}




</script>