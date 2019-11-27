import Vue from 'vue'
import Router from 'vue-router'
import { Loading } from 'element-ui';
Vue.use(Router)
function loadView (view, view2) {
  return () =>
    import(/* webpackChunkName: "view" */ `./views/${view}/${view2 ||
      view}.vue`)
}
const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/login',
      meta:{
        title:'viola'
      }
    },
    {
      path:'/login',
      name:'login',
      component:loadView('login','index')
    },
    {
      path:'/main',
      name:'main',
      redirect:'/main/home',
      component:loadView('main'),
      children:[{
        path:'home',
        name:'home',
        meta:{
          title:''
        },
        component:loadView('main','home')
      }]
    }
  ]
});

router.beforeEach((to,from,next)=>{
  Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to, from) => {
  Loading.service().close()
})

export default router
