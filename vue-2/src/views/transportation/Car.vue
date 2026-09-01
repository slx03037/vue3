<template>
    <div>
        <h1>Car</h1>
        <p>Car a good way to transport</p>
         <div class="info">
            <p>当前时间：{{ currentTime }}</p>
            <p>访问次数：{{ visitCount }}</p>
         </div>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted ,onActivated, onDeactivated } from 'vue';
defineOptions({
  name: 'car'  // 与路由 name 一致
})

const currentTime = ref('')
const visitCount = ref(0)
let timer: number | null = null
// 页面加载时触发
onMounted(() => {
  console.log('Car页面初始化加载')
  updateTime()
  startTimer()
})

// 页面激活时触发（缓存页面进入）
onActivated(() => {
  console.log('Car 页面激活，刷新最新数据')
   visitCount.value++
  updateTime()
  startTimer()
})

// 页面失活时触发（缓存页面离开）
onDeactivated(() => {
  console.log('Car 页面缓存，停止定时器')
   stopTimer()
})
const updateTime = () => {
  currentTime.value = new Date().toLocaleString()
}

const startTimer = () => {
  if (timer) return
  timer = setInterval(() => {
    updateTime()
  }, 1000)
}

const stopTimer = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}
</script>