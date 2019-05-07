'use strict';

const Controller = require('egg').Controller;

class AssociatedController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("Associated.html", {
      sp2: "保险箱将按此顺序拨号,拖动可排序",
      sp3: "×",
      pic2: "../public/image/@backcolor.jpg",
      sp4: "13149869439",
      sp5: "13149869439",
      sp6: "删除",
      pic3: "../public/image/@backcolor.jpg",
      sp7: "13149869439",
      pic4: "../public/image/@backcolor.jpg",
      sp8: "13149869439",
      lypic1: "../public/image/tab_safebox@2x.png",
      scr1: "保险箱",
      lypic2: "../public/image/tab_opendoor@2x.png",
      scr2: "开门记录",
      lypic3: "../public/image/tab_alarm@2x.png",
      scr3: "报警记录",
      lypic4: "../public/image/tab_associated_pre@2x.png",
      scr4: "关联用户",
      associatednList: [
        {
          url: "../public/image/back@2x.png",
          pic: "../public/image/add@2x.png",
          sp1: "米克保险箱",
        },
      ],
    })
  }
}

module.exports = AssociatedController;
