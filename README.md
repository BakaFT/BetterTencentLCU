# 介绍

这是一个 [Pengu Loader](https://github.com/PenguLoader/PenguLoader) 插件

**这个插件仅支持 Pengu Core 1.0.6-beta，如需预编译产物，请在[此处下载](https://github.com/BakaFT/PenguLoader/actions/)为国服适配好的版本**

# 功能

- 关闭导航栏文字
- 开启聊天窗口独立功能
- 开启个人状态
- 开启炫彩页面
- 无视生涯隐私
- 开启批量分解

- ~~选人界面屏蔽/举报~~（暂时有点问题，来个好心人修修吧

# 开发

本插件使用了Pengu Core 1.0.6添加的新特性，在[此处](https://github.com/BakaFT/pengu-rcp-hook-integration/)了解更多

插件实现了：

- Ember.js中`Extend()`方法的Hook，从而修改LCU中Ember Components，修改客户端的几乎任何部分
- XHR hook，从而实现对LCU API CALL的类MITM攻击，如修改API返回结果，从而欺骗LCU

通过这两个功能，我重新实现了LCUFIXTOOL的大部分功能，你可以基于这些继续进行开发

## 编译

Pengu Core 只认`index.js`，所以通过`esbuild`把是整个项目打包为单文件`ESM`即可

```bash
npm install
npm run build
```

## 自动编译

通过监控文件改动从而实现自动编译，只需在改动代码后通过Ctrl+Shift+R刷新客户端UX进程即可重载插件改动

```bash
npm run start
```

