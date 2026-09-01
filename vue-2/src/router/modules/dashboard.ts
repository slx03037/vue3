import { RouteRecordRaw } from "vue-router";

const DashboardRoutes: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '数据看板', isAuth: true }
    },
    {
        path: '/map',
        name: 'map',
        component: () => import('@/views/map/index.vue'),
        meta: { title: '数据看板', isAuth: true }
    }
]

export default  DashboardRoutes;