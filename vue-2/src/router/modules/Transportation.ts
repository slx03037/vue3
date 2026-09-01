import {RouteRecordRaw} from 'vue-router';

const TransportationRoutes: Array<RouteRecordRaw> = [
    {
        path: '/transportation',
        name: 'transportation',
        component: () => import('@/views/transportation/Transportation.vue'),
        meta: {
            title: 'Transportation',
            keepAlive: true
        }
    }, 
    {
        path: '/car',
        name: 'car',
        component: () => import('@/views/transportation/Car.vue'),
        meta: {
            title: 'car',
            keepAlive: true
        }
    } ,
    {
        path: '/bus',
        name: 'bus',
        component: () => import('@/views/transportation/Bus.vue'),
        meta: {
            title: 'bus',
            keepAlive: true
        }
    },
    {
        path: '/train',
        name: 'train',
        component: () => import('@/views/transportation/Train.vue'),
        meta: {
            title: 'train',
            //keepAlive: false  // ❌ 明确不需要缓存
        }
    }

]

export default TransportationRoutes;