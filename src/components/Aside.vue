<template>
  <div>
    <!-- default-active="user"设置默认高亮 -->
    <!-- router根据index="user"，index="book"的内容进行跳转 -->
    <el-menu :default-active="path" router class="el-menu-vertical-demo">
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/user">用户管理</el-menu-item>
      </el-sub-menu>

      <el-menu-item index="/book">
        <i class="el-icon-menu"></i>
        <span>书籍管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 设置默认高亮的菜单
      path: this.$route.path
    }
  }
};
</script>

<style>
.el-menu-vertical-demo {
  width: 200px;
  min-height: calc(100vh - 50px);
}
</style>