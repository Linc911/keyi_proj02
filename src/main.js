import Vue from 'vue';
// 路由
import router from '@/router';
// 共享数据仓库
import store from '@/store/index';
/* 请求插件resource */
// var VueResource = require('vue-resource');
// Vue.use(VueResource);
// Vue.http.options.root = '/root';
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
// Vue.http.options.emulateJSON = true;
/* jquery */
// import $ from "jquery"
/* http */
import API from '@/config/http/API'
/* 引入其他插件 */
import _ from 'lodash';
import ElementUI from 'element-ui';
// 引入自定义指令、自定义过滤器
// 公共模块
/* CSS 文件引入 */
import '@/styles/index.scss';
// FontAwesome
import 'font-awesome/css/font-awesome.css';
// Animate.css
import 'animate.css/animate.min.css';

import App from './App.vue';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

// Vue.prototype.$$ = $;
Vue.prototype.$_ = _;
Vue.prototype.$httpAPI = API;
Vue.prototype.myWindow = window;

Vue.config.productionTip = false;// 设置为 false 以阻止 vue 在启动时生成生产提示

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
