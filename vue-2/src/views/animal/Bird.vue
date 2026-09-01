<template>
    <div>
        <h1>bird</h1>
        <p>bird is a bird</p>
        <!-- 声明式跳转:RouterLink -->

        <!-- 1.字符串路径跳转 -->
        <RouterLink to="/cat">1.go cat</RouterLink>

        <!-- 2.对象式跳转（推荐，支持name匹配） -->
        <RouterLink :to="{name:'cat'}">2.go cat</RouterLink>

        <!-- 3.强制刷新路由 -->
        <RouterLink to="/cat" replate>3.go cat (替换历史)</RouterLink> 

        <button @click="goForward">Go Forward</button>

         <button @click="goDashboard">goDashboard</button>

         <button @click="goMap">goMap</button>

          <button @click="goTiger">goTiger</button>
    </div>
</template>    

<script setup lang="ts">
import { useRouter } from 'vue-router';
import DashboardRoutes from '@/router/modules/dashboard'

const router = useRouter()

// 前进一页
const goForward = () => {
    router.go(1)
}
DashboardRoutes.forEach((x)=>{
    router.addRoute(x);
})

router.addRoute({ name: 'tiger', path: '/tiger', component: ()=>import('@/views/animal/Tiger.vue')  })
// 给已有父路由添加子路由
router.addRoute('children', {
  name: 'tigerSon',
  path: '/tigerSon',
  component: () => import('@/views/animal/TigerSon.vue'),
  meta: { title: '老虎儿子', isAuth: true }
})

const goDashboard =()=>{
    router.push({"name":"dashboard"})
}

const goMap =()=>{
     router.push({"name":"map"})
}

const goTiger=()=>{
    router.push({"name":"tigerSon"})
}

</script>