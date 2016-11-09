# Notes


## restrictions

 - [为了提升体验流畅度，编译后的代码包大小需小于 1MB ，大于 1MB 的代码包将上传失败。](https://mp.weixin.qq.com/debug/wxadoc/dev/qa/qa.html?t=20161107)
 - [由于框架并非运行在浏览器中，所以 JavaScript 在 web 中一些能力都无法使用，如 document，window 等。](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/?t=20161107)
 - [新的 ES6 的 API 例如 Promise 等需要开发者自行引入 Polyfill 或者别的类库。](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/module.html?t=20161107)
 - [小程序目前不支持直接引入 node_modules , 开发者需要使用到 node_modules 时候建议拷贝出相关的代码到小程序的目录中。](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/module.html?t=20161107)

## solutions

 - [apollo client](http://dev.apollodata.com/react/initialization.html)
 - [使用Labrador 0.3构建ES6/ES7标准模块化微信小程序](https://segmentfault.com/a/1190000007109050)
