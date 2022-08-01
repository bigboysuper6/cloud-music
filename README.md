# 网易云音乐 网页版

技术:
React Hook、React Router 6、Material UI、React-Redux、Styled-Components

感谢[Binaryify](https://github.com/Binaryify)提供的[网易云 api](https://github.com/Binaryify/NeteaseCloudMusicApi)

已完成的功能

+ 轮播图
+ 二维码登录 和 登出
+ 导航栏
+ 路由跳转
+ 登录/未登录 界面变化
+ 歌单
+ 歌曲播放
+ 播放列表(目前只能 console)
+ 歌曲播放前进后退
+ 底部音乐栏

未完成功能

+ 路由守卫
+ 播放列表 ui 
+ 歌曲循环/随机/收藏等
+ 歌手相关
+ 个人主页
+ 音量调节
+ 等等

该项目尚未完成,后续将会持续完善 目前在对一些组件进行重构，包括将 sx={{}}的 css 行内样式转为 styled-component，规范组件目录，减少冗余代码等。进度请查看 restructure 分支

运行项目:

+ 先运行上面的 网易云 api
+ 项目默认端口 3000,如需改动请在 service 文件夹中修改rootUrl

```node
npm install 
npm start
```

**页面展示**

![](https://github.com/bigboysuper6/cloud-music/blob/main/readmeImage/%E6%88%AA%E5%B1%8F2022-05-19%20%E4%B8%8A%E5%8D%8810.39.38.png)

![](https://github.com/bigboysuper6/cloud-music/blob/main/readmeImage/%E6%88%AA%E5%B1%8F2022-05-19%20%E4%B8%8A%E5%8D%8810.40.00.png)

![](https://github.com/bigboysuper6/cloud-music/blob/main/readmeImage/%E6%88%AA%E5%B1%8F2022-05-19%20%E4%B8%8A%E5%8D%8810.40.08.png)

![](https://github.com/bigboysuper6/cloud-music/blob/main/readmeImage/%E6%88%AA%E5%B1%8F2022-05-19%20%E4%B8%8A%E5%8D%8810.41.40.png)

![](https://github.com/bigboysuper6/cloud-music/blob/main/readmeImage/%E6%88%AA%E5%B1%8F2022-05-19%20%E4%B8%8A%E5%8D%8810.41.52.png)

![](https://github.com/bigboysuper6/cloud-music/blob/main/readmeImage/%E6%88%AA%E5%B1%8F2022-05-19%20%E4%B8%8A%E5%8D%8811.09.32.png)
