<template>
    <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
     import {ref} from 'vue';
     const msg=ref<string>('Awa1')
     
     // 无需包裹函数，顶层直接写异步
     const getInfo=async()=>{
        return '获取用户信息';
     }

     // 顶层await，组件初始化自动执行
     const res=await getInfo();
     console.log(res);
</script>