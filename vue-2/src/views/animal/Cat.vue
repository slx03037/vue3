<template>
    <div>
        <h1>Cat</h1>
        <p>Meow</p>
    </div>
    <div>
        <!-- 编程式跳转：push（最常用） -->
        <button @click="goBird">go bird</button>
        <button @click="goDog">go dog</button>
        <button @click="goForward">Go Forward</button>
    </div>
</template>  

<script setup lang="ts">
// useRouter：获取全局路由实例，用于主动跳转路由、控制导航（push/replace/go）

import { useRouter } from 'vue-router'
const router = useRouter()

// 1. 基础字符串跳转
const goBird = () => {
    router.push('/bird')
}

// 2. 命名路由跳转（推荐，路径修改无需多处修改）
const goDog = () => {
    router.push({name:'dog'})
}

// 前进一页
const goForward = () => {
    router.go(1)
}

</script>