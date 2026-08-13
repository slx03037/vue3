
<template>
  <div>
    <p>昵称：{{ name }}</p>
    <button @click="sayHello">点击打招呼</button>
  </div>
</template>

<script setup lang="ts">
// 变量直接定义，模板直接使用，无需return
const name: string = "Vue3学习者";

// 函数直接定义，模板直接调用
const sayHello = (): void => {
  console.log("Hello 组合式API!");
};
</script>