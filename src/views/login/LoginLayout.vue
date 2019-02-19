<template lang="html">
  <section class="login-layout">
    <transition
      mode="out-in"
      enter-active-class="animated pulse"
      leave-active-class="animated zoomOut fast"
    >
    <div class="login-card" v-show="show">
      <h1 class="login-title">后台管理系统</h1>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'LoginLayout',
  data () {
    return {
      show: false,
    }
  },
  mounted () {
    this.show = true
    this.$httpAPI.getTest().done(res => console.log(res));
  },
  beforeDestroy () {
    this.show = false
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.login-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 600px;
  // background: url(../../assets/images/login-bg.png) no-repeat center / cover;
  background-color: #7a8b9b;
}
.login-card {
  width: 400px;
  min-width: 320px;
  padding: 40px;
  background-color: #fff;
  border-radius: 4px;
}
.login-title{
  padding: 0.8em 0;
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #fff;
  background-color: $--color-primary;
}
</style>
