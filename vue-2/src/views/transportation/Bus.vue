<template>
    <div>
        <h1>Bus</h1>
        <p>Bus a good way to transport</p>
        <div class="info">
            <p>当前时间：{{ currentTime }}</p>
            <p>访问次数：{{ visitCount }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted ,onActivated, onDeactivated } from 'vue';

// 定义组件名（必须，用于 KeepAlive 匹配）
defineOptions({
  name: 'bus'  // 与路由 name 一致
})

const currentTime = ref('')
const visitCount = ref(0)
let timer: number | null = null

// 页面加载时触发
onMounted(() => {
  console.log('Bus页面初始化加载')
  updateTime()
  startTimer()
})

// 页面激活时触发（缓存页面进入）
onActivated(() => {
  console.log('Bus页面激活，刷新最新数据')
  // 刷新数据
  visitCount.value++
  updateTime()
  startTimer()
})

// 页面失活时触发（缓存页面离开）
onDeactivated(() => {
  console.log('Bus页面缓存，停止定时器')
   // 清除定时器，防止内存泄漏
    stopTimer()
})

// 更新时间
const updateTime = () => {
  currentTime.value = new Date().toLocaleString()
}

// 启动定时器
const startTimer = () => {
  if (timer) return
  timer = setInterval(() => {
    updateTime()
  }, 1000)
}

// 停止定时器
const stopTimer = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

</script>