<template lang="html">
  <section class="the-header clearfix">
    <!-- 左侧logo部分 -->
    <div class="head-logo">
      <router-link to="/home" class="head-logo-link">科怡档案</router-link>

      <!-- 页面前进与后退 -->
      <div class="history-go">
        <div @click="myWindow.history.back()" class="history-go-item">
          <i class="el-icon-d-arrow-left"></i>
          <span>上一页</span>
        </div>
        <div @click="myWindow.history.forward()" class="history-go-item">
          <span>下一页</span>
          <i class="el-icon-d-arrow-right"></i>
        </div>
      </div>
    </div>

    <!-- 右侧用户信息部分 -->
    <div class="head-user">
      <el-dropdown @command="handleDropdownCommand">
        <div class="user-info">
          <img :src="avatarUrl" class="user-avatar" alt="User avatar">
          <span class="user-username">{{userInfo.nickname}}</span>
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in menuDropdown" :key="item.name" :command="item.command">
            <i :class="item.icon" class="fa"></i>
            <span>{{item.name}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      userInfo: { nickname: '', sex: 0 },
      menuDropdown: [
        { name: '个人信息', icon: 'fa-user-circle', command: 'info' },
        { name: '上传头像', icon: 'fa-drupal', command: 'avatar' },
        { name: '绑定手机', icon: 'fa-mobile-phone', command: 'phone' },
        { name: '退出', icon: 'fa-sign-out', command: 'logout' }
      ]
    }
  },
  created () {
    this.getUserInfo()
  },
  computed: {
    avatarUrl () {
      const male = require('@/assets/images/avatar-male.png')
      const female = require('@/assets/images/avatar-female.png')

      return this.userInfo.sex ? male : female
    }
  },
  methods: {
    // 点击不同的用户下拉框，响应不同的状态
    handleDropdownCommand (command) {
      switch (command) {
        case 'info':
          this.$router.push({ name: 'UserActiveInfoUpdate' })
          break
        case 'avatar':
          this.$router.push({ name: 'UserActiveAvatarUpdate' })
          break
        case 'phone':
          this.$router.push({ name: 'UserActivePhoneUpdate' })
          break
        case 'logout':
          this.$store.dispatch('auth/logout')
          break
        default:
          this.$message.error('操作异常，请检查代码！')
      }
    },
    getUserInfo () {
      this.$httpAPI.fetchUserInfo().done(response => {
        this.userInfo = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.head-logo {
  float: left;
  line-height: 60px;
}
.head-logo-link {
  font-size: 22px;
  color: #333;
}

// 用户登录信息
.head-user {
  float: right;
}
.user-info {
  display: inline-block;
  line-height: 60px;
}
.user-avatar {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
  background-color: #eee;
  border-radius: 100%;
}
.user-username {
  font-size: 14px;
  color: #777;
}
.el-dropdown-menu .fa {
  width: 24px;
  font-size: 18px;
  text-align: center;
}
.el-dropdown-menu .fa-mobile-phone {
  position: relative;
  top: 2px;
  font-size: 24px;
}

// 页面前进与后退
.history-go {
  display: inline-block;
  padding-left: 60px;
}
.history-go-item {
  display: inline-block;
  font-size: 14px;
  color: #189F92;
  cursor: pointer;
}
.history-go-item:last-child {
  margin-left: 20px;
}
</style>
