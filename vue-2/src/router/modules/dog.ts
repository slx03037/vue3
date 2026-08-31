//导入路由
import { RouteRecordRaw } from 'vue-router';

const DogRoutes: RouteRecordRaw[] = [
    {
        path: '/dog',
        name: 'dog',
        component: () => import('@/views/animal/Dog.vue'),
        meta: {
            title: '狗',
            icon: 'dog',
            isShow: true
        }
    }
]

export default DogRoutes;