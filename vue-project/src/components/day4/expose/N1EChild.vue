<template>
  <div>
    <h1>子组件</h1>
    <p>{{count}}</p>
    <button @click="increment">+1</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script setup lang="ts">
  import { ref  } from 'vue';

  const count=ref(0);

  function increment(){
      count.value++;
  }
  function reset(){
      count.value=0;
  }
  //暴露给父组件的方法
  defineExpose({
      count,
      increment,
      reset
  })
</script>