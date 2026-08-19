<template>
    <div>
        <p>计数 : {{ count }}</p>
    </div>
</template>

<script setup lang="ts">    
import { 
    ref,  
    onMounted,
    onUpdated,
    onUnmounted,
    onBeforeUnmount,
    onActivated,
    onDeactivated} from 'vue';

const count = ref(0)
let timer: number | null = null   

//挂在后，发起请求，初始化定时器，获取DOM
onMounted(() => {
    console.log('组件已挂载,DOM 可用')
    timer = setInterval(() => {
        count.value++
    }, 1000)
})

//// 更新后：DOM 更新完成，可操作更新后的 DOM
onUpdated(() => {
    console.log('组件已更新，最新 count:', count.value)
})


//卸载前：清理定时器、取消请求、移除事件监听
onBeforeUnmount(() => {
   console.log('组件即将卸载，清理资源')
    if (timer) {
        clearInterval(timer)
        timer = null
    }
})

onUnmounted(() => {
   console.log('完成卸载 onUnmounted')
    if (timer) {
        clearInterval(timer)
        timer = null
    }
})

//激活时，重新开始定时器
onActivated(() => {
    console.log('组件被激活（从缓存恢复）')
    timer = setInterval(() => {
        count.value++
    }, 1000)
})

//失活时，清除定时器
onDeactivated(() => {
      console.log('组件被缓存（失活）')
    if (timer) {
        clearInterval(timer)
        timer = null
    }
})
</script>