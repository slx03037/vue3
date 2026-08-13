<template>
    <p>{{ user.name }} - {{ user.age }}岁</p>
    <button @click="addHobby">添加爱好</button>
  <ul>
    <li v-for="hobby in user.hobbies" :key="hobby">{{ hobby }}</li>
  </ul>
</template>

<script setup lang="ts">
    import { reactive } from 'vue'

    interface User{
        name: string,
        age: number,
        hobbies: string[]
    }

    const user = reactive({
    name: '张三',
    age: 18,
    hobbies: ['篮球', '足球', '羽毛球']
    })

    function addHobby(){
       user.hobbies.push('阅读');//// 直接修改，不需要 .value
    }

</script>