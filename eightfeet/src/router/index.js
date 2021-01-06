import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home/Home.vue'
import Main from '../components/Main.vue'
import Scan from '../components/Scan/Scan.vue'
import Order from '../components/Order/Order.vue'
import User from '../components/User/User.vue'
import Camp from '../components/Home/Camp.vue'
import Completed from '../components/Home/Completed.vue'
import Statistics from '../components/Home/Statistics.vue'
import System from '../components/Home/System.vue'
import User2 from '../components/Home/User.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
        path: '/main',
        component: Main,
        redirect: '/home',
        children: [
            { path: '/home', component: Home },
            { path: '/scan', component: Scan },
            { path: '/order', component: Order },
            { path: '/user', component: User },
        ]
    }, { path: '/camp', component: Camp },
    { path: '/completed', component: Completed },
    { path: '/statistics', component: Statistics },
    { path: '/system', component: System },
    { path: '/user2', component: User2 },
]

const router = new VueRouter({
    routes
})

//  挂载路由导航守卫
// router.beforeEach((to, from, next) => {
// to 将要访问的路径
// from 代表从哪个路径跳转而来
// next 是一个函数，表示放行
//     next()  放行    next('/login')  强制跳转
//   if (to.path === '/login') return next()
// 获取token
//     const tokenStr = window.sessionStorage.getItem('token')
//     if (!tokenStr) return next('/login')
//     next()
// })

// 解决重复点击路由报错的bug
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router