import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  // 配置路由加载滚动条
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
