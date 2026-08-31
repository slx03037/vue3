<template>
    <div>   
        <h1>Person</h1>
        <p>Person</p>
    </div>
    <div>
        <button @click="goStu">学生</button>
        <button @click="goTeac">老师</button>
    </div>
</template>

<script setup lang="ts">

import { useRouter,useRoute  } from 'vue-router'


const router = useRouter()
const route = useRoute()


const goStu = () => {
    router.push({
        name: 'stu'
    })
}


const goTeac = () => {
    router.push({
        name: 'teach'
    })
}
console.log('接收参数：', route)

// // 接收query参数
// console.log('接收参数：', route.params.id, route.params.name)

</script>

