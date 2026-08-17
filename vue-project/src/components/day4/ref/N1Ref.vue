<template>
    <input ref="inputRef" type="text"/>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 变量名必须与模板中的 ref 属性值一致
const inputRef=ref<HTMLInputElement | null>(null);

onMounted(()=>{
    inputRef.value?.focus(); // 挂载后自动聚焦
})

</script>