<template>
    <div>
        <p>传递的 用户名:{{ username }}</p>
        <p>传递的 年龄:{{ age }}</p>
    </div>

    <child @update="update" :username="username" :age="age"></child>
</template>  

<script setup lang="ts">
import { ref } from 'vue';
import child from './N1EmChild.vue';

const username= ref('');
const age=ref(0);

interface User{
    username:string;
    age:number;
}

function update(value: User){
    username.value=value.username;
    age.value=value.age;
    //emit("update",username.value,age.value);
    console.log("传递的值",value.username,value.age)
}
</script>