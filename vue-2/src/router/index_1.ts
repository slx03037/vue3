import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

//导入各业务模块路由
import homeRoutes from './modules/home';
import userRoutes from './modules/user';
import aboutRoutes from './modules/about';

// 全局路由配置（基础路由：所有页面均可访问）
export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home' // 根路径重定向到首页

    }
]
// 合并所有路由模块
const routers = [...constantRoutes, ...homeRoutes, ...userRoutes, ...aboutRoutes];

//创建路由实例
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // 路由规则
    routes:routers,
    // 滚动行为：切换路由自动回到顶部
    scrollBehavior() {
    return { top: 0, left: 0 }
  }
})
export default router;
