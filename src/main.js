import { createApp } from 'vue'
import App from './App.vue'
// 导入全局样式表
import './assets/css/global.css'

import router from './router'
// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//导入svg
import svgIcon from "@/SvgIcon/index.vue"

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(router).component('svg-icon', svgIcon)
app.mount('#app')


const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/SvgIcon/svg', false, /\.svg$/)
requireAll(req);