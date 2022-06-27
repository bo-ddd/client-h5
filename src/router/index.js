import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue';

const routes = [
    {
        path:'/',  // path是路径  
        redirect:'/home',  //重定向   如果访问/结尾，就重定向到/home页面去；   
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/login',
        component: ()=> import(/* webpackChunkName:'home' */ '../views/userCenter/Login.vue')
    },
    {
        path:'/activityDetail',
        component: ()=> import(/* webpackChunkName:'activityDetail' */ '../views/activityDetail/ActivityDetail.vue')
    }
]

const router = createRouter({
    // 官方提示你 hash比较简单；
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // create: 创建
    // web: 浏览器
    // hash: 哈稀
    // 
    history: createWebHistory(),  // createWebHistory()  createWebHashHistory()
    routes, // `routes: routes` 的缩写
})

export default router;