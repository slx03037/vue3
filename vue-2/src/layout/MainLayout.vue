<template>
  <div class="layout">
    <!-- 侧边栏 -->
    <aside class="sidebar">侧边栏导航</aside>
    <div class="main">
      <!-- 顶部导航 -->
      <header class="header">顶部导航栏</header>
      <!-- 子路由页面渲染出口 -->
      <main class="content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout { display: flex; height: 100vh; }
.sidebar { width: 200px; background: #2f3640; color: #fff; }
.main { flex: 1; display: flex; flex-direction: column; }
.header { height: 60px; border-bottom: 1px solid #eee; }
.content { flex: 1; padding: 20px; overflow: auto; }
</style>