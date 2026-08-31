<template>
    <ul>
         <li v-for="stu in stuArr" :key="stu.id">
            姓名：{{ stu.name }}，学号：{{ stu.id }}，班级：{{ stu.class }}，年龄：{{ stu.age }}
            <button @click="goDetail(stu)">明细</button>
        </li>
    </ul>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';
const router = useRouter();

interface Stu {
    name: string,
    id: number,
    class: string,
    age: number
}

const stuArr: Stu[] = [
    {
        name: 'zhangsan',
        id: 1,
        class: '1class',
        age: 18
    },
    {
        name: 'lisi',
        id: 2,
        class: '2class',
        age: 19
    },
    {
        name: 'wangwu',
        id: 3,
        class: '2class',
        age: 19
    }
]

const goDetail = (stu: Stu) => {
    console.log(stu)
    router.push({
        name: 'stuDetail',
        params: {
            id: stu.id,
            name: stu.name,
            class: stu.class,
            age: stu.age
        }
    })
}

</script>