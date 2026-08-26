import type { RouteRecordRaw } from 'vue-router';

const homeRoutes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue'),// 路由懒加载
        meta: {
            title: '首页',  // 页面标题
            icon: 'home',  // 菜单图标（后续权限菜单使用）
            isShow: true   // 是否展示在侧边栏
        }
    }
]

export default homeRoutes;