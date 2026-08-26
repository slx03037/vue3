// 引入路由核心方法与TS类型
import {createRouter,createWebHistory,type RouteRecordRaw} from 'vue-router';

//1. TS约束路由列表类型，每一条路由都必须符合规范
const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        redirect: "/home" // 根路径重定向
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/Home.vue'), // 路由懒加载
        meta:{
            title: '首页', // 路由标题
            isAuth: false // 是否需要鉴权
        }
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/User.vue'),
        meta:{
            title: '个人中心', // 路由标题
            isAuth: true // 是否需要鉴权
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/About.vue'),
        meta:{
            title: '关于我们', // 路由标题
            isAuth: true // 是否需要鉴权
        }
    }
];

//创建路由实例
const router = createRouter({
    history: createWebHistory(),// history模式（无#号，企业首选）
    routes // 路由列表
});

export default router;