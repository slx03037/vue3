<template>
    <div>
        <h1>Stop Watch</h1>
        <input type="text" v-model="name">
        <p>姓名:{{name}}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect ,onScopeDispose } from 'vue'

const name = ref('')

//监听name
const stop =watchEffect(() => {
    console.log(name.value);
})
// 组件卸载时自动停止，也可以手动调用 stop()
onScopeDispose(() => {
    stop();
})


</script>