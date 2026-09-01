<template>
    <div>
        <h1>Transportation</h1>
        <p>Transportation page</p>
        <!-- 导航链接 -->
        <div class="nav-links">
      <router-link to="/bus" active-class="active">Bus</router-link>
      <router-link to="/car" active-class="active">Car</router-link>
      <router-link to="/train" active-class="active">Train</router-link>
    </div>
        <RouterView v-slot="{Component,route}">
            <!-- 
                方案一：根据路由 meta 动态决定是否缓存（推荐）
                注意：KeepAlive 的 include 应该使用动态计算
            -->
            <!-- 仅缓存 meta.keepAlive 为true的页面 -->
            <!-- <KeepAlive include="bus,car,train"> -->
            <KeepAlive :include="keepAliveComponents">
                <component :is="Component" :key="route.fullPath" />
            </KeepAlive>
        </RouterView>
    </div>
</template>    

<script setup lang="ts">
//import { computed } from 'vue';
//import { useRouter } from 'vue-router';
//const router = useRouter()
//1.动态湖片区需要缓存的组件名(从路由配置中读取 meta.keepAlive)
// const keepAliveComponents = computed(() => {
//   const routes = router.getRoutes()
//   return routes
//     .filter(route => route.meta?.keepAlive === true)
//     .map(route => route.name as string)
// })

//2.手动绑定
/**
 * 在 TypeScript 中：
 * 1.String 是 JavaScript 的 String 构造函数的类型
 * 2.string 是原始字符串值的类型
 * 这两个类型虽然相关，但并不相同，因此 TypeScript 报错说 String[] 不能赋值给 string[]。
 * 修复建议是将 keepAliveComponents 的类型声明从 String[] 改为 string[]
 */
const keepAliveComponents : string[]=['bus','car','train']; //String[]=['bus','car','train'];

</script>

<style scoped>
.nav-links {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

.nav-links a {
  padding: 8px 16px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav-links a:hover {
  background: #f0f0f0;
}

.nav-links a.active {
  background: #4CAF50;
  color: white;
}
</style>
