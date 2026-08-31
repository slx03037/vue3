<template>
    <div>
        <p>Profile</p>
        <router-link to="/human/setting">Edit</router-link>
    </div>
</template>

<script setup lang="ts">
import { useRouter,onBeforeRouteUpdate      } from 'vue-router';

const router = useRouter()

// 检查登录状态
// 检查登录状态
const checkAuth = () => {
  const token = localStorage.getItem('token')
  return !!token
}

onBeforeRouteUpdate ((to, from, next) => {
  if (!checkAuth()) {
    // 未登录，跳转到登录页，并带上目标路径
    next(`/login?redirect=${to.fullPath}`)
  } else {
    next()
  }
})
</script>