<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <HelloWorld /> -->
  <!-- 路由视图出口，所有页面在此渲染 -->
   <!-- <router-view/> -->

    <!-- 路由跳转导航 -->
  <nav class="nav">
    <RouterLink to="/home">首页</RouterLink>
    <RouterLink to="/user">用户中心</RouterLink>
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