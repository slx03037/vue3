import type {RouteRecordRaw} from 'vue-router';

const HumanRoutes: RouteRecordRaw[] = [
    {
        path: '/human',
        name: 'human',
        //component: () => import(/* webpackChunkName: "human" */ '@/views/human/Human.vue'),
        component:()=> import(/* webpackChunkName: "human" */ '@/layout/MainLayout.vue'),
        redirect: '/human/profile',
        children: [
            {
                path: 'profile',
                name: 'profile',
                component: () => import(/* webpackChunkName: "human" */ '@/views/human/Profile.vue'),
                meta: {
                    title: 'Profile',
                    icon: 'profile',
                    isShow: true,
                    requiresAuth: true
                }
            },
            {
                path: 'setting',
                name: 'setting',
                component: () => import(/* webpackChunkName: "human" */ '@/views/human/Setting.vue'),
                meta: {
                    title: 'Setting',
                    icon: 'setting',
                    isShow: true,
                    requiresAuth: true
                }
            }
        ]
    }
    

]

export default HumanRoutes;