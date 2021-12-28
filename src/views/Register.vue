<template>
  <div class="login">
    <div class="content">
      <div class="top">欢迎注册</div>
      <el-form
        class="form"
        ref="form"
        :model="form"
        size="normal"
        :rules="rules"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="form.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirm">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="form.confirm"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" @click="register">注册</el-button>
        </el-form-item>
          <el-button class="log" @click="goLogin">已有账号，去登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  data() {
    return {
      form: {},
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入用户密码",
            trigger: "blur",
          },
        ],
        confirm: [
          {
            required: true,
            message: "请再次输入用户密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    register() {
      if (this.form.password !== this.form.confirm) {
        this.$message({
          type: "error",
          message: "两次密码输入不一致",
        });
        return;
      }

      this.$refs["form"].validate((valid) => {
        if (valid) {
          let url = "/user/register";
          request.post(url, this.form).then((res) => {
            console.log(res);
            if (res.code === "0") {
              this.$message({
                type: "success",
                message: "注册成功",
              });
              //   注册成功跳转页面
              this.$router.push({ name: "Login" });
            } else {
              this.$message({
                type: "error",
                message: res.msg,
              });
            }
          });
        }
      });
    },
    goLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
.login {
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  overflow: hidden;
}
.content {
  width: 400px;
  margin: 100px auto;
}
.top {
  color: rgb(223, 125, 46);
  font-size: 30px;
  text-align: center;
  padding: 30px 0;
}
.btn {
  width: 100%;
}
.log {
  width: 100%;
}
</style>