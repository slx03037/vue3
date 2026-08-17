<template>
    <div class="user-card">
        <p>用户名：{{ name }}</p>
        <p>用户年龄：{{ age }}</p>
        <p>是否VIP：{{ isVip ? "是" : "否" }}</p>
    </div>
</template>
<script setup lang="ts">
// 1. TS定义参数接口，严格约束每一个字段的类型
export interface UserProps {  
    name: string; // 必传字符串  
    age: number;  // 必传数字  
    isVip?: boolean; // 可选布尔值
    }
// 2. 绑定接口，实现TS强校验
    const props = defineProps<UserProps>();
</script>
<style scoped>
.user-card {
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 8px;
    width: 300px;
}
</style>
