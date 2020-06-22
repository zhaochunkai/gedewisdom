import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/main";
import Home from "@/components/home";
import Culture from "@/components/culture";
import Product from "@/components/product";
import Portal from "@/components/portal";
import Hall from "@/components/hall";
import News from "@/components/news";
import Recruitment from "@/components/recruitment";
import Video from "@/components/video";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
      children: [
        {
          path: "/home",
          name: "Home",
          component: Home
        },
        {
          path: "/culture",
          name: "Culture",
          component: Culture
        },
        {
          path: "/product",
          name: "Product",
          component: Product
        },
        {
          path: "/hall",
          name: "Hall",
          component: Hall
        },
        {
          path: "/news",
          name: "News",
          component: News
        },
        {
          path: "/recruitment",
          name: "Recruitment",
          component: Recruitment
        },
        {
          path: "/portal",
          name: "Portal",
          component: Portal
        },
      ]
    },
    {
      path: "/video/:id",
      name: "Video",
      component: Video
    }
  ]
});
