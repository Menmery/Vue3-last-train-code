import Layout from '@/layout/index.vue'
import Login from '@/views/login/index.vue'
import NotFound from '@/views/404/index.vue'

import Home from '@/views/home/index.vue'

// 常量路由
export const constantRoutes = [
  {
    path: '/login',
    component: Login,
    name: 'Login',
    meta: {
      title: '登录', //菜单标题
      hidden: false, //是否在菜单中隐藏
      icon: 'Promotion',
    },
  },
  {
    path: '/',
    component: Layout,
    name: 'Layout',
    meta: {
      title: 'Layout', //菜单标题
      hidden: false,
      icon: 'Avatar',
    },
    children: [
      {
        path: '/home',
        component: Home,
        meta: {
          title: '首页', //菜单标题
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    meta: {
      title: '404', //菜单标题
      hidden: false,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由', //菜单标题
      hidden: false,
    },
  },
]
