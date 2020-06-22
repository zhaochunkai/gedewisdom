<template>
  <div class="hall">
    <div class="content">
      <div class="c_body">
        <div class="b_top">
          <img src="../assets/images/hall/icon1.png" alt />
        </div>
        <p style="font-family: MicrosoftYaHei;font-size: 32px;color: #000000;margin-top:10px">主管单位</p>
        <p
          style="font-family: MicrosoftYaHei;font-size: 24px;color: #999999;margin-top:10px"
        >适用于政府监管部门使用</p>
        <div class="b_ipt">
          <input
            type="button"
            value="登录"
            style="width: 121px;height: 40px;background-color: #0092da;font-family: MicrosoftYaHei;
            font-size: 24px;color: #ffffff;border:none;margin-top:10px"
            @click="governmentLogin"
          />
          <input
            type="button"
            value="注册"
            style="width: 121px;height: 40px;background-color: #e0b91a;font-family: MicrosoftYaHei;
            font-size: 24px;color: #ffffff;border:none;margin-top:10px"
          />
        </div>
      </div>
      <div class="c_body">
        <div class="b_top">
          <img src="../assets/images/hall/icon2.png" alt />
        </div>
        <p style="font-family: MicrosoftYaHei;font-size: 32px;color: #000000;margin-top:10px">培训单位</p>
        <p
          style="font-family: MicrosoftYaHei;font-size: 24px;color: #999999;margin-top:10px"
        >适合于培训机构学校使用</p>
        <div class="b_ipt">
          <input
            type="button"
            value="登录"
            style="width: 121px;height: 40px;background-color: #0092da;font-family: MicrosoftYaHei;
            font-size: 24px;color: #ffffff;border:none;margin-top:10px"
            @click="trainingLogin"
          />
          <input
            type="button"
            value="注册"
            style="width: 121px;height: 40px;background-color: #e0b91a;font-family: MicrosoftYaHei;
            font-size: 24px;color: #ffffff;border:none;margin-top:10px"
          />
        </div>
      </div>
      <div class="c_body">
        <div class="b_top">
          <img src="../assets/images/hall/icon3.png" alt />
        </div>
        <p style="font-family: MicrosoftYaHei;font-size: 32px;color: #000000;margin-top:10px">大师</p>
        <p
          style="font-family: MicrosoftYaHei;font-size: 24px;color: #999999;margin-top:10px"
        >适合于地方名师使用</p>
        <div class="b_ipt">
          <input
            disabled
            type="button"
            value="登录"
            style="width: 121px;height: 40px;background-color: #0092da;font-family: MicrosoftYaHei;
          font-size: 24px;color: #ffffff;border:none;margin-top:10px;opacity: 0.6;"
          />
          <input
            disabled
            type="button"
            value="注册"
            style="width: 121px;height: 40px;background-color: #e0b91a;font-family: MicrosoftYaHei;
          font-size: 24px;color: #ffffff;border:none;margin-top:10px;opacity: 0.6;"
          />
        </div>
      </div>
      <div class="c_body">
        <div class="b_top">
          <img src="../assets/images/hall/icon4.png" alt />
        </div>
        <p style="font-family: MicrosoftYaHei;font-size: 32px;color: #000000;margin-top:10px">企业</p>
        <p
          style="font-family: MicrosoftYaHei;font-size: 24px;color: #999999;margin-top:10px"
        >适用于公司企业用户使用</p>
        <div class="b_ipt">
          <input
            disabled
            type="button"
            value="登录"
            style="width: 121px;height: 40px;background-color: #0092da;font-family: MicrosoftYaHei;
          font-size: 24px;color: #ffffff;border:none;margin-top:10px;opacity: 0.6;"
          />
          <input
            disabled
            type="button"
            value="注册"
            style="width: 121px;height: 40px;background-color: #e0b91a;font-family: MicrosoftYaHei;
          font-size: 24px;color: #ffffff;border:none;margin-top:10px;opacity: 0.6;"
          />
        </div>
      </div>
      <div class="c_body">
        <div class="b_top">
          <img src="../assets/images/hall/icon5.png" alt />
        </div>
        <p style="font-family: MicrosoftYaHei;font-size: 32px;color: #000000;margin-top:10px">行业学会</p>
        <p
          style="font-family: MicrosoftYaHei;font-size: 24px;color: #999999;margin-top:10px"
        >适合于所有行业协会使用</p>
        <div class="b_ipt">
          <input
            disabled
            type="button"
            value="登录"
            style="width: 121px;height: 40px;background-color: #0092da;font-family: MicrosoftYaHei;
          font-size: 24px;color: #ffffff;border:none;margin-top:10px;opacity: 0.6"
          />
          <input
            disabled
            type="button"
            value="注册"
            style="width: 121px;height: 40px;background-color: #e0b91a;font-family: MicrosoftYaHei;
          font-size: 24px;color: #ffffff;border:none;margin-top:10px; opacity: 0.6;"
          />
        </div>
      </div>
      <div class="c_body">
        <div class="b_top">
          <img src="../assets/images/hall/icon6.png" alt />
        </div>
        <p style="font-family: MicrosoftYaHei;font-size: 32px;color: #000000;margin-top:10px">送培单位</p>
        <p
          style="font-family: MicrosoftYaHei;font-size: 24px;color: #999999;margin-top:10px;width: 329px;"
        >适用于学员输送部门·机构使用</p>
        <div class="b_ipt">
          <input
            disabled
            type="button"
            value="登录"
            style="width: 121px;height: 40px;background-color: #0092da;font-family: MicrosoftYaHei;
          font-size: 24px;color: #ffffff;border:none;margin-top:10px; opacity: 0.6;"
          />
          <input
            disabled
            type="button"
            value="注册"
            style="width: 121px;height: 40px;background-color: #e0b91a;font-family: MicrosoftYaHei;
          font-size: 24px;color: #ffffff;border:none;margin-top:10px;opacity: 0.6;"
          />
        </div>
      </div>
      <div class="c_body">
        <div class="b_top">
          <img src="../assets/images/hall/icon7.png" alt />
        </div>
        <p style="font-family: MicrosoftYaHei;font-size: 32px;color: #000000;margin-top:10px">学员</p>
        <p
          style="font-family: MicrosoftYaHei;font-size: 24px;color: #999999;margin-top:10px"
        >适合于学员使用</p>
        <div class="b_ipt">
          <input
            disabled
            type="button"
            value="登录"
            style="width: 121px;height: 40px;background-color: #0092da;font-family: MicrosoftYaHei;
          font-size: 24px;color: #ffffff;border:none;margin-top:10px;opacity: 0.6;"
          />
          <input
            disabled
            type="button"
            value="注册"
            style="width: 121px;height: 40px;background-color: #e0b91a;font-family: MicrosoftYaHei;
          font-size: 24px;color: #ffffff;border:none;margin-top:10px;opacity: 0.6;"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/http/request.js";
import { trainingLogin, organizerLogin } from "@/config.js";
export default {
  data() {
    // 表单验证内容
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    // 验证部分结束
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    governmentLogin(){
      window.open('http://ets-gov.gedewisdom.com');
    },
    trainingLogin(){
      window.open('https://ets.gedewisdom.com/');
    }

  }
};
</script>
<style lang="less" scoped>
.hall {
  width: 100%;
  display: flex;
  justify-content: center;
  // background: -webkit-gradient(
  //   linear,
  //   0 0,
  //   0 100%,
  //   from(＃2074af),
  //   to(＃2c91d2)
  // );
  // 第一个参数：表示的是渐变的类型linear线性渐变第二个参数：分别对应x，y方向渐变的起始位置
  // 第三个参数：分别对应x，y方向渐变的终止位置第四个参数：设置了起始位置的颜色第五个参数：设置了终止位置的颜色
  background-image: linear-gradient(180deg, #b8d2df 1%, #e2eef4 100%),
    linear-gradient(#000000, #000000);
  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 88px;
    .c_body {
      width: 264px;
      height: 289px;
      margin: 150px 0 0 160px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .b_top {
        width: 140px;
        height: 140px;
        img {
          width: 100%;
        }
      }
      .b_ipt {
        .el-dialog__wrapper {
          .el-dialog {
            .el-dialog__body {
              .one_title {
                display: flex;
                flex-direction: column;
                align-items: center;
                .title_top {
                  font-family: AdobeHeitiStd-Regular;
                  font-size: 24px;
                  color: #010101;
                }
                .title_bot {
                  margin-top: 10px;
                  font-family: MicrosoftYaHei;
                  font-size: 18px;
                  color: #000000;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

              
              