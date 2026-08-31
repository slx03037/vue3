<template>
    <div>
        <h1>Teac</h1>
        <p>Teac</p>
        <p>老师姓名: {{ route.query.name }}</p>
        <p>老师年龄: {{ route.query.age }}</p>
        <p>老师年龄: {{ route.query.subject }}</p>
    </div>
</template>    

<script setup lang="ts">
import { useRoute } from "vue-router";
const route =useRoute();

// 接收query参数
console.log('接收参数：', route.query.name,route.query.age, route.query.subject)
</script>