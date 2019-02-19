<template lang="html">
  <section class="login-by-phone">
    <el-form :model="formData" :rules="rules" ref="loginForm">
      <el-form-item prop="phone">
        <el-input v-model="formData.phone" placeholder="手机号"></el-input>
      </el-form-item>

      <el-form-item prop="verificationCode">
        <el-input v-model="formData.verificationCode" style="width: 60%;" placeholder="验证码"></el-input>
        <span class="get-code">获取验证码</span>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">短信登录</el-button>
      </el-form-item>
    </el-form>
    <div class="switch-login-type">
      <router-link to="/login/username" class="login-type">用户名密码登录</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      formData: { phone: '', verificationCode: '' },
      rules: {
        phone: [
          { required: true, message: '手机号码不能为空' },
          { pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/, message: '请输入有效的11位手机号' },
        ],
        verificationCode: [
          { required: true, message: '验证码不能为空' },
          { pattern: /^\d{6}$/, message: '验证码长度为6位数字' },
        ],
      },
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '开始登录中...',
            type: 'success',
          })
        } else {
          this.$message({
            message: '用户名或密码格式不正确，无法登录！',
            type: 'warning',
          })
          return false
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.el-button {
  display: block;
  width: 100%;
}
.get-code {
  display: inline-block;
  width: 35%;
  text-align: right;
}
.switch-login-type {
  text-align: right;
  color: #27A9E3;
}
.login-type {
  font-size: 14px;
}
</style>
