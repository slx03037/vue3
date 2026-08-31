<template>
    <div>
        <h1>学生详情</h1>
        <p>学生id: {{ route.params.id }}</p>
        <p>学生姓名: {{ route.params.name }}</p>
        <p>学生年龄: {{ route.params.age }}</p>
        <p>学生班级: {{ route.params.class }}</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route =useRoute();

// 接收query参数
console.log('接收参数：', route.params.id, route.params.name)
</script>