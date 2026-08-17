<template>
    <div>
        <span>
            姓名:{{ username }}
        </span>
        <input type="text" v-model="username" />
    </div>

    <div>
        <span>
            年龄:{{ age }}
        </span>
        <input type="number" v-model="age" />
    </div>
    <button @click="submit">提交</button>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const username=ref("")
const age=ref(0)

const emits=defineEmits<{(e:"submit",data:{username:string,age:number}):void}>()

function submit(){
    emits(
        "submit",{
            username:username.value,
            age:age.value
    });
}

</script>