'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
  //   await ctx.render(banner.html,{
  //     z:"智",
  //     n:"能",
  //     bxx:"保险箱",
  //     aqg:"有安全感才能稳稳地幸福"
  // })
  }

}

module.exports = HomeController;
