import Vue from 'vue';
import Vuex from 'vuex';
import tab from './modules/tab'
import auth from './modules/auth'
import sidebar from './modules/sidebar'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tab,
    auth,
    sidebar
  },
});
