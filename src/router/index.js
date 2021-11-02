import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用VueCLIT 创建的项目中 @ 表示 src目录
// 它是 src 目录的路径别名
// 好处：不受当前文件路径影响--绝对路径
// 注意：@ 就是src路径，后面不要忘了写斜杠
// 建议：凡是需要进行路径查找的都使用 @
import Login from '@/views/login'

Vue.use(VueRouter)

// 路由配置表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
