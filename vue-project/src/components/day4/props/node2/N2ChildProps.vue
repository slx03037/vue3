<template>
    <div>
        <h1>父传子 Child Component</h1>
        <p>이름 : {{ name }}</p>
        <p>나이 : {{ age }}</p>
        <p>성별 : {{ gender }}</p>
        <p>취미 : {{ hobby }}</p>
    </div>
</template>

<script setup lang="ts">
  interface User{
    name: string,
    age: number,
    gender: string,
    hobby: string
  }
  const props=defineProps<User>()


</script>