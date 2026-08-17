<template>
    <div>
        <h1>Param1Parent</h1>
        <Param1Child  @submit="handlSubmit"/>
    </div>
    <div>
        <h1>username: {{ username }}</h1>
        <h1>age: {{ age }}</h1>
    </div>
</template>

<script setup lang="ts">
import Param1Child from './Param1Child.vue';
import { ref, watch } from 'vue';

interface User {
  username: string;
  age: number;
}

const username = ref('john')
const age = ref(20)

function handlSubmit(data:User) {
  console.log('submit', data)
  username.value = data.username;
  age.value = data.age;
}

watch(username, (newVal, oldVal) => {
  console.log('username changed', newVal, oldVal)
})

watch(age, (newVal, oldVal) => {
  console.log('age changed', newVal, oldVal )
})

</script>