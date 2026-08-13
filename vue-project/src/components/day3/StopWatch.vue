<template>
    <div>
        <h1>Stop Watch</h1>
        <input type="text" v-model="name">
        <p>姓名:{{name}}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const name = ref('')

//监听name
const stop =watch(name,(newVal,oldVal)=>{
    console.log(newVal,oldVal)
    // 可执行异步请求、筛选逻辑
    }, {
        immediate:true,// 立即执行一次  
        deep:true// 深度监听（复杂对象必备）
    }
)

//手动调用停止
stop();

</script>