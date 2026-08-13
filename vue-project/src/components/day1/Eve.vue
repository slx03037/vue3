<template>
    <button v-on:click="handleClick">点击</button>
  <button @click="count++">{{ count }}</button>
  <!-- 事件修饰符 -->
  <form @submit.prevent="onSubmit">123</form>
  <input @keyup.enter="submit" />
</template>


<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
const handleClick = () => {
  console.log('点击了')
}

const onSubmit = () => {
  console.log('提交了')
}

const submit = () => {
  console.log('回车提交了')
  onSubmit();
}
</script>

<style scoped>
</style
