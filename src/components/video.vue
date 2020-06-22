<template>
  <div class="video">
    <div class="header">
      <div class="header_img">
        <img
          src="../assets/images/portal/logo-white.png"
          height="30px"
          title="点击跳转到首页"
          @click="Jump"
          style="cursor:pointer"
        />
        <span></span>
        <h3>门户资源平台</h3>
      </div>
    </div>
    <div class="content">
      <div class="c_title">
        <span>当前位置：</span>
        <span>门户资源</span>
        <span>&gt;</span>
        <span>{{VideoDetail.name}}</span>
      </div>
      <div class="c_body">
        <div class="b_left">
          <div style="margin-top:10px">
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 20px;
	        color: #000000;font-weight:bold"
            >{{VideoDetail.name}}</span>
          </div>
          <div style="margin:10px 0;">
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 15px;
	        color: #666666; 
          font-weight:bold"
            >资源类型: {{VideoDetail.type}}</span>
          </div>
          <video
            :src="url"
            width="100%"
            height="600px"
            style="outline:none;backgroundColor:#000000"
            controls
            controlslist="nodownload"
            v-if="showVideo"
          >该浏览器版本过低，无法加载视频文件</video>
          <iframe
            :src="'../../static/pdfjs/web/viewer.html?file='+url"
            frameborder="0"
            width="100%"
            height="600px"
            v-else
          ></iframe>
        </div>
        <div class="b_right">
          <div style="margin-top:10px">
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 14px;
	        color: #666666; 
          font-weight:bold"
            >关键词:</span>
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 14px;
	        color: #000000 "
            >{{VideoDetail.keyWord}}</span>
          </div>
          <div style="margin-top:10px">
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 14px;
	        color: #666666; 
          margin-top:20px;font-weight:bold"
            >发布机构:</span>
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 14px;
	        color: #000000"
            >{{VideoDetail.tenantName}}</span>
          </div>
          <div style="margin-top:10px">
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 14px;
	        color: #666666; 
          margin-top:20px;font-weight:bold"
            >发布时间:</span>
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 14px;
	        color: #000000 "
            >{{VideoDetail.creationTime | dataFilter}}</span>
          </div>
          <div style="margin-top:10px">
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 14px;
	        color: #666666; 
          margin-top:20px;font-weight:bold"
            >是否资源付费：</span>
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 14px;
	        color: #000000;"
            >{{VideoDetail.price ===0?'否':'是'}}</span>
          </div>
          <div style="margin-top:10px">
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 14px;
	        color: #666666; 
          margin-top:20px;font-weight:bold"
            >支付金额:</span>
            <span
              v-if="VideoDetail.price!=0"
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 24px;
	        color: #e23b3b;font-weight:bold"
            >{{VideoDetail.price}}/元</span>
            <span
              v-else
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 16px;
	        color: #000000;"
            >免费</span>
          </div>
          <div style="margin-top:10px">
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 14px;
	        color: #666666; 
          margin-top:20px;font-weight:bold"
            >到期时间:</span>
            <span
              style="
	        font-family: MicrosoftYaHei;
	        font-size: 14px;
	        color: #000000 "
            >{{VideoDetail.shareEndDate | dataFilter}}</span>
          </div>
          <el-button type="primary" @click="dialogVisible = true" disabled>付费</el-button>
          <el-dialog
            title="支付订单"
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            style="width: 400px;
	              height: 600px;
	              background-color: #ffffff;"
          >
            <div class="out_content">
              <div class="alipay">
                <div class="alipay_left">
                  <img src="../assets/images/video/alipay.png" alt />
                  <span
                    style="
	                  font-family: MicrosoftYaHei;
	                  font-size: 18px;
	                  color: #999999;
                    margin-left:8px"
                  >支付宝</span>
                </div>
                <div class="alipay_right">
                  <input type="radio" name id="1" />
                </div>
              </div>
              <div class="wechat">
                <div class="wechat_left">
                  <img src="../assets/images/video/wechat.png" alt />
                  <span
                    style="
                    font-family: MicrosoftYaHei;
	                  font-size: 18px;
	                  color: #999999;
                    margin-left:8px"
                  >微信</span>
                </div>
                <div class="wechat_right">
                  <input type="radio" name id="2" />
                </div>
              </div>
              <div class="qr_code">
                <img src="../assets/images/video/QRcode.png" alt />
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogVisible = false" style="margin-top:14px">确 定</el-button>
            </span>
            <div class="footer_left">
              <p style="font-family: MicrosoftYaHei;font-size: 14px;color: #333333;">订单金额:</p>
              <p style="font-family: MicrosoftYaHei;font-size: 24px;color: #e23b3b;">88.00/元</p>
            </div>
          </el-dialog>
        </div>
      </div>

      <!-- </div> -->
    </div>
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
import { resource, newsUrl, baseURL } from "../config";
export default {
  data() {
    return {
      url: "",
      showVideo: true,
      dynamicValidateForm: {
        email: "",
        title: "",
        message: ""
      },
      dialogVisible: false,
      price: 20,
      time: "",
      VideoDetail: {}
    };
  },
  created() {
    this.getVideoDetail(this.$route.params.id);
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    Jump() {
      this.$router.push("/home").catch(err => {
        err;
      });
    },
    getVideoDetail(id) {
      request
        .get(resource + `/api/app/resource/get-preview/${id}`)
        .then(res => {
          this.VideoDetail = res.data;
          this.url = res.data.filePath; //resource + "/" +
          let str = res.data.filePath.substr(
            res.data.filePath.lastIndexOf(".") + 1
          );
          if (str == "pdf") {
            this.showVideo = false;
          } else {
            this.showVideo = true;
          }
        });
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
.video {
  min-width: 940px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3ba9df;
    .header_img {
      color: #fff;
      display: flex;
      align-items: center;
      span {
        width: 20px;
        height: 2px;
        background-color: #ffffff;
        margin-left: 10px;
      }
      h3 {
        margin: -6px 0 0 10px;
        min-width: 120px;
      }
    }
  }
  .content {
    width: 80%;
    margin: 44px 0;
    display: flex;
    flex-direction: column;
    .c_title {
      margin: 0 0 10px 10px;
      span {
        font-family: MicrosoftYaHei;
        font-size: 15px;
        color: #666666;
        font-weight: bold;
      }
    }
    .c_body {
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color: #ffffff;
      padding: 30px;
      position: relative;
      .b_left {
        width: 80%;
      }
      .b_right {
        width: 20%;
        display: flex;
        flex-direction: column;
        margin: 60px 0 0 20px;
        .el-button {
          position: absolute;
          bottom: 34px;
          width: 14%;
          margin-top: 40px;
          font-family: MicrosoftYaHei;
          font-size: 18px;
          letter-spacing: 7px;
          color: #ffffff;
          border-radius: 6px;
        }
        .el-button.el-button--default.is-disabled {
          background-color: #cccccc;
        }
        .el-dialog__wrapper {
          position: fixed;
          top: 50%;
          margin-top: -300px;
          left: 50%;
          margin-left: -200px;
          box-sizing: border-box;
          /deep/.el-dialog {
            width: 100%;
            height: 100%;
            margin: 0 !important;
            position: relative;
            .el-dialog__header {
              background-color: #eeeeee;
              .el-dialog__title {
                //支付订单内容
              }
              .el-dialog__headerbtn {
                //头部关闭按钮x
              }
            }
            .el-dialog__body {
              padding: 0;
              .out_content {
                .alipay {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 10px 28px 6px 32px;
                  box-sizing: border-box;
                  border-bottom: 2px solid #eeeeee;
                  .alipay_left {
                    display: flex;
                    align-items: center;
                  }
                  .alipay_right {
                  }
                }
                .wechat {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 10px 28px 6px 32px;
                  box-sizing: border-box;
                  .wechat_left {
                    display: flex;
                    align-items: center;
                  }
                  .wechat_right {
                  }
                }
                .qr_code {
                  display: flex;
                  justify-content: center;
                  margin-top: 20px;
                }
              }
            }
            .el-dialog__footer {
              width: 100%;
              height: 80px;
              position: absolute;
              bottom: 0;
              background-color: #eeeeee;
              z-index: 1;
            }
            .footer_left {
              position: absolute;
              bottom: 14px;
              left: 20px;
              z-index: 2;
            }
          }
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
        margin-top: 18px;
        .el-input__inner {
          border-radius: 0;
        }
      }
      .el-textarea {
        display: flex;
        justify-content: center;
        margin-top: 18px;
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
