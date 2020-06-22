<template>
  <div class="product-container">
    <div class="find">
      <div class="find-one">
        <div class="one_content">
          <div class="left">
            <div class="title-us">{{products[0].eTitle}}</div>
            <div class="title-zh">{{products[0].title}}</div>
            <p>{{products[0].summary}}</p>
          </div>
          <div class="right">
            <img :src="products[0].imageUrl" alt />
          </div>
        </div>
      </div>
      <div class="find-two">
        <div class="two_content">
          <div class="left">
            <img :src="products[1].imageUrl" alt />
          </div>
          <div class="right">
            <div class="title-us">{{products[1].eTitle}}</div>
            <div class="title-zh">{{products[1].title}}</div>
            <p>{{products[1].summary}}</p>
          </div>
        </div>
      </div>
      <div class="find-one">
        <div class="one_content">
          <div class="left">
            <div class="title-us">{{products[2].eTitle}}</div>
            <div class="title-zh">{{products[2].title}}</div>
            <p>{{products[2].summary}}</p>
          </div>
          <div class="right">
            <img :src="products[2].imageUrl" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="sucess">
      <div class="case-title">成功案例</div>
      <el-tabs v-model="activeName">
        <el-tab-pane label=" 合作单位" name="first">
          <div class="case-box">
            <div class="case-one">
              <img src="../assets/images/product/image4.png" alt />
            </div>
            <div class="case-one">
              <img src="../assets/images/product/image5.png" alt />
            </div>
            <div class="case-one">
              <img src="../assets/images/product/image6.png" alt />
            </div>
            <div class="case-one">
              <img src="../assets/images/product/image7.png" alt />
            </div>
            <div class="case-one">
              <img src="../assets/images/product/image8.png" alt />
            </div>
            <div class="case-one">
              <img src="../assets/images/product/image9.png" alt />
            </div>
            <div class="case-one">
              <img src="../assets/images/product/image10.png" alt />
            </div>
            <div class="case-one">
              <img src="../assets/images/product/image11.png" alt />
            </div>
            <div class="case-one">
              <img src="../assets/images/product/image12.png" alt />
            </div>
            <div class="case-one">
              <img src="../assets/images/product/image13.png" alt />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="战略合作伙伴" name="second">
          <div class="partner">
            <div class="p_one">
              <img src="../assets/images/product/cengdeLogo.jpg" alt />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import request from "../http/request";
import { newsUrl } from "../config";
export default {
  name: "HelloWorld",
  data() {
    return {
      activeName: "first",
      products: [
        {
          id: 11,
          eTitle: "OCCUPATION SKILL",
          title: "职业技能培训系统",
          summary: `格德智汇自主研发的职业技能培训系统是一套基于微信快速搭建
培训机构职业技能线上培训的系统。可通过项目创建、学员报
名、录取缴费、分班排课、直播授课、移动学习、模拟练习、
在线考试、成绩管理、数据分析等一系列功能支撑培训机构培
训过程全流程信息化管理。`,
          imageUrl: require("../assets/images/main/shouye1.png")
        },
        {
          id: 22,
          eTitle: "SMART CAMPUS",
          title: "智慧校园数据中台",
          summary: `格德智汇自主研发的数据中台是以教育部信息化标准为基础核
心，学校为主体的数据中台服务平台；帮助学校建立信息标准
体系、建立中心数据库、建立公共管理系统、建立通用数据
采集系统、建立统一身份认证系统、建立数据挖掘系统等。`,
          imageUrl: require("../assets/images/main/shouye2.png")
        },
        {
          id: 33,
          eTitle: "INTERNET OF THINGS",
          title: "物联网应用",
          summary: `格德智汇的物联网平台旨在让学校、机构管理更轻松、方便、
快捷、开放、安全，实现智慧园区管理全场景应用，形成端
与端、端与脑、脑与端的全生命周期，让隐含数据可视化而
打造；包含了校园一卡通、智能门禁、人脸识别、智慧显示
终端、智能水电表等。`,
          imageUrl: require("../assets/images/main/shouye3.png")
        }
      ]
    };
  },
  created() {
    this.getProducts(2);
  },
  methods: {
    getProducts(type) {
      request
        .get(newsUrl + "/api/app/article/articleList", {
          params: {
            type: type
          }
        })
        .then(res => {
          this.products = res.data.items; //获取到的内容数组
          console.log(res);
        });
    }
  }
};
</script>

<style lang="less" scoped>
p {
  margin: 0;
  padding: 0;
}
.product-container {
  border-top: 1px solid #cccc;
  padding-top: 100px;
  width: 100%;
  margin-bottom: 60px;
  .find {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .find-one {
      width: 100%;
      background-color: #ecf9ff;
      display: flex;
      justify-content: center;
      .one_content {
        margin: 40px 0;
        width: 74.5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          width: 57.8%;
          .title-us {
            font-size: 80px;
            font-family: DengXian;
            color: #83b8d0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .title-zh {
            margin-top: 6.6%;
            font-size: 24px;
            letter-spacing: 10px;
            font-family: MicrosoftYaHei;
            font-weight: bold;
            font-stretch: normal;
            color: #000000;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p {
            margin-top: 3.3%;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 4px;
            width: 75%;
            font-family: MicrosoftYaHei;
            font-stretch: normal;
            color: #000000;
          }
        }
        .right {
          width: 42.2%;
          img {
            width: 100%;
          }
        }
      }
    }
    .find-two {
      width: 100%;
      background-color: #fff7ec;
      display: flex;
      justify-content: center;
      .two_content {
        margin: 40px 0;
        width: 74.5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          width: 57.8%;
          img {
            width: 73%;
          }
        }
        .right {
          width: 42.2%;
          .title-us {
            font-size: 80px;
            font-family: DengXian;
            color: #83b8d0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .title-zh {
            margin-top: 6.6%;
            font-size: 24px;
            letter-spacing: 10px;
            font-family: MicrosoftYaHei;
            font-weight: bold;
            font-stretch: normal;
            color: #000000;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p {
            margin-top: 3.3%;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 4px;
            width: 100%;
            font-family: MicrosoftYaHei;
            font-stretch: normal;
            color: #333333;
          }
        }
      }
    }
  }
  .sucess {
    margin-top: 70px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    /deep/.el-tabs {
      margin-top: 35px;
      width: 74%;
      .el-tabs__header {
        margin: 0;
        .el-tabs__nav-wrap {
          .el-tabs__nav-scroll {
            display: flex;
            justify-content: center;
            .el-tabs__nav {
              .el-tabs__item {
                padding: 6px 20px;
                border: 1px solid #ccc;
                border-radius: 16px;
                margin: 0 8px;
                width: 180px;
                height: auto;
                line-height: normal;
                text-align: center;
                font-size: 24px;
              }
              .el-tabs__active-bar {
                height: 0;
                &.is-active {
                  background-color: #0092da;
                  color: #fff;
                }
              }
              .is-active {
                background-color: #0092da;
                color: #fff;
              }
            }
          }
        }
        .el-tabs__nav-wrap::after {
          height: 0;
        }
      }
    }
    .case-title {
      width: 74%;
      font-family: DengXian;
      font-size: 28px;
      color: #000000;
    }
    .case-box {
      margin-top: 62px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .case-one {
        width: 32.4%;
        box-sizing: border-box;
        margin: 0 10px 20px 0;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .partner {
      margin-top: 62px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .p_one {
        width: 32.4%;
        box-sizing: border-box;
        margin: 0 10px 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
        }
      }
    }
  }
}
</style>
