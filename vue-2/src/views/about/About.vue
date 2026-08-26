<template>
 <div>
    <H1>About</H1>
    <p>This is the about page</p>
    <button @click="goHome">首页</button>
    <button @click="goUser">个人中心</button>
 </div>
</template>

<script setup lang="ts">
// 必须引入useRouter，TS完整类型支持
import { useRouter } from 'vue-router'
const router = useRouter()

// 1. 路径字符串跳转（简单场景）
const goHome = () => {
  router.push('/home')
}
// 2. 对象式跳转（TS强校验，推荐！）
const goUser = () => {
  router.push({
    name: 'user' // 匹配路由name，比路径更稳定
  })
}
</script>