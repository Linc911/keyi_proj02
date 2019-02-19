<template lang="html">
  <div class="breadcrumb-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumb"
        :key="index"
        :to="item.url"
        :class="{ activeLink: item.path }"
      >
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'BaseBreadcrumb',
  props: {
    breadcrumb: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.breadcrumb-container {
  margin-top: 40px;
}
.el-breadcrumb {
  padding: 12px;
  border-bottom: 1px solid #e5e5e5;
}
</style>
