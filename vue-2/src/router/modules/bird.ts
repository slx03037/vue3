//导入vue-ruoter示例
import { RouteRecordRaw } from "vue-router";

const BirdRoutes : RouteRecordRaw[]=[
    {
        path: '/bird',
        name: 'bird',
        component: () => import('@/views/animal/Bird.vue'), //路由懒加载
        meta: {
            title: 'bird',   //设置路由的标题
            icon: 'bird',    //设置路由的图标
            keepAlive: true,  //设置路由是否需要缓存
            roles: ['admin', 'editor'], //设置路由的权限
            isShow: true,  //设置路由是否显示
        }
    }
]

export default BirdRoutes;

