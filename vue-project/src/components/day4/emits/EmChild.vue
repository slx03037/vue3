<template>
    <button @click="handleClick">触发更新</button>
</template>

<script setup lang="ts">
  //运行时声明
  const emit=defineEmits(['update','delete']);//类型声明

  function handleClick(){
    emit('update','张三');// 触发事件，传递数据
    emit('delete','1000');// 触发事件，传递数据
  }
</script>