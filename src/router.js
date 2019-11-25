import Vue from 'vue'
import Router from 'vue-router'
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
      redirect:'main/home',
      meta:{
        title:'viola'
      }
    },{
      path:'/main',
      name:'main',
      redirect:'/main/home',
      component:loadView('main'),
      children:[{
        path:'home',
        name:'home',
        component:loadView('main','home')
      }]
    }
  ]
})
export default router
