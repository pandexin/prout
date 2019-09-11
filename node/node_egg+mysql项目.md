# 创建项目
$ npm init egg --type=simple
## 安装依赖
$ cnpm i
## 安装egg-sequelize和mysql2
$ cnpm install --save egg-sequelize mysql2
## 模板渲染
$ cnpm i egg-view-nunjucks --save
### 制作问题
**登录与注册**
先写注册后写登录 注册的数据与登录的数据一致路由跳转，否则报错