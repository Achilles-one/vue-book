<template>
  <div class="login">
    <div class="content">
      <div class="top">欢迎登录</div>
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
        <el-form-item>
          <el-button class="btn" type="primary" @click="login">登录</el-button>
        </el-form-item>
        <el-button class="reg" @click="goRegister">没有账号，去注册</el-button>
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
      },
    };
  },
  //  mounted() {
  //   sessionStorage.removeItem("user")

  //   window.onresize = () => {
  //     const windowWidth = document.body.clientWidth
  //     const windowHeight = document.body.clientHeight
  //     const windowAspectRatio = windowHeight / windowWidth
  //     let videoWidth
  //     let videoHeight
  //     if (windowAspectRatio < 0.5625) {
  //       videoWidth = windowWidth
  //       videoHeight = videoWidth * 0.5625
  //       this.fixStyle = {
  //         height: windowWidth * 0.5625 + 'px',
  //         width: windowWidth + 'px',
  //         'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
  //         'margin-left': 'initial'
  //       }
  //     } else {
  //       videoHeight = windowHeight
  //       videoWidth = videoHeight / 0.5625
  //       this.fixStyle = {
  //         height: windowHeight + 'px',
  //         width: windowHeight / 0.5625 + 'px',
  //         'margin-left': (windowWidth - videoWidth) / 2 + 'px',
  //         'margin-bottom': 'initial'
  //       }
  //     }
  //   }
  //   window.onresize()
  // },

  created() {
    sessionStorage.removeItem("user");
  },
  methods: {
    login() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          let url = "/user/login";
          request.post(url, this.form).then((res) => {
            // console.log(res);
            if (res.code === "0") {
              this.$message({
                type: "success",
                message: "登录成功",
              });
              //   登录成功跳转页面
              this.$router.push({ name: "User" });
              // 缓存用户信息
              sessionStorage.setItem("user", JSON.stringify(res.data));
              
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
    goRegister() {
      this.$router.push({ name: "Register" });
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
.reg {
  width: 100%;
}
</style>