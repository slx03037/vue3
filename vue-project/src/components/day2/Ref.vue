<template>
  <!--ref — 基本类型响应式-->
  <!-- 模板中自动解包，不需要 .value -->
  <p>count: {{ count }}</p>
  <p>count: {{ message }}</p>
  <p>user.name: {{ user.name }}</p>
  <button @click="increment">+1</button>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    //基本类型
    const count=ref<number>(0);
    const message=ref<string>('vue3 hello word');

    //对象类型（ref 包裹对象，内部会用 reactive 处理）
    const user=ref({name:"张三",age:25})

    function increment(){
        count.value++;
        user.value.name="李四";
    }
</script>