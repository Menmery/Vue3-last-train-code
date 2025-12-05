import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// svg配置代码
import 'virtual:svg-icons-register'

// 统一全局注册组件
import GlobalComponents from '@/components/index'

// 引入全局样式
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(GlobalComponents)

app.mount('#app')
