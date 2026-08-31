//导入路由RouteRecordRaw
import { RouteRecordRaw } from 'vue-router';

const CatRouts: RouteRecordRaw[] = [
    {
        path: '/cat',
        name: 'cat',
        component: () => import('@/views/animal/Cat.vue'),
        meta: {
            title: 'Cat',
            icon: 'cat',
            isShow: true
        }
    }
]

export default CatRouts;
