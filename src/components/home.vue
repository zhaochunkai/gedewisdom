<template>
  <div class="hello">
    <el-carousel :interval="5000" arrow="always" class="d_jump" :height="imgHeight">
      <el-carousel-item v-for="item in imgArr" :key="item.banenerimg">
        <el-row>
          <el-col :span="24">
            <img ref="imgHeight" :src="item.bannerimg" class="banner_img" @load="imgLoad" />
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
    <div class="first_floor">
      <div class="first_floor_title">
        <span class="name-zh">主营产品</span>
        <span class="fuhao"></span>
        <span class="name-us">PRODUCTS</span>
      </div>
      <div class="items">
        <div class="item" v-for="item in products" :key="item.id">
          <div class="item-desc">
            <div class="title">{{item.title}}</div>
            <div class="contents">{{item.summary}}</div>
          </div>
          <img :src="item.imageUrl" alt />
        </div>
      </div>
    </div>
    <div class="second_floor">
      <div class="left">
        <el-carousel :interval="5000" arrow="always" :height="imgHeight1">
          <el-carousel-item v-for="item in imgArr1" :key="item.banenerimg1">
            <img ref="imgHeight1" :src="item.bannerimg1" alt @load="imgLoad1" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right">
        <div class="title">
          <div class="name-zh">企业文化</div>
          <div class="name-us">CORPORATE CULTURE</div>
        </div>
        <div class="content">
          <div class="one">
            <p>四川格德智汇科技有限公司总部位于成都高新区，注册资本2000万，是一家致力于为终身教育、职业教育提供信息化与智慧校园解决方案的运营服务商，专注于大数据、物联网、人工智能、云计算等新技术应用领域，结合教育行业各应用场景进行软硬件产品开发的高科技企业。</p>
          </div>
          <div class="two">
            <span>价值观：</span>
            <br />
            <span>格物致知，德行教育</span>
          </div>
          <div class="three">
            <span>企业愿景:</span>
            <br />
            <span>致力于实现终身学习强国梦，提供国内领先的教育信息化一站式服务</span>
          </div>
          <div class="fore">
            <span>企业使命：</span>
            <br />
            <span>使人生更精彩、让数据有价值</span>
          </div>
        </div>
        <div class="btn">
          <el-button type="primary" plain>点击查看更多</el-button>
        </div>
      </div>
    </div>
    <div class="third_floor">
      <div class="title">
        <span class="name-zh">新闻动态</span>
        <span class="fuhao"></span>
        <span class="name-us">NEWS INFORMATION</span>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick1">
        <el-tab-pane label=" 行业动态" name="first">
          <div class="main">
            <div class="content">
              <div class="top" v-for="item in newsListTop1" :key="item.id">
                <div class="img">
                  <img :src="item.imageUrl?item.imageUrl:productImg" alt />
                </div>
                <div class="info">
                  <div class="name">{{item.title}}</div>
                  <div class="date">
                    <!-- {{ item.lastModificationTime | dataFilter }} -->
                    {{ item.lastModificationTime}}
                  </div>
                  <p class="desc">{{item.summary}}</p>
                  <a @click="linkDownload(item.jumpLinkurl)" style="cursor:pointer">阅读>></a>
                </div>
              </div>
              <div class="bots">
                <div class="bot" v-for="item in newsListBot1" :key="item.id">
                  <div class="name">{{item.title}}</div>
                  <div class="date">
                    <!-- {{ item.lastModificationTime | dataFilter }} -->
                    {{ item.lastModificationTime}}
                  </div>
                  <p class="desc">{{item.summary}}</p>
                  <a @click="linkDownload(item.jumpLinkurl)" style="cursor:pointer">阅读>></a>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="企业新闻" name="second">
          <div class="main">
            <div class="content">
              <div class="top" v-for="item in newsListTop2" :key="item.id">
                <div class="img">
                  <img :src="item.imageUrl?item.imageUrl:productImg" alt />
                </div>
                <div class="info">
                  <div class="name">{{item.title}}</div>
                  <div class="date">
                    <!-- {{ item.lastModificationTime | dataFilter }} -->
                    {{ item.lastModificationTime}}
                  </div>
                  <p class="desc">{{item.summary}}</p>
                  <a @click="linkDownload(item.jumpLinkurl)" style="cursor:pointer">阅读>></a>
                </div>
              </div>
              <div class="bots">
                <div class="bot" v-for="item in newsListBot2" :key="item.id">
                  <div class="name">{{item.title}}</div>
                  <div class="date">
                    <!-- {{ item.lastModificationTime | dataFilter }} -->
                    {{ item.lastModificationTime}}
                  </div>
                  <p class="desc">{{item.summary}}</p>
                  <a @click="linkDownload(item.jumpLinkurl)" style="cursor:pointer">阅读>></a>
                </div>
              </div>
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
  data() {
    return {
      productImg: {
        bannerimg: require("../assets/images/news/news.1.png")
      },
      activeName: "first",
      currentPage3: 5,
      imgHeight: "",
      imgHeight1: "",
      products: [
        {
          id: 11,
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
          title: "智慧校园数据中台",
          summary: `格德智汇自主研发的数据中台是以教育部信息化标准为基础核
心，学校为主体的数据中台服务平台；帮助学校建立信息标准
体系、建立中心数据库、建立公共管理系统、建立通用数据
采集系统、建立统一身份认证系统、建立数据挖掘系统等。`,
          imageUrl: require("../assets/images/main/shouye2.png")
        },
        {
          id: 33,
          title: "物联网应用",
          summary: `格德智汇的物联网平台旨在让学校、机构管理更轻松、方便、
快捷、开放、安全，实现智慧园区管理全场景应用，形成端
与端、端与脑、脑与端的全生命周期，让隐含数据可视化而
打造；包含了校园一卡通、智能门禁、人脸识别、智慧显示
终端、智能水电表等。`,
          imageUrl: require("../assets/images/main/shouye3.png")
        }
      ],
      imgArr: [
        {
          bannerimg: require("../assets/images/main/banner5.jpg")
        },
        {
          bannerimg: require("../assets/images/main/banner1.jpg")
        },
        {
          bannerimg: require("../assets/images/main/banner2.jpg")
        },
        {
          bannerimg: require("../assets/images/main/banner3.jpg")
        }
      ],
      imgArr1: [
        {
          bannerimg1: require("../assets/images/home/banner_h1.jpg")
        },
        {
          bannerimg1: require("../assets/images/home/banner_h2.jpg")
        },
        {
          bannerimg1: require("../assets/images/home/banner_h1.jpg")
        },
        {
          bannerimg1: require("../assets/images/home/banner_h2.jpg")
        }
      ],
      newsListTop1: [
        {
          id: 111,
          title: "国务院职业技能提升行动方案",
          lastModificationTime: "2019年5月18日",
          summary: `以习近平新时代中国特色社会主义思想为指导，全面贯彻党的十九大和十九届二中、三中全会精神，
          把职业技能培训作为保持就业稳定、缓解结构性就业矛盾的关键举措，作为经济转型升级和高质量发展的重要支撑。
          坚持需求导向，服务经济社会发展，适应人民群众就业创业需要，大力推行终身职业技能培训制度，
          面向职工、就业重点群体、建档立卡贫困劳动力等城乡各类劳动者，大规模开展职业技能培训，加快建设知识型、技能型、创新型劳动者大军。`,
          jumpLinkurl:
            "http://www.gov.cn/zhengce/content/2019-05/24/content_5394415.htm",
          imageUrl: require("../assets/images/news/news.1.png")
        },
        {
          id: 222,
          title: "人力资源部关于实施职业技能提升行动的通知",
          lastModificationTime: "	2020年02月17日",
          summary: `针对新型冠状病毒感染肺炎疫情防控工作要求，立足经济社会发展和就业创业需要，实施“互联网+职业技能培训计划”，
          大力推进职业技能提升行动。2020年，实现“511”线上培训目标：征集遴选50家以上面向全国的优质线上职业技能培训平台，
          推出覆盖100个以上职业（工种）的数字培训资源，全年开展100万人次以上的线上职业技能培训；到2021年，
          健全“互联网+职业技能培训”管理服务工作模式，构建线上培训资源充足、线上线下融合衔接、政策支持保障有力、
          监管有序到位的工作格局，进一步扩大线上培训规模，提高线上培训质量。`,
          jumpLinkurl:
            "http://www.gov.cn/zhengce/zhengceku/2020-02/26/content_5483629.htm",
          imageUrl: require("../assets/images/news/news.2.png")
        }
      ],
      newsListBot1: [
        {
          id: 333,
          title: "人力资源部实施线上技能培训行动",
          lastModificationTime: "2020年03月24日",
          summary: `在6月底前，依托经人力资源社会保障部和各地遴选公布的线上技能培训平台，对劳动者免费开放线上职业技能培训资源。
          人力资源社会保障部所属“中国职业培训在线”等6家在线培训平台，要设立线上培训专区专栏，向湖北等受疫情影响严重地区、
          “三区三州”深度贫困地区和挂牌督战贫困地区，加大线上培训资源免费开放力度，扩大课程免费范围，延长免费时间。
          各地要重点对企业返岗、待岗职工、农村转移就业劳动者、失业人员、贫困劳动力等开展线上培训，支持企业复工复产和脱贫攻坚，提高重点就业群体就业创业能力。`,
          jumpLinkurl:
            "http://www.mohrss.gov.cn/gkml/zcfg/gfxwj/202003/t20200330_363975.html"
        },
        {
          id: 444,
          title: "人力资源部召开电视电话会议部署线上技能培训",
          lastModificationTime: "2020年4月1日",
          summary: `今年以来，各级人社部门深入贯彻党中央、国务院关于实施职业技能提升行动，大规模开展职业技能培训的决策部署，积极应对新冠肺炎疫情影响，
          开展“互联网+职业技能培训”，完善线上职业技能培训政策措施，加大线上培训资源供给，组织实施专项计划，取得明显成效。`,
          jumpLinkurl:
            "https://baijiahao.baidu.com/s?id=1662707095561606015&wfr=spider&for=pc"
        },
        {
          id: 555,
          title: "沧州市征集线上职业技能培训平台和课程资源",
          lastModificationTime: "2020年4月1日",
          summary: `按照国家人社部、省人社厅有关规定，为积极实施职业技能提升行动“互联网+职业技能培训计划”，支持鼓励劳动者参与线上职业技能培训，
          决定面向社会公开征集线上职业技能培训平台和课程资源，面向愿意为我市企业、企业职工、就业重点群体、高危行业领域从业人员等提供线上职业技能培训服务的平台及课程资源的企业、机构、个人。
          希望具备在线服务资质。依法登记、已经正式运营服务的线上职业技能培训平台，具有规范的财务制度和管理制度，具有自主知识产权，社会信用良好，无违法、违纪、失信等不良行为记录`,
          jumpLinkurl: "http://www.rs.cangzhou.gov.cn/gqgg/708354.shtml"
        }
      ],
      newsListTop2: [
        {
          id: 111,
          title: "开展线上技能培训 助力防疫稳定就业 ",
          lastModificationTime: "2020年2月28日",
          summary: `今（28）日，据悉，黔江区人力社保局为有效减少人员聚集，按照上级要求，
          疫情防控期间全面暂停职业技能线下集中培训，大力开展线上培训，指导区内各职业培训机构创建线上培训平台，
          规范线上培训操作流程，广泛动员培训对象参加线上培训。建卡贫困户劳动力在家手机学习线上课程`,
          jumpLinkurl:
            "https://www.sohu.com/a/376591395_178928",
          imageUrl: require("../assets/images/news/news.1.png")
        },
        {
          id: 222,
          title: "“云课堂”开课啦！",
          lastModificationTime: "	2020年02月26日",
          summary: `自2月24日开始，牛场镇五新社区已经有50余名易地搬迁群众，通过手机和电脑在家参加福泉市就业局线上技能“云课堂”培训，这为他们下一步稳定就业打下了良好的基础。
          “还有几个注意事项，第一个是要注意老人保暖，动作要轻柔、敏捷，着装颜色要整体色彩淡雅......”，这几天早上九点，杜必梅和两个上小学的孩子就会围坐在电炉旁一起学习，
          孩子通过网络学习课程知识，与孩子不同的是，杜必梅所学习的课程是由遵义爱心劳动服务职业培训学校通过网络讲授的养老护理培训知识。`,
          jumpLinkurl:
            "https://baijiahao.baidu.com/s?id=1659649461318036314&wfr=spider&for=pc",
          imageUrl: require("../assets/images/news/news.2.png")
        }
      ],
      newsListBot2: [
        {
          id: 333,
          title: "格德智汇助力百日免费线上技能培训",
          lastModificationTime: "2020年4月3日",
          summary: `日前，人力资源社会保障部发文决定在全国组织实施百日免费线上技能培训行动，其中要求在三月下旬至六月底实现线上培训实名注册500万人次以上。
          因此，致力于实现终身学习强国梦的格德智汇决定开展「免费助力职业培训学校开启线上培训」的活动，为落实人社部的整体目标贡献一份自己的力量。`,
          jumpLinkurl:
            "https://mp.weixin.qq.com/s/bj3XoBvF8MgZ7dJE3agOjA"
        },
        {
          id: 444,
          title: "人力资源部召开电视电话会议部署线上技能培训",
          lastModificationTime: "2020年4月1日",
          summary: `今年以来，各级人社部门深入贯彻党中央、国务院关于实施职业技能提升行动，大规模开展职业技能培训的决策部署，积极应对新冠肺炎疫情影响，
          开展“互联网+职业技能培训”，完善线上职业技能培训政策措施，加大线上培训资源供给，组织实施专项计划，取得明显成效。`,
          jumpLinkurl:
            "https://mp.weixin.qq.com/s/NlmdSmOrQAqTj9XELbs9eg"
        },
        {
          id: 555,
          title: "利用手机学技能",
          lastModificationTime: "2020年4月2日",
          summary: `日前，人力资源社会保障部发布通知决定在全国组织实施“百日免费线上技能培训行动”。奉节县民生职校为贯彻落实上级部门的相关要求，
          在当地主管部门的指导下，利用格德智汇职业技能培训系统积极主动的开启了线上培训。`,
          jumpLinkurl: "https://mp.weixin.qq.com/s/gDa5OqMqfyifzAvoWm_Xhw"
        }
      ]
    };
  },
  // created() {
  //   this.getProducts(2);
  //   this.getNews(0);
  // },
  mounted() {
    this.imgLoad();
    this.imgLoad1();
    window.addEventListener("resize", () => {
      this.imgHeight = `${this.$refs.imgHeight[0].height}px`;
      this.imgLoad();
    });
    window.addEventListener("resize", () => {
      this.imgHeight1 = `${this.$refs.imgHeight1[0].height}px`;
      this.imgLoad1();
    });
  },
  methods: {
    handleClick1(tab, event) {
      //通过点击，改变type的值从而切换新闻类型，得到不同的数组
      if (event.target.innerHTML === "行业动态") {
        this.getNews(1);
        return;
      }
      this.getNews(0);
    },
    imgLoad() {
      this.$nextTick(() => {
        this.imgHeight = `${this.$refs.imgHeight[0].height}px`;
      });
    },
    imgLoad1() {
      this.$nextTick(() => {
        this.imgHeight1 = `${this.$refs.imgHeight1[0].height}px`;
      });
    },
    // getProducts(type) {
    //   request
    //     .get(newsUrl+'/api/app/article/articleList', {
    //       params: {
    //         type: type
    //       }
    //     })
    //     .then(res => {
    //       this.products = res.data.items.slice(0, 3); //获取到的内容数组
    //       this.productImg = res.data.items;
    //     });
    // },
    // getNews(type) {
    //   request
    //     .get(newsUrl+'/api/app/article/articleList', {
    //       params: {
    //         type: type
    //       }
    //     })
    //     .then(res => {
    //       console.log(res)
    //       // this.newsListTop = this.moment(res.data.lastModificationTime).format(
    //       //   "YYYY年DD月MM日 mm:ss"
    //       // );
    //       //总共截取前5项
    //       this.newsListTop = res.data.items.slice(0, 2); //上面两个部分循环
    //       this.newsListBot = res.data.items.slice(2, 5); //下面三个循环
    //       console.log(this.newsList[0]);
    //     });
    // },
    linkDownload(url) {
      window.open(url, "_blank");//decodeURIComponent(url)
      //  window.location.href = url
    }
  }
};
</script>

<style scoped lang="less">
.hello {
  width: 100%;
  .d_jump {
    width: 100%;
    .banner_img {
      width: 100%;
    }
  }
  /deep/.el-carousel__indicators {
    .el-carousel__button {
      width: 70px;
      height: 6px;
      background-color: #75c4ea;
      border-radius: 3px;
    }
  }
  .first_floor {
    margin-top: 40px;
    width: 100%;
    .first_floor_title {
      display: flex;
      align-items: center;
      flex-direction: column;
      .name-zh {
        font-family: MicrosoftYaHei;
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        color: #0092da;
      }
      .fuhao {
        margin-top: 18px;
        width: 60px;
        height: 6px;
        background-color: #999999;
      }
      .name-us {
        font-family: MicrosoftYaHei;
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 10px;
        color: #666666;
      }
    }
    .items {
      margin-top: 38px;
      display: flex;
      justify-content: space-between;
      .item {
        box-sizing: border-box;
        padding: 50px 26px 26px;
        width: 32.8%;
        background-color: #eeeeee;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &:hover {
          background-color: #66bee9;
          color: #fff;
        }
        .item-desc {
          .title {
            // display: flex; flex布局
            // flex-direction: column; 定义主轴方向，默认横向
            // flex-wrap: wrap; 主轴超出时是否换行，主要与justify-content:space-between搭配
            // justify-content: center/flex-start/flex-end; 主轴
            // align-items: flex-start/center/flex-end; 副轴
            font-size: 32px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .contents {
            margin-top: 20px;
            font-family: MicrosoftYaHei;
            font-size: 14px;
          }
        }
        img {
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }
  .second_floor {
    margin-top: 80px;
    display: flex;
    .left {
      width: 46%;
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
    }
    .right {
      margin-left: 40px;
      width: 50%;
      position: relative;
      .title {
        width: 100%;
        border-left: 10px solid #0092da;
        margin-bottom: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .name-zh {
          width: 100%;
          font-family: MicrosoftYaHei;
          font-size: 32px;
          font-weight: bold;
          font-stretch: normal;
          color: #000000;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .name-us {
          margin-top: 8px;
          width: 100%;
          font-family: MicrosoftYaHei;
          font-size: 24px;
          font-weight: bold;
          font-stretch: normal;
          letter-spacing: 0.2em;
          color: #666666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .content {
        width: 100%;
        .one {
          width: 100%;
          font-family: MicrosoftYaHei;
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          margin-top: 60px;
        }
        .two {
          width: 100%;
          font-family: MicrosoftYaHei;
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          margin-top: 30px;
        }
        .three {
          width: 100%;
          font-family: MicrosoftYaHei;
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          margin-top: 20px;
        }
        .fore {
          width: 100%;
          font-family: MicrosoftYaHei;
          font-size: 14px;
          font-weight: bold;
          color: #333333;
          margin-top: 10px;
        }
      }
      .btn {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        .el-button {
          width: 160px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          border-radius: 0;
        }
      }
    }
  }
  .third_floor {
    margin-top: 80px;
    margin-bottom: 40px;
    .title {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .name-zh {
        font-family: MicrosoftYaHei;
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        color: #0092da;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fuhao {
        margin-top: 18px;
        width: 60px;
        height: 6px;
        background-color: #999999;
      }
      .name-us {
        font-family: MicrosoftYaHei;
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 10px;
        color: #666666;
      }
    }
    /deep/.el-tabs {
      margin-top: 35px;
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
                height: auto;
                line-height: normal;
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
    .main {
      margin-top: 38px;
      width: 100%;
      display: flex;
      justify-content: center;
      .content {
        width: 74%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .top {
          width: 49.1%;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          background-color: #eeeeee;
          &:hover {
            box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.19);
          }
          .img {
            width: 43%;
            display: flex;
            align-items: center;
            img {
              width: 100%;
            }
          }
          .info {
            width: 57%;
            padding-top: 35px;
            padding-left: 20px;
            position: relative;
            .name {
              width: 100%;
              font-family: MicrosoftYaHei;
              font-size: 18px;
              font-weight: bold;
              color: #000000;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .date {
              margin-top: 10px;
              width: 100%;
              font-size: 14px;
              font-family: MicrosoftYaHei;
              font-weight: bold;
              color: #333333;
              border-left: 2px solid #999999;
              padding-left: 3px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .desc {
              margin-top: 10px;
              width: 100%;
              font-family: MicrosoftYaHei;
              font-size: 14px;
              color: #333333;
              margin-bottom: 40px;
            }
            a {
              bottom: 10px;
              position: absolute;
              text-decoration: none;
              font-family: MicrosoftYaHei;
              font-size: 14px;
              font-weight: bold;
              color: #333333;
              margin-bottom: 10px;
            }
          }
        }
        .bots {
          margin-top: 20px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          .bot {
            position: relative;
            box-sizing: border-box;
            width: 32.4%;
            background-color: #eeeeee;
            padding: 10px;
            &:hover {
              box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.19);
            }
            .name {
              padding-top: 10px;
              width: 100%;
              font-family: MicrosoftYaHei;
              font-size: 18px;
              font-weight: bold;
              color: #000000;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .date {
              margin-top: 20px;
              width: 100%;
              font-family: MicrosoftYaHei;
              font-size: 14px;
              font-weight: bold;
              color: #333333;
              border-left: 2px solid #999999;
              display: flex;
              align-items: center;
              box-sizing: border-box;
              padding-left: 3px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .desc {
              margin-top: 10px;
              width: 100%;
              font-family: MicrosoftYaHei;
              font-size: 14px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #333333;
              margin-bottom: 40px;
            }
            a {
              bottom: 10px;
              position: absolute;
              text-decoration: none;
              font-family: MicrosoftYaHei;
              font-size: 14px;
              font-weight: bold;
              color: #333333;
            }
          }
        }
      }
    }
  }
}
</style>
