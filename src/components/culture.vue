<template>
  <div class="culture">
    <div class="top">
      <div class="first">
        <el-carousel :interval="5000" arrow="always" :height="imgHeight1">
          <el-carousel-item v-for="item in imgArr1" :key="item.banenerimg1">
            <img ref="imgHeight1" :src="item.bannerimg1" alt @load="imgLoad1" />
          </el-carousel-item>
        </el-carousel>
        <div class="one_content">
          <div style="width: 60px;height: 6px;background-color: #3ba9df;margin-right: 12px;"></div>
          <div
            style="width: 131px;height: 32px;line-height: 32px;font-family: MicrosoftYaHei;font-size: 32px;font-weight: bold;color: #0092da;margin-right: 12px;"
          >企业概况</div>
          <div style="width: 60px;height: 6px;background-color: #3ba9df;margin-right: 22px;"></div>
        </div>
        <div class="two_content">
          四川格德智汇科技有限公司总部位于成都高新区，注册资本2000万，是一家致力于
          为终身教育、职业教育提供信息化与智慧校园解决方案的运营服务商，专注于大数据、
          物联网、人工智能、云计算等新技术应用领域，结合教育行业各应用场景进行软硬件
          产品开发的高科技企业。
        </div>
      </div>
      <div class="second">
        <div class="s_top">
          <div class="top_content">
            <div style="width: 60px;height: 6px;background-color: #3ba9df;margin: 6px;"></div>
            <div
              style="width: 131px; height: 32px;line-height: 32px;font-family: MicrosoftYaHei;font-size: 32px;font-weight: bold;color: #0092da;margin-right: 6px;"
            >企业文化</div>
            <div style="width: 60px;height: 6px;background-color: #3ba9df;margin-right: 6px;"></div>
          </div>
        </div>
        <div class="s_bot">
          <div class="b_left">
            <div
              class="l_title"
              style="font-family: MicrosoftYaHei;font-size: 24px;font-weight: bold;color: #ffffff"
            >价值观</div>
            <div
              class="l_des"
              style="font-family: MicrosoftYaHei;font-size: 18px;font-weight: bold;color: #ffffff;margin-top: 60px"
            >格物致知，德行教育</div>
          </div>
          <div class="b_middle">
            <div
              class="m_title"
              style="font-family: MicrosoftYaHei;font-size: 24px;font-weight: bold;color: #ffffff"
            >企业愿景</div>
            <div
              class="m_des"
              style="font-family: MicrosoftYaHei;font-size: 18px;font-weight: bold;color: #ffffff;margin-top: 60px"
            >
              致力于实现终身学习强国梦，
              提供国内领先的教育信息化一站式服务
            </div>
          </div>
          <div class="b_right">
            <div
              class="r_title"
              style="font-family: MicrosoftYaHei;font-size: 24px;font-weight: bold;color: #ffffff"
            >企业使命</div>
            <div
              class="r_des"
              style="font-family: MicrosoftYaHei;font-size: 18px;font-weight: bold;color: #ffffff;margin-top: 60px"
            >使人生更精彩、让数据有价值</div>
          </div>
        </div>
      </div>
      <div class="third">
        <div class="t_top">
          <div class="top_content">
            <div style="width: 60px;height: 6px;background-color: #3ba9df;margin: 6px;"></div>
            <div
              style="width: 131px; height: 32px;line-height: 32px;font-family: MicrosoftYaHei;font-size: 32px;font-weight:bold;color:#0092da;margin-right:6px;"
            >公司实力</div>
            <div style="width: 60px;height: 6px;background-color: #3ba9df;margin-right: 6px;"></div>
          </div>
        </div>
        <span
          style="font-family: MicrosoftYaHei;font-size: 14px;font-weight: bold;color: #333333;margin-top:20px"
        >我司已取得软件企业证书、ISO9001质量管理体系认证证书、3A级信用等级证书以及5项软件著作权。</span>
        <div class="t_bot">
          <div class="b_left">
            <img src="../assets/images/culture/culture6.png" alt />
          </div>
          <div class="b_right">
            <img src="../assets/images/culture/culture7.png" alt />
            <img src="../assets/images/culture/culture7.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="bot">
      <div class="b_title">
        <div style="width: 60px;height: 6px;background-color: #3ba9df;margin: 6px;"></div>
        <div
          style="width: 131px; height: 32px;line-height: 32px;font-family: MicrosoftYaHei;font-size: 32px;font-weight:bold;color:#0092da;margin-right:6px;"
        >员工风采</div>
        <div style="width: 60px;height: 6px;background-color: #3ba9df;margin-right: 6px;"></div>
      </div>
      <div class="b_des">
        我们是一支专业的团队，我们的成员拥有多年的教育信息化专业技术背景。我们是一支年轻的团队，
        我们的成员平均年龄仅有29岁，充满了干劲和创新。我们是一支专注的团队，
        我们坚信踏踏实实做好产品才是企业的基本生存之道。
        团队成员研究生占比20%、本科生占比50%、专科生占比20%。
      </div>
      <div class="b_img">
        <img src="../assets/images/culture/culture8.png" alt />
      </div>
      <div class="bot_f"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgHeight1: "",
      imgArr1: [
        {
          bannerimg1: require("../assets/images/culture/culture9.jpg")
        },
        {
          bannerimg1: require("../assets/images/culture/culture10.jpg")
        },
        {
          bannerimg1: require("../assets/images/culture/culture9.jpg")
        },
        {
          bannerimg1: require("../assets/images/culture/culture10.jpg")
        }
      ]
    };
  },
  mounted() {
    this.imgLoad1();
    window.addEventListener("resize", () => {
      this.imgHeight1 = `${this.$refs.imgHeight1[0].height}px`;
      this.imgLoad1();
    });
  },
  methods: {
    imgLoad1() {
      this.$nextTick(() => {
        this.imgHeight1 = `${this.$refs.imgHeight1[0].height}px`;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.culture {
  border-top: 1px solid #cccc;
  width: 100%;
  padding-top: 100px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .top {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .first {
      width: 74%;
      position: relative;
      .el-carousel.el-carousel--horizontal {
        /deep/.el-carousel__container {
          .el-carousel__arrow {
            display: none;
          }
        }
        /deep/.el-carousel__indicators {
          display: none;
        }
      }
      img {
        width: 100%;
      }
      .one_content {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 20px;
        right: 0;
        z-index: 111;
      }
      .two_content {
        width: 100%;
        padding: 70px 60px;
        box-sizing: border-box;
        background-color: #ffffff;
        opacity: 0.8;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: bold;
        line-height: 36px;
        letter-spacing: 6px;
        color: #333333;
        position: absolute;
        bottom: 0;
        z-index: 111;
      }
    }
    .second {
      width: 100%;
      padding: 60px 0;
      .s_top {
        .top_content {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .s_bot {
        margin-top: 60px;
        display: flex;
        justify-content: center;
        .b_left {
          width: 360px;
          height: 360px;
          box-sizing: border-box;
          background-image: url("../assets/images/culture/culture3.png");
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px;
          margin: 0 20px;
        }
        .b_middle {
          width: 360px;
          height: 360px;
          box-sizing: border-box;
          background-image: url("../assets/images/culture/culture4.png");
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px;
          margin: 0 20px;
        }
        .b_right {
          width: 360px;
          height: 360px;
          box-sizing: border-box;
          background-image: url("../assets/images/culture/culture5.png");
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px;
          margin: 0 20px;
        }
      }
    }
    .third {
      width: 74%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .t_top {
        display: flex;
        justify-content: center;
        flex-direction: column;
        .top_content {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .t_bot {
        width: 100%;
        display: flex;
        margin-top: 34px;
        .b_left {
          width: 60%;
          img {
            width: 100%;
          }
        }
        .b_right {
          width: 40%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .bot {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .b_title {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }
    .b_des {
      margin-top: 18px;
      width: 44%;
      font-family: MicrosoftYaHei;
      font-size: 14px;
      font-weight: bold;
      color: #333333;
      text-align: center;
      z-index: 2;
    }
    .b_img {
      width: 66%;
      margin-top: 10px;
      z-index: 2;
      img {
        width: 100%;
      }
    }
    .bot_f {
      width: 100%;
      height: 400px;
      background-color: #eeeeee;
      opacity: 0.8;
      position: absolute;
      top: 0;
      z-index: 0;
    }
  }
}
</style>