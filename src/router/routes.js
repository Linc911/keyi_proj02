/* ========================================== 第一 层 ============================================ */

const NotFound = resolve => require(['@/views/NotFound'], resolve)
/* ========================================== 登   录 ============================================= */

const LoginLayout = resolve => require(['@/views/login/LoginLayout'], resolve)
const LoginUsername = resolve => require(['@/views/login/LoginUsername'], resolve)
const LoginPhone = resolve => require(['@/views/login/LoginPhone'], resolve)

/* ========================================== 主   页 ============================================ */

const HomeLayout = resolve => require(['@/views/HomeLayout'], resolve)
const HomePage = resolve => require(['@/views/HomePage'], resolve)

export default [{
    name: 'NotFound',
    path: '*',
    component: NotFound,
    meta: {
      title: '404页面',
      keepAlive: true,
    },
  },
  {
    path: '',
    redirect: '/login/username',
  },
  /* ========================================== 登录模块 ============================================ */
  {
    name: 'LoginLayout',
    path: '/login',
    redirect: '/login/username',
    component: LoginLayout,
    children: [{
        name: 'LoginUsername',
        path: 'username',
        component: LoginUsername,
        meta: {
          title: '账号登录',
          keepAlive: true,
        },
      },
      {
        name: 'LoginPhone',
        path: 'phone',
        component: LoginPhone,
        meta: {
          title: '手机登录',
          keepAlive: true,
        },
      },
    ],
  },
    /* ========================================== 主页 ============================================ */
  {
    name: 'HomeLayout',
    path: '/homelayout',
    redirect: '/home',
    component: HomeLayout,
    children: [
      {
        name: 'HomePage',
        path: '/home',
        component: HomePage,
        meta: {
          title: '科怡系统首页',
          breadcrumb: [
            { name: '系统首页' }
          ]
        }
      },
    ]
  }
];