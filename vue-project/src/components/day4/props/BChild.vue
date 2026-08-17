<template>
    <div >
        <p> 用户名: {{ name }}</p>
        <p> 密码: {{ password }}</p>
        <p> 年龄: {{ age }}</p>
        <p> 性别: {{ sex }}</p>
    </div>
</template>   

<script setup lang="ts">

interface Users{
    name: string,
    password: string,
    age: number,
    sex: string
}

const props = defineProps<Users>()

</script>