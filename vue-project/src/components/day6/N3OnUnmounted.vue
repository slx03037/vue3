<template>
    <h2>onUnmounted</h2>
    <p>{{ count }}</p>
    <p>状态:{{ status }}</p>
</template>

<script setup lang="ts">
    import { ref,onMounted,onUnmounted } from 'vue';
    const count = ref(0)
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
    status.value='执行结束1';//函数非按照顺序执行
    onUnmounted(() => {
        console.log('完成卸载 onUnmounted')
        if (intervalId) {
            clearInterval(intervalId)
        }
        status.value='已卸载';//完成卸载之后不会更新页面DOM
    })

</script>