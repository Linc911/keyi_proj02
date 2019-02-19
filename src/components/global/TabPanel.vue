<template lang="html">
  <div class="tab-panel">
    <el-tag @click.native="highlightHomeTab" :class="{ current: $route.name === 'HomePage' }">
      <i class="fa fa-home"></i>
      <span>主页</span>
    </el-tag>
    <el-tag
      v-for="(tag, index) in routes"
      :key="tag.path"
      @click.native="openRoute(tag.path, tag.name)"
      @contextmenu.native.prevent="openContextMenu(index)"
      @close="closeRoute(index)"
      :class="{ current: tag.active }"
      closable
    >{{tag.name}}</el-tag>

    <contextMenu class="context-menu-list" ref="ctxMenu">
      <li @click="removeRoute(activeIndex)" class="context-menu-item">关闭当前标签</li>
      <li @click="removeOtherRoutes(activeIndex)" class="context-menu-item">关闭其他标签</li>
      <li @click="removeLeftRoutes(activeIndex)" class="context-menu-item">关闭左标签</li>
      <li @click="removeRightRoutes(activeIndex)" class="context-menu-item">关闭右标签</li>
      <li @click="clearRoutes()" class="context-menu-item">关闭所有标签</li>
    </contextMenu>
  </div>
</template>

<script>
import contextMenu from 'vue-context-menu'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('tab')

export default {
  name: 'TabPanel',
  components: {
    contextMenu
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: mapGetters([
    'routes'
  ]),
  methods: {
    ...mapGetters([
      'getPreviousRoutePath'
    ]),
    ...mapActions([
      'initRoutesStatus',
      'highlightRoute',
      'removeRoute',
      'removeLeftRoutes',
      'removeRightRoutes',
      'removeOtherRoutes',
      'clearRoutes'
    ]),
    openContextMenu (index) {
      this.activeIndex = index
      this.$refs.ctxMenu.open()
    },
    // 点击主页时，高亮标签；改变其他标签高亮状态
    highlightHomeTab () {
      this.initRoutesStatus()
      this.$router.push({ name: 'HomePage' })
    },
    openRoute (path, tagName) {
      this.$router.push(path)
      this.highlightRoute(path)

      // 侧边栏跳到响应的标签栏中
      this.$store.dispatch('sidebar/updateActiveMenu', tagName)
    },
    // 关闭标签，跳转到上一个标签页；直到主页
    closeRoute (index) {
      this.removeRoute(index)
    }
  }
}
</script>

<style scoped>
.tab-panel {
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  z-index: 10;
  overflow: auto;
}
.el-tag {
  height: 39px;
  line-height: 39px;
  font-size: 14px;
  border-radius: 0;
  border: none;
  border-right: 1px solid #e5e5e5;
  background-color: #fff;
  cursor: pointer;
}
.el-tag.current {
  background-color: rgba(24, 159, 146, 0.1);
}
.fa-home {
  padding-right: 5px;
  font-size: 15px;
}
.context-menu-item {
  width: 130px;
  padding: 0 8px;
  margin: 0;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  color: #606266;
  cursor: pointer;
}
.context-menu-item:hover {
  background-color: #e8f5f4;
  color: #46b2a8;
}
</style>
