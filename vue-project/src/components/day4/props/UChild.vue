<template>
    <div>
        <h1>UChild</h1>
        <h2>이름: {{ name1 }}</h2>
        <h2>나이: {{ age1 }}</h2>
        <h2>성별: {{ gender1 }}</h2>
    </div>

    <button @click="update">이름변경</button>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const props = defineProps({
    name: String,
    age: Number,
    gender: String
})
const name1 = ref(props.name) // props.name
const age1 = ref(props.age);
const gender1 = ref(props.gender);



function update() {
    name1.value="홍길동---1";
    age1.value=30;
    gender1.value="여자__1";
    console.log("update")
}
</script>