<template>
    <div>
        <h1>Train</h1>
        <p>Train a good way to transport</p>
         <div class="info">
            <p>当前时间：{{ currentTime }}</p>
            <p>这个组件不会被缓存，每次进入都会重新创建</p>
         </div>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted  } from 'vue';
// 注意：Train 组件没有 onActivated/onDeactivated
// 因为不会被缓存，所以不需要
defineOptions({
  name: 'train'  // 与路由 name 一致
})

const currentTime = ref('')

// 页面加载时触发
onMounted(() => {
  console.log('Train 组件挂载（每次都会重新创建）')
  updateTime()
})

const updateTime = () => {
  currentTime.value = new Date().toLocaleString()
}

</script>