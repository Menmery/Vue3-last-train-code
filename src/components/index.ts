import type { App } from 'vue'
import SvgIcon from './SvgIcon/index.vue'
// 引入element-plus组件图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const GlobalComponents = {
  SvgIcon,
}

export default {
  // 当成插件使用
  install(app: App) {
    Object.keys(GlobalComponents).forEach((key) => {
      // 全局注册
      app.component(key, GlobalComponents[key as keyof typeof GlobalComponents])
    })
    // 导入element-plus组件图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
