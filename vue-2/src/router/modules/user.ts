import type { RouteRecordRaw } from 'vue-router';

const userRoutes : RouteRecordRaw[] = [
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/User.vue'),
        meta: {
            title: 'User',
            icon: 'mdi-account',
            isShow: true,
            requiresAuth: true
        }
    }
]

export default userRoutes;