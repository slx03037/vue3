<template>
    <p>id: {{ user.id  }}</p>
    <p>姓名: {{ user.username  }}</p>
    <p>年龄: {{ user.age  }}</p>
</template>   

<script setup lang="ts">
    import { reactive } from 'vue';

    // 定义TS接口，严格约束对象结构
    interface UserInfo{
        id:number;
        username:string;
        age?: number; // 可选属性
    }

    // reactive绑定接口，类型绝对安全
    const user:UserInfo = reactive({
        id: 1,
        username: '张三'
    })
    // 合法修改
    user.id = 1002;
    user.age = 25;
    // 报错：TS拦截非法属性、非法类型
    // user.id = "1002"//类型约束为number
</script>