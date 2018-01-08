# eye

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


开眼的接口

//每日精选  一个banner  然后就是时间顺序的数据（不输入date就是banner，输入就是按照日期）
"http://baobab.wandoujia.com/api/v2/feed?num=2&udid=26868b32e808498db32fd51fb422d00175e179df&vc=83";
//分类
http://baobab.kaiyanapp.com/api/v4/categories/
//热门排行
"http://baobab.wandoujia.com/api/v3/ranklist?num=10&strategy=%s&udid=26868b32e808498db32fd51fb422d00175e179df&vc=83";
val STRATEGY = arrayOf("weekly", "monthly", "historical")//周排行 日排行 月排行



## 发现

#### hot 热门
http://baobab.kaiyanapp.com/api/v4/discovery/hot

##### 周榜
http://baobab.kaiyanapp.com/api/v3/ranklist?num=10&strategy=weekly
##### 月排行
http://baobab.kaiyanapp.com/api/v3/ranklist?num=10&strategy=monthly
##### 总排行
http://baobab.kaiyanapp.com/api/v3/ranklist?num=10&strategy=historical



#### 分类
<!-- http://baobab.kaiyanapp.com/api/v4/categories/ -->
http://baobab.kaiyanapp.com/api/v4/discovery/category

#### 作者
http://baobab.kaiyanapp.com/api/v4/pgcs/all

## 关注
http://baobab.kaiyanapp.com/api/v4/tabs/follow

## 我的
这个没有


## 获取视频详情
http://baobab.wandoujia.com/api/v1/video/14416

## 获取关联视频
http://baobab.wandoujia.com/api/v1/video/related/14416?num=5

## 获取当前视频评论
http://baobab.wandoujia.com/api/v1/replies/video?id=14416&num=5

## 官网视频最近6个视频API
http://baobab.wandoujia.com/api/v1/video/related/2492/?num=6

## 官网视频详情页面
http://www.wandoujia.com/eyepetizer/detail.html?vid=2492


http://baobab.kaiyanapp.com/api/v4/categories/detail/tab?id=36//分类详情

http://baobab.kaiyanapp.com/api/v4/categories/videoList?id=36 //分类里的全部视频

http://baobab.kaiyanapp.com/api/v4/categories/detail/index?id=36 //分类里的最近更新之类的（该项目中未使用）

http://baobab.kaiyanapp.com/api/v4/categories/detail/pgcs?id=36//分类的作者

//搜索关键字
http://baobab.kaiyanapp.com/api/v1/search?num=10&query=xxx&start=10

//首页请求
//首页  、 排行  分类



作者信息
http://baobab.kaiyanapp.com/api/v4/pgcs/detail/tab?id=571


详情页从上页拿到数据，然后显示一部分，然后相关这块又显示一部分
有作者显示作者 无作者不显示
详情页的相关
http://baobab.kaiyanapp.com/api/v4/video/related?id=45897


详情页：
第一个item 上页数据 有
第二个item 上页 可无
第三个item 请求相关接口
