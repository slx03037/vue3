<template>
   <!---文本插值：使用双大括号 {{ }} 绑定文本。-->
  <p>{{ message }}</p>
  <p>{{ number + 1 }}</p>
  <p>{{ isOk ? 'YES' : 'NO' }}</p>
  <p>{{ message.split('').reverse().join('') }}</p>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    const message = ref<string>('Hello World');
    const number = ref<number>(10);
    const isOk = ref<boolean>(true);
</script>