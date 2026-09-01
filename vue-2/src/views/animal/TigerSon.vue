<template>
    <div>
        <h1>this is Tiger children</h1>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';

    // const router=useRouter();
    // console.log("路由实例:",router)

    // router.afterEach((to,from,next)=>{
    //     //console.log(to.meta.title)
    //     //next();
    // })
    // 获取当前路由信息
    const route = useRoute()

// 打印当前路由信息
console.log('当前路径：', route.path)
console.log('路由参数：', route.query, route.params)
console.log('路由元信息：', route.meta) 

</script>