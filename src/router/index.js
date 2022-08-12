import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/index.vue')
const loading = () => import('../views/loading.vue')




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/loading',
   
  },
  {
    path: '/home',
    component: Home,
  }, 

  {
    path: '/loading',
    component: loading,
  },



]

const router = new VueRouter({
  // mode: 'history',
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.afterEach(() => {
  window.scrollTo(0, 0);
})

export default router
