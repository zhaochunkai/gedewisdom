<template>
  <div class="portal">
    <div class="list">
      <div class="top">
        <div class="top_select">
          <!-- 这是展示的一级目录 -->
          <div class="select_f">
            <ul class="f_one">
              <li
                class="one_li"
                v-for="(item,index) in firstList"
                :key="item.id"
                :class="{'active':index=== indexActive}"
                @click="firstDirectory(item.id,index)"
              >{{item.name}}</li>
              <li class="two_li" @click="dropDown">更多&gt;&gt;</li>
            </ul>
          </div>
          <!-- 这是展示的二级目录 -->
          <div class="select_s">
            <ul>
              <li
                v-for="(item,index) in secondList"
                :key="item.id"
                :class="{'active':index=== secondActive}"
                @click="secondDirectory(item.id,index)"
              >{{item.name}}</li>
            </ul>
          </div>
          <!-- 这是资源类型选择 -->
          <div class="select_t">
            <ul>
              <li
                v-for="(item,index) in typeList"
                :key="item.id"
                :class="{'active':index=== typeActive}"
                @click="typeDirectory(item.name,index)"
              >{{item.name}}</li>
            </ul>
          </div>
          <!-- 按关键词查询 -->
          <div class="select_b">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="primary" plain @click="keyDirectory()">点击查询</el-button>
          </div>
          <div class="select_l"></div>
        </div>
      </div>
      <div class="content">
        <div class="content_head">
          <div class="l_list">
            <div class="list_sort">排序：</div>
            <div class="list_time">时间</div>
            <div class="icon_arrow">
              <div class="el-icon-arrow-up" style="font-weight: bold;"></div>
              <div class="el-icon-arrow-down"></div>
            </div>
            <div class="list_number">浏览人数</div>
            <div class="icon_arrow">
              <div class="el-icon-arrow-up" style="font-weight: bold;"></div>
              <div class="el-icon-arrow-down"></div>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="body_top">
            <div
              class="f_item"
              v-for="item in previewList"
              :key="item.id"
              @click="hetails(item.id)"
            >
              <img class="item_img" :src="item.thumbnailFileUrl" :onerror="defaultImg" alt />
              <div class="item_content">
                <p
                  style="font-family: AdobeHeitiStd-Regular;font-size: 18px;color: #000000;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"
                >{{item.name}}</p>
                <p
                  style="font-family: AdobeHeitiStd-Regular;font-size: 12px;color: #333333;margin-top:11px;font-weight:bold"
                >{{item.fileName}}</p>
                <div class="cot_bot">
                  <div class="b_left">
                    <span style="font-family: DengXian;font-size: 14px;color: #000000;">价格：</span>
                    <span
                      v-if="item.price!=0"
                      style="font-family: DengXian;font-size: 24px;color: #e23b3b;font-weight:bold"
                    >{{item.price}}/元</span>
                    <span v-else style="font-family: DengXian;font-size: 16px;color: #000;">免费</span>
                  </div>
                  <div class="b_right">
                    <img
                      src="../assets/images/portal/eye-icon.png"
                      style="width: 16px;margin-right:10px"
                      alt
                    />
                    <span
                      style="font-family: MicrosoftYaHei;font-size: 12px;color: #999999;font-weight:bold;"
                    >{{item.visitCount}}</span>
                  </div>
                </div>
              </div>
              <div class="item_foot">
                <span
                  style="font-family: AdobeHeitiStd-Regular;font-size: 12px;color: #666666;"
                >上传者：{{item.tenantName}}</span>
              </div>
            </div>
          </div>
          <div class="pag">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="per_page"
              background
              layout="prev, pager, next, jumper"
              :total="totals"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import request from "../http/request";
import { resource } from "../config";

export default {
  data() {
    return {
      indexActive: -1, //专业控制点亮状态 -1为默认不点亮
      secondActive: -1, //课程点亮状态
      typeActive: -1, //资源类型点亮状态
      currentPage: 1, //当前展示页,默认第一页,
      totals: 0, //新闻总条数
      page: 0, //页码,默认不跳过
      per_page: 12, //一页要展示的新闻数
      profession: "",
      previewList: [], //页面资源内容渲染列表
      firstList: [], //一级资源目录列表
      secondList: [], //二级资源目录列表
      typeList: [], //展示资源类型列表
      input: "", //关键词查询参数
      ResourceType: "", //资源类型
      CourseId: "", //课程id默认值
      MajorId: "" //专业id默认值
    };
  },
  created() {
    this.getSelect("", "", "", "", this.page, this.per_page);
    this.oneDirectory(); //页面加载获取一级内容
    this.typeInlit(); //页面加载，获取资源类型
  },
  computed: {
    defaultImg() {
      return (
        'this.src="' +
        require("../assets/images/portal/defaultPicture.jpg") +
        '"'
      );
    }
  },
  methods: {
    handleCurrentChange(val) {
      // 页码默认跳过0，当val从1开始的
      const page = (val - 1) * this.per_page;
      this.getSelect(
        this.input,
        this.MajorId,
        this.CourseId,
        this.ResourceType,
        page,
        this.per_page
      );
    },
    handleSizeChange(val) {},
    handleChange(val) {},
    formatter(row, column) {
      return row.address;
    },
    //跳转，访问详情
    hetails(id) {
      const loading = this.$loading({
        body: true, //注意另外两个修饰符（全屏和锁定）
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
        const { href } = this.$router.resolve({
          path: `/video/${id}`
        });
        window.open(href, "_blank");
      }, 500);
    },
    //页面资源列表获取请求
    getSelect(keyWord, MajorId, CourseId, type, page, per_page) {
      request
        .get(resource + "/api/app/resource/previewList", {
          params: {
            Filter: keyWord, //需要搜索的关键字
            ResourceMajorId: MajorId, //专业id ID
            ResourceCourseId: CourseId, //课程id
            ResourceType: type, //资源类型
            SkipCount: page,
            MaxResultCount: per_page
          }
        })
        .then(res => {
          this.previewList = res.data.items; //获取到的内容数组
          this.totals = res.data.totalCount; //新闻总条数,动态生成了页码
        });
    },
    // 专业资源准备，获取专业列表
    oneDirectory() {
      request.get(resource + "/api/app/resourceMajor").then(res => {
        this.firstList = res.data.items.slice(0, 10);
      });
    },
    //更多专业下拉列表
    dropDown(el) {
      if (el.target.innerHTML == "更多&gt;&gt;") {
        el.target.innerHTML = "收起&lt;&lt; ";
      } else {
        el.target.innerHTML = "更多&gt;&gt;";
      }
      request
        .get(resource + "/api/app/resourceMajor", {
          params: {
            MaxResultCount: 1000
          }
        })
        .then(res => {
          if (this.firstList.length == 10) {
            this.firstList = res.data.items;
            return;
          }
          this.firstList = res.data.items.slice(0, 10);
        });
    },
    // 专业请求数据，获取课程列表
    firstDirectory(id, index) {
      this.MajorId = id;
      //清空课程id
      this.CourseId = "";
      //清空资源类型
      this.ResourceType = "";
      //清空关键词
      this.input = "";
      // 高亮显示
      this.indexActive = index;
      // 让课程和类型不高亮
      this.secondActive = -1;
      this.typeActive = -1;
      //请求列表
      this.getSelect("", id, "", "", this.page, this.per_page);
      // 请求课程列表
      request
        .get(resource + "/api/app/resourceCourse/courseByMajorId", {
          params: {
            MajorId: id, //通过专业列表传入
            SkipCount: this.page,
            MaxResultCount: this.per_page
          }
        })
        .then(res => {
          this.secondList = res.data.items; //获取到二级资源目录列表
          //获取二级的资源目录id
        });
    },
    // 课程目录请求数据，并渲染页面
    secondDirectory(id, index) {
      //清空资源类型
      this.ResourceType = "";
      //清空关键词
      this.input = "";
      //点击高亮
      this.secondActive = index;
      this.typeActive = -1;
      //列表请求
      this.CourseId = id;
      this.getSelect(
        this.input,
        this.MajorId, //专业id
        id, //课程id
        this.ResourceType,
        this.page,
        this.per_page
      );
    },
    //资源类型默认值
    typeInlit() {
      request.get(resource + "/api/app/resourceType").then(res => {
        this.typeList = res.data.items; //获取到资源类型列表
      });
    },
    // 资源类型请求筛选数据
    typeDirectory(type, index) {
      //高亮显示
      this.typeActive = index;
      //清空关键词
      this.input = "";
      if (type != undefined) {
        this.ResourceType = type; //获取到资源类型
      }
      this.getSelect(
        "",
        this.MajorId,
        this.CourseId,
        type,
        this.page,
        this.per_page
      );
    },
    // 关键词请求数据
    keyDirectory() {
      this.getSelect(
        this.input,
        this.MajorId,
        this.CourseId,
        this.ResourceType,
        this.page,
        this.per_page
      );
    }
  }
};
</script>
<style lang="less" scoped>
.portal {
  .list {
    background-color: #eeeeee;
    .top {
      background-color: #fff;
      .top_fold {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .top_select {
        margin-top: 38px;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        .select_f {
          width: 74%;
          .f_one {
            &::before {
              content: "职业：";
              color: #0093d9;
              min-width: 50px;
            }
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            cursor: pointer;
            .one_li {
              list-style: none;
              padding: 10px 20px 10px 0;
              color: #666666;
              &:hover {
                color: #0093d9;
              }
              &.active {
                color: #ff9900;
              }
            }
            .two_li {
              padding: 10px 0 10px 30px;
              list-style: none;
              color: #ff9900;
              cursor: pointer;
            }
          }
        }
        .select_s {
          width: 74%;
          margin-top: 10px;
          ul {
            &::before {
              content: "课程：";
              color: #0093d9;
              min-width: 50px;
            }
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            cursor: pointer;

            li {
              list-style: none;
              padding: 0px 10px;
              font-family: MicrosoftYaHei;
              font-size: 16px;
              color: #666666;
              &:hover {
                color: #0093d9;
              }
              &.active {
                color: #ff9900;
              }
            }
          }
        }
        .select_t {
          width: 74%;
          margin-top: 10px;
          ul {
            &::before {
              content: "资源类型：";
              color: #0093d9;
              min-width: 50px;
            }
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            cursor: pointer;
            li {
              list-style: none;
              padding: 10px 10px;
              font-family: MicrosoftYaHei;
              font-size: 16px;
              color: #666666;
              &:hover {
                color: #0093d9;
              }
              &.active {
                color: #ff9900;
              }
            }
          }
        }
        .select_b {
          width: 74%;
          margin-top: 10px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          &::before {
            content: "关键词：";
            color: #0093d9;
            min-width: 50px;
          }
          .el-input {
            width: 300px;
            margin-right: 20px;
            /deep/.el-input__inner {
              border-radius: 0;
            }
            .el-button {
              border-radius: 0;
            }
          }
        }
        .select_l {
          margin-top: 18px;
          width: 100%;
          height: 5px;
          background-color: #eeeeee;
        }
      }
    }
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content_head {
        padding-top: 25px;
        padding-bottom: 6px;
        background-color: #fff;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        .l_list {
          width: 74%;
          min-width: 312px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .icon_arrow {
            width: 12px;
            height: 20px;
            position: relative;
            .el-icon-arrow-up {
              position: absolute;
              top: 0px;
              cursor: pointer;
              color: #cccccc;
              font-size: 12px;
              &:hover {
                color: #0092da;
              }
            }
            .el-icon-arrow-down {
              position: absolute;
              bottom: 0px;
              cursor: pointer;
              color: #cccccc;
              font-size: 12px;
              font-weight: bold;
              &:hover {
                color: #0092da;
              }
            }
          }
          .list_time {
            margin-left: 30px;
          }
          .list_size {
            margin-left: 30px;
          }
          .list_number {
            margin-left: 30px;
          }
        }
      }
      .content_body {
        width: 76%;
        background-color: #eeeeee;
        .body_top {
          display: flex;
          flex-wrap: wrap;
          .f_item {
            width: 340px;
            background-color: #ffffff;
            box-sizing: border-box;
            margin: 20px 20px 0 0;
            cursor: pointer;
            &:hover {
              margin-top: 18px;
              margin-bottom: 2px;
            }
            .item_img {
              width: 100%;
              height: 240px;
              object-fit: cover;
            }
            .item_content {
              height: 100px;
              padding: 19px 19px 0 19px;
              margin-top: -4px;
              border-bottom: 1px solid #e5e5e5;
              // 字体超出隐藏
              // overflow: hidden;
              // text-overflow: ellipsis;
              // white-space: nowrap;
              .cot_bot {
                margin-top: 46px;
                display: flex;
                justify-content: space-between;
                .b_left {
                  display: flex;
                  align-items: center;
                }
                .b_right {
                  display: flex;
                  align-items: center;
                }
              }
            }
            .item_foot {
              margin: 10px 10px 10px 10px;
            }
          }
        }
        .pag {
          text-align: center;
          margin-top: 38px;
          margin-bottom: 100px;
        }
      }
    }
  }
}
</style>
