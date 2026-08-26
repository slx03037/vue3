import type { RouteRecordRaw } from 'vue-router';

const aboutRoutes: RouteRecordRaw[] = [  
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/about/About.vue'),
        meta: {
            title: 'About',
            icon: 'About page',
            isShow: true
        }
    }
]

export default aboutRoutes;