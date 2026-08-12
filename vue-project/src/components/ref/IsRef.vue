<template>
    <!--isRef：判断是否为ref响应式数据-->
    <p>{{ count }}</p>
    <p>{{ message }}</p>
</template>  

<script setup lang="ts">

    import { ref, isRef } from 'vue';

    const count=ref(0);
    const message='消息';

    console.log(isRef(count)); // true 是响应式
    console.log(isRef(message)); // false 非响应式

</script>