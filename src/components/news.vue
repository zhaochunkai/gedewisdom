<template>
  <div class="news-container">
    <div class="heade_img">
      <img src="../assets/images/news/header.jpg" alt />
    </div>
    <div class="title">
      <div class="title_left">NOITAMROFNI DNA SWEN</div>
      <div class="title_name">新闻动态</div>
      <div class="title_right">NEWS AND INFORMATION</div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="企业新闻" name="first">
        <div class="news" v-for="item in newsList1 " :key="item.id">
          <div class="new_c">
            <img :src="item.imageUrl" alt />
            <div class="right">
              <h3>{{item.title}}</h3>
              <span>
                <!-- {{ item.lastModificationTime | dataFilter }} -->
                {{ item.lastModificationTime}}
                </span>
              <p>{{item.summary}}</p>
              <div class="more">
                <a @click="linkDownload(item.jumpLinkurl)" style="cursor:pointer">阅读>></a>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="行业动态" name="second">
        <div class="news" v-for="item in newsList2 " :key="item.id">
          <div class="new_c">
            <img :src="item.imageUrl" alt />
            <div class="right">
              <h3>{{item.title}}</h3>
              <span>
                <!-- {{ item.lastModificationTime | dataFilter }} -->
                {{ item.lastModificationTime}}
                </span>
              <p>{{item.summary}}</p>
              <div class="more">
                <a @click="linkDownload(item.jumpLinkurl)" style="cursor:pointer">阅读>></a>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <div class="pag">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="per_page"
          background
          layout="prev, pager, next, jumper"
          :total="totals"
        ></el-pagination>
      </div>
    </el-tabs>
  </div>
</template>

<script>
import request from "../http/request";
import {newsUrl} from "../config";

export default {
  data() {
    return {
      activeName: "first", //企业新闻
      currentPage3: 1, //第一页,
      totals: 0, //新闻总条数
      newsList: [
        {
          id: 111,
          title: "测试1",
          lastModificationTime: "2020年4月5日",
          summary: "这是一个静态测试内容",
          jumpLinkurl:
            "http://www.gov.cn/zhengce/content/2019-05/24/content_5394415.htm",
          imageUrl: require("../assets/images/news/news.1.png")
        },
        {
          id: 222,
          title: "测试2",
          lastModificationTime: "2020年4月5日",
          summary: "这是一个静态测试内容",
          jumpLinkurl:
            "http://www.gov.cn/zhengce/zhengceku/2020-02/26/content_5483629.htm",
          imageUrl: require("../assets/images/news/news.2.png")
        },
        {
          id: 333,
          title: "测试3",
          lastModificationTime: "2020年4月5日",
          summary: "这是一个静态测试内容",
          jumpLinkurl:
            "http://www.mohrss.gov.cn/gkml/zcfg/gfxwj/202003/t20200330_363975.html",
          imageUrl: require("../assets/images/news/news.1.png")
        },
        {
          id: 444,
          title: "测试4",
          lastModificationTime: "2020年4月5日",
          summary: "这是一个静态测试内容",
          jumpLinkurl:
            "https://baijiahao.baidu.com/s?id=1662707095561606015&wfr=spider&for=pc",
          imageUrl: require("../assets/images/news/news.2.png")
        },
        {
          id: 555,
          title: "测试5",
          lastModificationTime: "2020年4月5日",
          summary: "这是一个静态测试内容",
          jumpLinkurl: "http://www.rs.cangzhou.gov.cn/gqgg/708354.shtml",
          imageUrl: require("../assets/images/news/news.1.png")
        }
      ], //新闻列表

      newsList2: [
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
        },
        {
          id: 333,
          title: "人力资源部实施线上技能培训行动",
          lastModificationTime: "2020年03月24日",
          summary: `在6月底前，依托经人力资源社会保障部和各地遴选公布的线上技能培训平台，对劳动者免费开放线上职业技能培训资源。
          人力资源社会保障部所属“中国职业培训在线”等6家在线培训平台，要设立线上培训专区专栏，向湖北等受疫情影响严重地区、
          “三区三州”深度贫困地区和挂牌督战贫困地区，加大线上培训资源免费开放力度，扩大课程免费范围，延长免费时间。
          各地要重点对企业返岗、待岗职工、农村转移就业劳动者、失业人员、贫困劳动力等开展线上培训，支持企业复工复产和脱贫攻坚，提高重点就业群体就业创业能力。`,
          jumpLinkurl:
            "http://www.mohrss.gov.cn/gkml/zcfg/gfxwj/202003/t20200330_363975.html",
            imageUrl: require("../assets/images/news/news.1.png")
        },
        {
          id: 444,
          title: "人力资源部召开电视电话会议部署线上技能培训",
          lastModificationTime: "2020年4月1日",
          summary: `今年以来，各级人社部门深入贯彻党中央、国务院关于实施职业技能提升行动，大规模开展职业技能培训的决策部署，积极应对新冠肺炎疫情影响，
          开展“互联网+职业技能培训”，完善线上职业技能培训政策措施，加大线上培训资源供给，组织实施专项计划，取得明显成效。`,
          jumpLinkurl:
            "https://baijiahao.baidu.com/s?id=1662707095561606015&wfr=spider&for=pc",
            imageUrl: require("../assets/images/news/news.2.png")
        },
        {
          id: 555,
          title: "沧州市征集线上职业技能培训平台和课程资源",
          lastModificationTime: "2020年4月1日",
          summary: `按照国家人社部、省人社厅有关规定，为积极实施职业技能提升行动“互联网+职业技能培训计划”，支持鼓励劳动者参与线上职业技能培训，
          决定面向社会公开征集线上职业技能培训平台和课程资源，面向愿意为我市企业、企业职工、就业重点群体、高危行业领域从业人员等提供线上职业技能培训服务的平台及课程资源的企业、机构、个人。
          希望具备在线服务资质。依法登记、已经正式运营服务的线上职业技能培训平台，具有规范的财务制度和管理制度，具有自主知识产权，社会信用良好，无违法、违纪、失信等不良行为记录`,
          jumpLinkurl: "http://www.rs.cangzhou.gov.cn/gqgg/708354.shtml",
          imageUrl: require("../assets/images/news/news.1.png")
        }
      ],
      newsList1: [
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
        },
        {
          id: 333,
          title: "格德智汇助力百日免费线上技能培训",
          lastModificationTime: "2020年4月3日",
          summary: `日前，人力资源社会保障部发文决定在全国组织实施百日免费线上技能培训行动，其中要求在三月下旬至六月底实现线上培训实名注册500万人次以上。
          因此，致力于实现终身学习强国梦的格德智汇决定开展「免费助力职业培训学校开启线上培训」的活动，为落实人社部的整体目标贡献一份自己的力量。`,
          jumpLinkurl:
            "https://mp.weixin.qq.com/s/bj3XoBvF8MgZ7dJE3agOjA",
            imageUrl: require("../assets/images/news/news.1.png")
        },
        {
          id: 444,
          title: "人力资源部召开电视电话会议部署线上技能培训",
          lastModificationTime: "2020年4月1日",
          summary: `今年以来，各级人社部门深入贯彻党中央、国务院关于实施职业技能提升行动，大规模开展职业技能培训的决策部署，积极应对新冠肺炎疫情影响，
          开展“互联网+职业技能培训”，完善线上职业技能培训政策措施，加大线上培训资源供给，组织实施专项计划，取得明显成效。`,
          jumpLinkurl:
            "https://mp.weixin.qq.com/s/NlmdSmOrQAqTj9XELbs9eg",
            imageUrl: require("../assets/images/news/news.2.png")
        },
        {
          id: 555,
          title: "利用手机学技能",
          lastModificationTime: "2020年4月2日",
          summary: `日前，人力资源社会保障部发布通知决定在全国组织实施“百日免费线上技能培训行动”。奉节县民生职校为贯彻落实上级部门的相关要求，
          在当地主管部门的指导下，利用格德智汇职业技能培训系统积极主动的开启了线上培训。`,
          jumpLinkurl: "https://mp.weixin.qq.com/s/gDa5OqMqfyifzAvoWm_Xhw",
          imageUrl: require("../assets/images/news/news.1.png")
        }
      ],

      type: 0,
      page: 1, //页码
      per_page: 4 //一页要展示的新闻数
    };
  },
  created() {
    this.getNewsList(this.type, this.page, this.per_page);
  },
  props: ["newslist"],
  methods: {
    handleClick(tab, event) {
      //通过点击，改变type的值从而切换新闻类型，得到不同的数组
      if (event.target.innerHTML === "行业动态") {
        this.type = 1;
        this.getNewsList(this.type, this.page, this.per_page);
        return;
      }
      this.type = 0;
      this.getNewsList(this.type, this.page, this.per_page);
    },
    handleCurrentChange(val) {
      const page = (val - 1) * this.per_page;
      this.getNewsList(this.type, page, this.per_page);
    },
    linkDownload(url) {
      window.open(decodeURIComponent(url), "_blank");
    },
    getNewsList(type, page, per_page) {
      request
        .get(newsUrl+'/api/app/article/articleList', {
          params: {
            type: type, //新闻类型
            SkipCount: page, //页码,此处用到跳转，需要用每页条数*当前的页码数
            MaxResultCount: per_page //一页展示多少条新闻
          }
        })
        .then(res => {
          this.newsList = res.data.items; //获取到的内容数组
          this.totals = res.data.totalCount; //新闻总条数,动态生成了页码
          console.log(res);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.news-container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  .heade_img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .title {
    width: 74%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title_name {
      width: 80px;
      min-width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #0092da;
      font-weight: bold;
      font-size: 20px;
    }
    .title_left {
      font-size: 16px;
      letter-spacing: 22px;
      width: 50%;
      height: 20px;
      border-bottom: 3px solid #3ba9df;
      font-family: MicrosoftYaHei;
      color: #999999;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .title_right {
      font-size: 16px;
      letter-spacing: 22px;
      width: 50%;
      height: 20px;
      border-bottom: 3px solid #3ba9df;
      font-family: MicrosoftYaHei;
      color: #999999;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  /deep/.el-tabs {
    margin-top: 20px;
    width: 100%;
    .el-tabs__header {
      margin: 0;
      width: 100%;
      .el-tabs__nav-wrap {
        width: 100%;
        .el-tabs__nav-scroll {
          display: flex;
          justify-content: center;
          .el-tabs__nav {
            .el-tabs__item {
              padding: 6px 20px;
              border: 1px solid #ccc;
              border-radius: 16px;
              margin: 0 15px;
              height: auto;
              line-height: normal;
            }
            .el-tabs__active-bar {
              height: 0;
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
    .el-tabs__content {
      width: 100%;
      .pag {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        /deep/.el-input.el-pagination__editor.is-in-pagination {
          .el-input__inner {
            border-radius: 0;
          }
        }
      }
      .el-tab-pane {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .news {
          width: 74%;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          .new_c {
            margin-top: 80px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            background-color: #eee;
            color: #000;
            .right {
              width: 76%;
              padding: 0 20px;
              position: relative;
              h3 {
                line-height: 40px;
                margin-top: 10px;
                font-family: MicrosoftYaHei;
                font-weight: bold;
                font-stretch: normal;
              }
              span {
                border-left: 2px solid #999999;
                padding-left: 10px;
                line-height: 20px;
                font-size: 14px;
                font-family: MicrosoftYaHei;
                font-weight: bold;
                font-stretch: normal;
                letter-spacing: 0px;
              }
              p {
                line-height: 26px;
                font-size: 14px;
                margin-top: 20px;
                font-family: MicrosoftYaHei;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
              }
              .more {
                left: 0;
                bottom: 0;
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                box-sizing: border-box;
                padding-right: 20px;
                position: absolute;
                bottom: 10px;
                a {
                  color: #000;
                  margin: 10px 0;
                }
              }
            }
          }
          .new_c:hover {
            background-color: #0092da;
            color: #fff;
            .right {
              span {
                border-left: 2px solid #fff;
              }
              .more {
                a {
                  color: #fff;
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