<template>
    <button @click="handleClick">触发更新</button>
</template>

<script setup lang="ts">
//TS 类型声明（推荐）
const emit=defineEmits<{
    (e:'update',value:number):void;
    (e:'delete',value:number):void;
}>();

const handleClick=()=>{
    emit('update',123);
    emit('delete',234);
}
</script>