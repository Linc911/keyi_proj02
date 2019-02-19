<template lang="html">
  <div class="the-sidebar">
    <el-menu
      :default-active="activeMenu"
      mode="vertical"
      unique-opened
      text-color="#fff"
      background-color="#324057"
      active-text-color="#409eff"
    >
      <template v-for="group in menu">
        <el-submenu :index="group.name" :key="group.id">
          <template slot="title">
            <i :class="`fa ${group.css}`"></i>
            <span>{{group.name}}</span>
          </template>

          <router-link v-for="item in group.child" :to="item.url" :key="item.id">
            <el-menu-item
              @click="handleMenuItemClick"
              :index="item.name"
              :class="{ 'unprepared-link': item.url === '/users/unset' }"
            >
              <i :class="`fa ${item.css}`"></i>
              <span>{{item.name}}</span>
            </el-menu-item>
          </router-link>
        </el-submenu>
      </template>

      <!-- 仅仅为了做全部收取的状态，没有意义；如果有更好的方案，可以删除下面代码 -->
      <el-submenu index="demoParent" style="display: none">
        <el-menu-item index="demo">
          <span>Demo</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('sidebar')

export default {
  name: 'TheSidebar',
  data () {
    return {
      //     id: 'test11',
      //     name: '港彩管理',
      //     path: '',
      //     icon: 'fa-user',
      //     children: [
      //       { id: 'test1101', name: '六合彩开盘开奖', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1102', name: '六合彩注单查询', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1103', name: '六合彩会员报表', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1104', name: '六合彩基础设置', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1105', name: '六合彩赔率设置', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1106', name: '六合彩总报表', path: '/users/unset', icon: 'fa-cubes' }
      //     ]
      //   },
      //   {
      //     id: 'test16',
      //     name: '体育管理',
      //     path: '',
      //     icon: 'fa-user',
      //     children: [
      //       { id: 'test1601', name: '三昇体育注单', path: '/sport/three/bets', icon: 'fa-cubes' },
      //       { id: 'test1602', name: '三昇额度转换', path: '/sport/three/transfer', icon: 'fa-cubes' },
      //       { id: 'test1603', name: '体育总报表', path: '/sport/statistics', icon: 'fa-cubes' }
      //     ]
      //   },
      //   {
      //     id: 'test17',
      //     name: '电子管理',
      //     path: '',
      //     icon: 'fa-user',
      //     children: [
      //       { id: 'test1701', name: 'AG电子游戏', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1702', name: 'PT电子游戏', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1703', name: 'MG电子游戏', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1704', name: 'HB电子游戏', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1705', name: 'MW电子游戏', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1706', name: 'SA电子游戏', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1707', name: '电子总报表', path: '/users/unset', icon: 'fa-cubes' }
      //     ]
      //   },
      //   {
      //     id: 'test18',
      //     name: '视讯管理',
      //     path: '',
      //     icon: 'fa-user',
      //     children: [
      //       { id: 'test1801', name: 'OB视讯', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1802', name: 'AG视讯', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1803', name: 'OG视讯', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1804', name: 'SA视讯', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1805', name: 'BBIN视讯', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1806', name: 'DS视讯', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1807', name: '视讯总报表', path: '/users/unset', icon: 'fa-cubes' }
      //     ]
      //   }
      // ]
    }
  },
  created () {
    this.fetchSidebarMenu()
  },
  computed: mapGetters([
    'menu',
    'activeMenu'
  ]),
  methods: {
    ...mapActions([
      'refreshMenu',
      'updateActiveMenu'
    ]),
    handleMenuItemClick (menu) {
      this.updateActiveMenu(menu.index)
    },
    // 获取全部菜单
    fetchSidebarMenu () {
      this.refreshMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-menu .fa {
    margin-right: 6px;
    font-size: 20;
    color: #fff;
  }

  .unprepared-link {
    text-decoration: line-through;
    color: #de8c8c !important;
  }
</style>
