<template>
    <h3>onBeforeUnmount</h3>
    <div>   
        <p>计数:{{ count }}</p>
        <p>状态:{{ status }}</p>
    </div>
    <button @click="change">点击事件</button>
</template>

<script setup lang="ts">
        import { ref, onUnmounted,onMounted,onBeforeUnmount } from 'vue'
        const count = ref<number>(0)
        let intervalId: number
        const status = ref('未开始')
        
        onMounted(() => {
            intervalId = setInterval(() => {
                if (count.value >= 1000) {
                    clearInterval(intervalId)
                    status.value='执行结束';
                } else {
                    count.value++
                    status.value='执行中';
                }
            })
        })
        const change = () => {
            status.value = 'onBeforeUnmount'
        }
        onUnmounted(() => {
            console.log('组件卸载后执行')
        })
        onBeforeUnmount(() => {
            console.log('组件卸载前执行')
        })       
        
</script>



