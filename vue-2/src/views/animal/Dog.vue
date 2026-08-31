<template>
    <div>
        <h1>Dog</h1>
        <p>This is the dog page</p>
    </div>
    <div>
        <button @click="goReplace">replace</button>
        <button @click="goBack">Go Back</button>
        <button @click="goForward">Go Forward</button>
        <button @click="refresh">refresh page</button>
    </div>
</template>

<script setup lang="ts">
// useRouter：获取全局路由实例，用于主动跳转路由、控制导航（push/replace/go）
import { useRouter } from 'vue-router'

// 替换跳转：replace & 前进后退：go
const router = useRouter();

// //替换当前页面(登录页、404页常用)
// router.replace('/')

const goReplace = () => {
    router.replace('/home')
}

// 后退一页
const goBack = () => {
    router.go(-1)
}

// 前进一页
const goForward = () => {
    router.go(1)
}

// 刷新当前页面
const refresh = () => {
    router.go(0)
}

</script>