<template>
    <div>
        <h1>onMounted</h1>
    </div>
</template>

<script setup lang="ts">
import {  ComponentInternalInstance} from 'vue';

function onMounted(callback: () => void, target?: ComponentInternalInstance | null): void{
    // 在组件挂载后执行的代码
    console.log('组件已挂载')
}
</script>