<template>
    <p>emit:子传父</p>
    <p>用户名:{{ user.username }}</p>
    <p>年龄:{{ user.age }}</p>
    <span>输入用户名<input type="text" v-model="user.username"/></span>
    <span>输入年龄<input type="number" v-model="user.age"/></span>
    <button @click="update">Click me</button>
</template>    

<script setup lang="ts">
import { ref } from 'vue'

// const username = ref('')
// const age = ref(0)
interface User{
    username: string,
    age: number
}
const user = ref<User>({
    username: '',
    age: 0
})


const emit = defineEmits<{
    (e:'update', user: User): void
}>()

function update(){
     // $emit('事件名', 参数1, 参数2, ...)
    // $emit('事件名', { 属性名: 属性值 })
    emit('update', user.value)
}


</script>

<style lang="scss" scoped></style>