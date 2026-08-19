<template>
    <h3>onErrorCaptured</h3>
    <N7OnErrorCapturedChild/>
    <div>   
        <p class="pc">出错了：{{ error }}</p>
    </div>
    <button @click="resetError">重置</button>
</template>  


<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';
import N7OnErrorCapturedChild from './N7onErrorCapturedChild.vue'

const error = ref<unknown>(null)


onErrorCaptured((err, instance, info) => {
   // 捕获错误
  console.error('捕获到错误：', err)
  console.log('错误组件：', instance)
  console.log('错误信息：', info)

  // 显示错误 UI
  error.value = info

  // 返回 false 阻止错误继续向上传播（避免全局错误处理器再处理）
  return false
})

// 重置错误状态
const resetError = () => {
  error.value = "结束"
}
</script>

<style scoped>
.pc {
    color: red;
}
</style>