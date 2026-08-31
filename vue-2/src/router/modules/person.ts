// 导入vue-router模块
import {RouteRecordRaw} from 'vue-router';

const PersonRoutes: Array<RouteRecordRaw> = [
    {
        path: '/person',
        name: 'person',
        component: () => import('@/views/animal/Person.vue'),
    },
    {
         path: '/stu',
         //path: '/stu/:id:name',//这种方式刷新数据会错乱或丢失
        //path: '/stu', //:id:name 没有接收id和name参数，调转传不过来
        name: 'stu',
        component: () => import('@/views/stu/Stu.vue'),
        meta: {title:"学生详情页",isShow:true}
       // props: true,
    },
    {
         path: '/stuDetail/:id/:name/:class/:age ',
         //path: '/stu/:id:name',//这种方式刷新数据会错乱或丢失
        //path: '/stu', //:id:name 没有接收id和name参数，调转传不过来
        name: 'stuDetail',
        component: () => import('@/views/stu/detail/Detail.vue'),
        meta: {title:"学生详情页",isShow:true}
       // props: true,
    },
    {
        path: '/teach',
        name: 'teach',
        component: () => import('@/views/teach/Teach.vue'),
         meta: {title:"老师详情页",isShow:true}
       // props: true,
    },
    {
        path: '/teachDetail',
        name: 'teachDetail',
        component: () => import('@/views/teach/detail/Detail.vue'),
         meta: {title:"老师详情页",isShow:true}
       // props: true,
    }
    
]

export default PersonRoutes;