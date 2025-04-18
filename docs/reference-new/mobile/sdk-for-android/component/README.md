# 超组件

<LastUpdated/>

如果应用需要自定义认证流程和界面，推荐使用超组件（Hyper Component）快速构建认证流程和界面。

超组件（Hyper Component）是我们在低代码领域的重要创新，它具备以下特性：

* 语义化
* 上下文感知
* 数据实时同步
* 声明式编程
* 可嵌入

Guard 提供了认证领域相关、功能齐全的超组件集合，开发者只需要在需要的地方“放置”相应的超组件即可实现业务功能。
接下来，我们通过一个简单例子来展示语义化编程的魅力。

假设我们需要在某个地方显示应用图标，并在其下面显示应用名称。应用图标和名称都可以在控制台配置：

![](./../images/appconfig.png)

按照传统编程模型思路，我们需要写非常多的代码。具体来说，我们需要在 xml 里面放置 UI 控件，我们还需要编写网络请求代码，然后将网络请求结果刷新 UI。这里有很多细节，举例来说，网络请求结束后的回调是在后台线程，如果直接设置 UI，应用程序就会崩溃。另外，图片的保存还涉及到本地磁盘以及内存缓存。

如果使用超组件，开发就变得非常简单。

<br>
<span style="background-color: #682AE9;a:link:color:#FFF;padding:8px;border-radius: 4px;"><a href="./tutorial/example.html" style="color:#FFF;">超组件入门示例 →</a>
</span>