import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from './routes';
import store from '@/store'

Vue.use(VueRouter);
const Router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: Routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0,
    };
  },
});
// 配置路由守卫
Router.beforeEach((to, from, next) => {
  // 每次跳转路由，修改页签标题
  document.title = to.meta.title;
  // 每次跳转路由，将浏览记录压入 vuex 中的对象
  const routes = store.getters['tab/routes']
  const existed = routes.some(route => route.path === to.path)
  // 跳转主页时，不存储记录；检验是否已经存储过，不存储重复的路由; 最多为8个
  if (to.path !== '/home' && to.path !== '/login/username') {
    if (!existed) {
      const titleRepeated = routes.some(route => route.name === to.meta.title)
      if (!titleRepeated && to.name !== 'NotFound') {
        store.dispatch('tab/initRoutesStatus')
        store.dispatch('tab/addRoute', {
          name: to.meta.title,
          path: to.path,
          active: true,
        })

        if (routes.length >= 8) {
          store.dispatch('tab/removeRoute', 0)
        }
      }
    } else {
      store.dispatch('tab/highlightRoute', to.path)
    }
  }
  next();
});
export default Router;
