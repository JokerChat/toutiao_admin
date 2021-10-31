/**
 * 项目的启动入口
 */

// 加载Vue
import Vue from 'vue'
// 加载跟组件
import App from './App.vue'
// 加载路由
import router from './router'
// 加载 element 组件库
import ElementUI from 'element-ui'
// 加载全局样式文件
import './styles/index.less'
// 加载element组件库样式
import 'element-ui/lib/theme-chalk/index.css'

// 全局注册 element 组件库
Vue.use(ElementUI)
// 阻止显示生产模式的消息
// https://www.cnblogs.com/itgezhu/p/11949621.html
Vue.config.productionTip = false

// 创建 Vue 根实例
// 将 router 配置到跟实例中
// 通过 render 方法把 App 根组件渲染到 #app 入口节点
new Vue({
  router,
  render: h => h(App)
  // el: '#app' //等价于 $mount('#app')
}).$mount('#app')
