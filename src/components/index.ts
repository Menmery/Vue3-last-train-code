import type { App } from 'vue'
import SvgIcon from './SvgIcon/index.vue'

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
  },
}
