<template>
    <p>序号:{{ user.id }}</p>
    <p>姓名:{{ user.name }}</p>
    <p>年龄:{{ user.age }}></p>
</template>

<script setup lang="ts">
    import {reactive,toRefs} from 'vue';

    interface User{
        id:number,
        name:string,
        age:number
    }

    const user:User = reactive({
        id:1,
        name:'张三',
        age:18
    })

    //完美解构，保留响应式、不丢TS类型
    const {id,name,age} = toRefs(user)
    id.value=20;
    name.value='李四';
    age.value=15;
</script>