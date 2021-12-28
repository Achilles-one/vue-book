<template>
  <div class="header">
    <div class="houtai">后台管理</div>
    <div style="flex: 1"></div>
    <div style="width: 100px">
      <el-dropdown>
        <span class="el-dropdown-link"
          >{{ user.nickName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push({ name: 'Person' })">个人信息</el-dropdown-item>
            <el-dropdown-item @click="$router.push({ name: 'Login' })"
              >退出系统</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  props: [ 'user' ],
};
</script>

<style>
.header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
}
.houtai {
  width: 200px;
  padding-left: 30px;
  font-weight: bold;
  color: rgb(23, 23, 238);
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>