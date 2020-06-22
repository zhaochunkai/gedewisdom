<template>
  <div class="main-container">
    <div class="header">
      <div class="logo">
        <img src="../assets/images/main/logo.png" alt />
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="item in navigation"
          :key="item.name"
          :label="item.label"
          :name="item.name"
        />
      </el-tabs>
    </div>
    <router-view />
    <div class="footer">
      <el-form class="demo-dynamic" :model="dynamicValidateForm">
        <el-form-item
          prop="email"
          :rules="[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]"
        >
          <el-input placeholder="邮箱" v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <el-form-item
          prop="title"
          :rules="[{ required: true, message: '主题不能为空', trigger: 'blur' }]"
        >
          <el-input placeholder="主题" v-model="dynamicValidateForm.title"></el-input>
        </el-form-item>
        <el-form-item prop="message" :rules="[{ required: true, message: '请留言', trigger: 'blur' }]">
          <el-input type="textarea" placeholder="留言" v-model="dynamicValidateForm.message"></el-input>
        </el-form-item>
        <el-button type="primarys" plain @click="sendMsg">发送</el-button>
      </el-form>
      <div class="company">
        <div class="c_one">四川格德智汇科技有限公司</div>
        <div class="c_two">蜀ICP备19026949号-1</div>
      </div>
      <div class="company-info">
        <div class="phone">
          <span class="el-icon-phone"></span>
          服务电话
          <span>028-6159-2479</span>
        </div>
        <div class="phone">
          售后电话
          <span>400-0600-236</span>
        </div>
        <div class="address">
          <span class="el-icon-location-outline"></span>
          地址
          <span>成都市高新区天晖中街56栋21层2126-2127号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../http/request";
import { newsUrl } from "../config";
export default {
  data() {
    return {
      dynamicValidateForm: {
        email: "",
        title: "",
        message: ""
      },
      activeName: "home",
      navigation: [
        {
          label: "首页",
          name: "home"
        },
        {
          label: "企业文化",
          name: "culture"
        },
        {
          label: "产品",
          name: "product"
        },
        {
          label: "资源门户平台",
          name: "portal"
        },
        {
          label: "办公大厅",
          name: "hall"
        },
        {
          label: "新闻动态",
          name: "news"
        },
        {
          label: "招聘专栏",
          name: "recruitment"
        }
      ]
    };
  },
  created() {
    this.$router.push("/home").catch(err => {
      err;
    });
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      const loading = this.$loading({
        body: true, //注意另外两个修饰符（全屏和锁定）
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
        switch (tab.name) {
          case "home":
            this.$router.push("/home").catch(err => {
              err;
            });
            break;
          case "culture":
            this.$router.push("/culture").catch(err => {
              err;
            });
            break;
          case "product":
            this.$router.push("/product").catch(err => {
              err;
            });
            break;
          case "portal":
            this.$router.push("/portal").catch(err => {
              err;
            });
            break;
          case "hall":
            this.$router.push("/hall").catch(err => {
              err;
            });
            break;
          case "news":
            this.$router.push("/news").catch(err => {
              err;
            });
            break;
          case "recruitment":
            this.$router.push("/recruitment").catch(err => {
              err;
            });
            break;
        }
      }, 500);
    },
    sendMsg() {
      request
        .post(newsUrl + "/api/app/feedback/feedback", {
          email: this.dynamicValidateForm.email,
          title: this.dynamicValidateForm.title,
          message: this.dynamicValidateForm.message
        })
        .then(res => {
          this.$alert("感谢您的留言，我们会尽快与您回复");
        })
        .catch(err => {
          this.$alert("出错啦！！！");
        });
    }
  }
};
</script>

<style lang="less" scoped>
.main-container {
  width: 100%;
  min-width: 940px;
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 4%;
    .logo {
      margin-top: 10px;
      img {
        height: 30px;
      }
    }
    /deep/.el-tabs {
      .el-tabs__header {
        margin: 0;
        .el-tabs__nav-wrap {
          .el-tabs__nav {
            .el-tabs__item {
              height: 58px;
              line-height: 58px;
            }
            .el-tabs__item.is-top {
              font-family: MicrosoftYaHei;
              font-size: 17px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #000000;
              &:hover {
                color: #0092da;
              }
            }
            .el-tabs__item.is-top.is-active {
              font-family: MicrosoftYaHei;
              font-size: 17px;
              font-weight: bold;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #0092da;
            }
          }
        }
        .el-tabs__nav-wrap::after {
          height: 0;
        }
      }
    }
  }
  .footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: url("../assets/images/main/BotImg.png");
    padding-bottom: 40px;
    /deep/.el-form {
      width: 30%;
      min-width: 320px;
      margin-top: 20px;
      position: relative;
      margin-bottom: 40px;
      .el-input {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        .el-input__inner {
          border-radius: 0;
        }
      }
      .el-textarea {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        min-height: 100px;
        .el-textarea__inner {
          border-radius: 0;
        }
      }
      .el-button {
        margin-top: -70px;
        right: 10px;
        position: absolute;
        border-radius: 0;
        background-color: #0092da;
        span {
          font-family: MicrosoftYaHei;
          font-size: 14px;
          font-weight: bold;
          color: #ffffff;
        }
      }
    }
    .company {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: -20px 0 30px 0;
      color: #fff;
      .c_one {
        margin-right: 40px;
        font-size: 16px;
      }
      .c_two {
        margin-left: 40px;
        font-size: 16px;
      }
    }
    .company-info {
      width: 100%;
      min-width: 940px;
      display: flex;
      justify-content: center;
      .phone,
      .address {
        margin: 0 20px;
        color: #fff;
        font-size: 15px;
        span {
          margin-left: 10px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
