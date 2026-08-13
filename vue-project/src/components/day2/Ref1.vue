<template>
    <p>计数:{{ count }}</p>
    <p>姓名:{{ name  }}</p>
    <p>是否展示:{{ isShow  }}</p>
</template>    

<script setup>
    import { ref } from 'vue'
    const count = ref(0)
    const name = ref('张三')
    const isShow = ref(true)
</script>