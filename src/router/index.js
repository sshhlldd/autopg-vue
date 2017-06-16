import Vue from 'vue'
import Router from 'vue-router'
/*引入页面组件，命名hello*/
import Hello from '@/components/Hello'
//使用路由依赖
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
