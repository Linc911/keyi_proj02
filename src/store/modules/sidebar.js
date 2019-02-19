import httpAPI from '@/config/http/API'
const state = {
  menu: [],
  activeMenu: ''
}

const getters = {
  menu: (state) => state.menu,
  activeMenu: (state) => state.activeMenu
}

const mutations = {
  refreshMenu: (state, payload) => (state.menu = payload),
  // payload 传入的是菜单的中文名称，不是id
  updateActiveMenu: (state, payload) => (state.activeMenu = payload)
}

const actions = {
  refreshMenu: ({
    commit
  }) => {
    httpAPI.getMenu().done(res => {
      const menu = res.data
      commit('refreshMenu', menu)
    })
  },
  updateActiveMenu: ({
    commit
  }, payload) => commit('updateActiveMenu', payload)
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}