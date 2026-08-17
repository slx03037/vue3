<template>
    <div>
        <h1>UChild</h1>
        <h2>이름: {{ name1 }}</h2>
        <h2>나이: {{ age1 }}</h2>
        <h2>성별: {{ gender1 }}</h2>
    </div>


</template>

<script setup lang="ts">

import { computed } from 'vue'

const props = defineProps({
    name: String,
    age: {type:Number,default: 0},
    gender: String
})

const name1 = computed(() => {return props.name+"----1"})
const age1 = computed(() => {return props.age+10})
const gender1 = computed(() => props.gender+"_________1")

</script>