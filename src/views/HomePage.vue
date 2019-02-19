<template>
  <div class="home-index">
    主页
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'homeIndex',
}
</script>

<style lang="scss" scoped>
.data-summary {
  width: 960px;
  margin-bottom: 20px;
}
.data-summary-item {
  float: left;
  width: 18%;
  height: 80px;
  padding: 15px;
  margin: 0 1%;
  cursor: pointer;
  &.red {
    background-color: #FC7A6A;
  }
  &.blue {
    background-color: #60A5B5;
  }
  &.orange {
    background-color: #F1C77A;
  }
  &.purple {
    background-color: #8994A8;
  }
  &.green {
    background-color: #5AC79D;
  }
}
.data-summary-number {
  font-size: 20px;
  color: #fff;
}
.data-summary-title {
  font-size: 12px;
  color: #fff;
}
// 优博公告
.note-item {
  line-height: 26px;
}
.note-info {
  float: left;
}
.note-new {
  font-size: 14px;
  color: red;
}
.note-time {
  float: right;
  color: #bbb;
}
</style>
