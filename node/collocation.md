# this
* this.ctx: 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
* this.app: 当前应用 Application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。
* this.service：应用定义的 Service，通过它我们可以访问到抽象出的业务层，等价于 this.ctx.service 。
* this.config：应用运行时的配置项。
* this.logger：logger 对象，上面有四个方法（debug，info，warn，error），分别代表打印四个不同级别的日志，使用方法和效果与 context logger 中介绍的一样，但是通过这个 logger 对象记录的日志，在日志前面会加上打印该日志的文件路径，以便快速定位日志打印位置。 
# 重定向
框架通过 security 插件覆盖了 koa 原生的 ctx.redirect 实现，以提供更加安全的重定向。
1.    ctx.redirect(url) 如果不在配置的白名单域名内，则禁止跳转。
2.    ctx.unsafeRedirect(url) 不判断域名，直接跳转，一般不建议使用，明确了解可能带来的风险后使用。
用户如果使用ctx.redirect方法，需要在应用的配置文件中做如下配置：
    // config/config.default.js
    exports.security = {
        domainWhiteList:['.domain.com'],  // 安全白名单，以 . 开头
    };
若用户没有配置 domainWhiteList 或者 domainWhiteList数组内为空，则默认会对所有跳转请求放行，即等同于ctx.unsafeRedirect(url)