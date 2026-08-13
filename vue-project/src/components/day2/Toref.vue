<template>
 <p>姓名:{{ user.name }}</p>
<p>年龄:{{ user.age }}</p>
</template>

<script setup lang="ts">
    import { reactive, toRef } from 'vue';

    const user = reactive({
        name: '张三',
        age: 18
    })
    // 单独抽取name，保留响应式
    const username=toRef(user,'name');
    // 修改视图同步更新
    username.value='王五';

</script>