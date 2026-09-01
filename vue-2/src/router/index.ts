//导入vue-ruoter示例
import { createRouter, createWebHistory , type RouteRecordRaw} from "vue-router";
import  BirdRoutes  from "./modules/bird";
import  DogRoutes  from "./modules/dog";
import  CatRouts  from "./modules/cat";
import  PersonRoutes  from "./modules/person";
import  HumanRoutes  from "./modules/human";
import TransportationRoutes from "./modules/Transportation"

export const OtherRouter : Array<RouteRecordRaw> = [
{
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/Home.vue"),
        meta: {
            title: "首页",
            icon: "home",
            isShow: true,
            requiresAuth: true

        }
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/views/about/About.vue"),//路由懒加载
        meta: {
            title: "关于",
            icon: "about",
            isShow: true,
            requiresAuth: true
        }

    },
    {
        path: "/user",
        name: "user", 
        component: () => import("@/views/user/User.vue"),//路由懒加载
        meta: {
            title: "用户",
            icon: "user",
            isShow: true,
            requiresAuth: true
        },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            console.log("路由独享守卫");
            next();
        }
    }
]

const routes: Array<RouteRecordRaw> = [...OtherRouter,...BirdRoutes,...DogRoutes,...CatRouts,...PersonRoutes,...HumanRoutes,...TransportationRoutes];


const router = createRouter({
    history: createWebHistory(),
    routes, //对应上面的路由列表
     // 滚动行为：切换路由自动回到顶部
    scrollBehavior() {
    return { top: 0, left: 0 }
  }
})
//路由前置守卫
router.beforeEach((to, from, next) => {
    
    //路由元信息
    console.log("路由元信息:",to.meta.title);
     // 设置浏览器页面标题
     //使用类型断言
    //document.title = (to.meta.title || 'Vue3学习项目') as string;
    //使用空值合并运算符（推荐）
    //document.title = to.meta.title ?? 'Vue3学习项目';
    //使用 String 构造函
    //document.title = String(to.meta.title || 'Vue3学习项目');
    // console.log(to, from, next);
    console.log("路由前置守卫1");
    next();
})
router.beforeResolve((to, from, next) => {
    console.log("全局解析守卫2");
    next();
})

router.afterEach((to, from, next) => {
    console.log("路由后置守卫3");
})


export default router;