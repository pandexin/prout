'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async login() {
        // const md5=require('md5-node');
        let name = this.ctx.request.body.name;
        // console.log(name)
        let password = this.ctx.request.body.password
        // console.log(password)s
        let log = await this.app.model.Log.findOne({
            where:{
                name:name,
            }
        });
        console.log(1111111111111111111111111111)
        // console.log(log)
        console.log(1111111111111111111111111111)
        if(log == null){
            this.ctx.body = "用户不存在";
            // console.log("mnnmmmmmmmm")
            return
        }else{
            
        }
        //判断密码是否正确，正确则登录成功
        if(password == log.password){
            // this.ctx.session.user = user;  //设置session
            this.ctx.body='登录成功'
            
            // console.log("sssssssss")
        }else{
            // console.log("zzzzzzzzz")
            this.ctx.body = "密码错误！"
        }
    }
}

module.exports = UserService;
