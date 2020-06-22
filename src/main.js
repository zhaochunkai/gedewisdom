import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'//导入时间格式化工具 

 Vue.prototype.moment = moment;
 Vue.filter('dataFilter',function (dataStr,patten = 'YYYY年MM月DD日') {
  return moment(dataStr).format(patten)
});


// import global from '../globle/globleApi'


// Vue.prototype.HOST = '/api';
// Vue.prototype.global = global;
// axios.defaults.baseURL = global.baseURL;
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
