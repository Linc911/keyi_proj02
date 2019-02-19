<template lang="html">
  <section class="login-username">
    <el-form :model="formData" :rules="rules" ref="loginForm">
      <el-form-item prop="username">
        <el-input v-model="formData.username" placeholder="用户名" autofocus />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          @keyup.native.enter="submitForm('loginForm')"
          v-model="formData.password"
          type="password"
          placeholder="密码"
        />
     </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="switch-login-type">
      <router-link :to="{ name: 'LoginPhone' }" class="login-type">短信登录</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginUsername',
  data () {
    return {
      formData: { username: '', password: '' },
      rules: {
        username: [
          { required: true, message: '用户名不能为空' },
          { min: 2, max: 20, message: '用户名长度在 2 - 20 字符之间' },
        ],
        password: [
          { required: true, message: '密码不能为空' },
          { min: 6, max: 20, message: '密码长度在 6 - 20 字符之间' },
        ],
      },
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$store.dispatch('auth/login', this._generatePairKeys(this.formData))
          this.$store.dispatch('auth/login', this.formData)
        } else {
          this.$message.warning('用户名或密码格式不正确，无法登录！')
          return false
        }
      })
    },
    _generatePairKeys (obj) {
      let result = ''
      for (const k in obj) {
        result += `&${k}=${obj[k]}`
      }

      return result.substr(1)
    },
  },
}
</script>

<style lang="scss" scoped>
.el-button {
  display: block;
  width: 100%;
}
.switch-login-type {
  text-align: right;
  color: #27A9E3;
}
.login-type {
  font-size: 14px;
}
</style>
