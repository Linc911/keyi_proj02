// import axios from 'axios'
import $ from 'jquery'
import router from '@/router/index'
import httpAPI from '@/config/http/API'
import { Message } from 'element-ui'
const state = {
  token: {}
}

const getters = {
  token (state) {
    return state.token
  }
}

const mutations = {
  initToken (state, payload) {
    state.token = payload
  },
  clearToken (state) {
    state.token = {}
  }
}

const actions = {
  clearToken ({ commit }) {
    commit('clearToken')
  },
  // 登录 -- 存储token，调整到主页
  login ({ commit, state }, payload) {
    httpAPI.user_login(payload).done(res => {
      
      this.commit('tab/clearRoutes') // 清除所有的浏览记录

      router.push({ name: 'HomePage' })
    })
  },
  // 登出 -- token设置为空，调整到用户登录页
  logout ({ commit }) {
    $.get('/api-u/sys/logout').then(response => {
      commit('clearToken') // 清除token相关的数据
      this.commit('tab/clearRoutes') // 清除所有的浏览记录
      this.commit('sidebar/updateActiveMenu', 'demo') // 同步更新侧边栏菜单，全部收起状态

      router.push({ name: 'LoginUsername' })
    }).catch(error => console.log(error))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
