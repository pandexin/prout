# axios中文文档
原文地址：lewis1990@amoy
* axios 基于promise用于浏览器和node.js的http客户端
# vue用axios获取数据
方法一

安装 cnpm install axios

引入 import axios from 'axios'

Vue.prototype.$http = axios

new Vue ({... ,axios})
使用：

* this.$http.post('接口'，{数据})
* .then(res => {
* })


方法二

cnpm install axios vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
使用：

* Vue.axios.get(`/api/article/detail?id=
* ${this.$route.params.id}`)
*    .then(res => {
*           this.articleDetail = res.data[0];       
*    })
*   .catch(err => console.log(err))
* }


# axios
1. axios.request(config)
2. axios.get(url[, config])
3. axios.delete(url[, config])
4. axios.head(url[, config])
5. axios.options(url[, config])
6. axios.post(url[, data[, config]])
7. axios.put(url[, data[, config]])
8. axios.patch(url[, data[, config]])