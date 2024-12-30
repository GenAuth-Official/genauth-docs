# 安装使用

<LastUpdated/>

## 第一步：新建 iOS 工程

![](./images/create_project1.png)

![](./images/create_project2.png)

## 第二步：在工程中添加 SDK 依赖

1. 在 Xcode 菜单栏右上角选择 **File** 点击 **Add Packages** 。

2. 在 Swift Package 搜索栏输入：「 https://github.com/Authing/authing-ios-sdk-v3 」 。

3. **依赖规则** 选择 **Up to Next Major Version 1.0.0** 。

<br>

## 第三步：初始化

1. 在 **AppDelegate** 或 **SceneDelegate** 中加入 **import GenAuth** 。

2. 调用 **GenAuth.start()** 参数传入 [App ID](https://docs.genauth.ai/guides/faqs/get-app-id-and-secret.html)。

::: hint-info
Objective-C 项目需创建 Bridging-Header 桥接文件让 OC 与 Swift 互通。
:::

```swift
import GenAuth

GenAuth.start(<#GEN_AUTH_APP_ID#>)
```

<br>
