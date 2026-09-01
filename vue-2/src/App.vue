<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { useRouter, useRoute } from 'vue-router'
// 创建路由实例
const router = useRouter()
// 获取当前路由信息
const route = useRoute()

// 打印当前路由信息
console.log('当前路径：', route.path)
console.log('路由参数：', route.query, route.params)
console.log('路由元信息：', route.meta)
</script>

<template>
  <!-- <HelloWorld /> -->
  <!-- 路由视图出口，所有页面在此渲染 -->
   <!-- <router-view/> -->

    <!-- 路由跳转导航 -->
  <nav class="nav">
    <RouterLink to="/home">首页</RouterLink>
    <RouterLink to="/user">用户中心</RouterLink>
    <RouterLink to="/person">人物</RouterLink>
    <!-- 字符串路径跳转 -->
  <RouterLink to="/dog">小狗</RouterLink>
  <!-- 对象式跳转（推荐，支持name匹配） -->
  <RouterLink :to="{ name: 'cat' }">小猫（命名路由）</RouterLink>
  <!-- 强制刷新路由 -->
  <RouterLink to="/bird" replace>小鸟（替换历史）</RouterLink>
  <RouterLink to="/human" >用户</RouterLink>
  <RouterLink :to="{ name : 'transportation'}" >交通工具</RouterLink>
  </nav>
  <!-- 路由页面渲染出口 -->
  <RouterView />
</template>

<style>
.nav {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f5f5f5;
  margin-bottom: 20px;
}
/* 路由激活默认样式 */
.router-link-active {
  color: #42b883;
  font-weight: bold;
}
</style>