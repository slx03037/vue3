<template>
    <div>
        <button @click="handlerClick">Click me</button>
        <p>用户名 {{ username }}</p>
        <p>年龄 {{ age }}</p>
        <div>
            <label>姓名:</label>
            <input type="text" v-model="username" />
        </div>
        <div>
            <label>年龄:</label>
            <input type="number" v-model="age" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const emit=defineEmits<{
    ( e:'update',value:string):void,
    ( e:'username',value:string):void,
    ( e:'age',value:number):void
}>()
const username=ref<string>('');
const age=ref<number>(0);

const handlerClick=()=>{
    emit('update','hello')
    emit('username',username.value)
    emit('age',age.value)
}
</script>