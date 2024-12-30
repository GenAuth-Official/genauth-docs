# {{$localeConfig.brandName}} - Android SDK

<LastUpdated/>

GenAuth Android SDK 包含用户认证模块，用户认证模块（AuthClient）以终端用户（End User）的身份进行请求，提供了登录、注册、登出、管理用户资料、获取授权资源等所有用户**自助完成**的操作。

**基本信息**

| 条目         | 说明                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------- |
| 支持版本     | Android 7.0 +                                                                            |
| 仓库地址     | [https://github.com/Authing/guard-android](https://github.com/Authing/guard-android)     |
| SDK 名称     | Guard Android SDK                                                                        |
| 开发者       | 北京蒸汽记忆科技有限公司                                                                 |
| 版本         | 2.0.0                                                                                    |
| 主要功能     | 包含基本登录组件的封装，如账密登录、手机号验证码登录，以及对 GenAuth 登录认证 API 的封装 |
| 个人信息收集 | 本 SDK 不收集个人隐私信息                                                                |
| 合规使用说明 | 参考[合规使用指南](/reference/mobile/sdk-for-android/compliance-guidelines.md)           |

**开始之前**

在开始开发之前，需要准备以下内容：

1. 开发设备上安装 [AndroidStudio](https://developer.android.google.cn/studio)。

2. 免费创建一个 [GenAuth 帐号](https://www.genauth.ai/)。

3. 在 GenAuth 控制台[创建一个客户端自建应用](https://docs.genauth.ai/guides/app-new/create-app/create-app.html)。<br/>在**选择类型**时请选择：**客户端应用**。

<img src="./images/create_client_application.png" alt="drawing" width="620"/>

## 安装

### 第一步：新建 Android 工程

在 AndroidStudio 的导航栏 File 中选中 New Project 来创建工程。

<img src="./images/create_project1.png" alt="drawing" width="800"/>

<img src="./images/create_project2.png" alt="drawing" width="800"/>

::: hint-info
注意：Minimum SDK 版本 Android 7.0。
:::

### 第二步：添加 Gradle 依赖

在工程根目录的 build.gradle (V4.2+以后的版本 AndroidStudio 创建的新工程在 setting.gradle) 文件里面需包含 `mavenCentral`：

```groovy
buildscript {
   repositories {
       mavenCentral()
       // other repositories
   }
}
```

在主工程的 build.gradle 文件里面添加依赖：

```groovy
implementation 'cn.authing:authing-android-sdk:+'
```

### 第三步：初始化

在应用启动时调用：

```java
// context is application or initial activity
// ”GEN_AUTH_APP_ID“ is obtained from the GenAuth console
GenAuth.init(context, "GEN_AUTH_APP_ID");
```

::: hint-info
注意：GEN_AUTH_APP_ID 是应用 ID，不是用户池 ID，请先 [前往控制台获取](https://docs.pre.genauth.ai/guides/app-new/create-app/app-configuration.html)。
:::

## 错误处理

GenAuth Android API SDK 方法在请求接口时，不会抛出 Exception（网络错误除外）。除非特殊说明，所有的方法返回值都会包含两个状态码`statusCode` 和 `apiCode`：

- `statusCode`: `statusCode` 为请求状态码，不包含具体的业务错误信息。**当且仅当 `statusCode` 为 `200` 时，表示接口请求成功**，此时不会带有 `apiCode`。`statusCode` 不为 `200` 的情况下， 表示接口请求失败或者需要进行额外操作（比如登录接口需要进行 MFA 二次验证），你需要对此进行关注，进行必要的错误处理。每个 `statusCode` 对应一个类型的错误， 具体的错误分类请见下文。在大多数情况下，除非你需要对某些特定的异常做出响应，否则你只需要关注 `statusCode`，不需要关注 `apiCode`。
- `apiCode`: `apiCode` 为业务状态码，每个 `apiCode` 具备特定的错误含义，具体的 `apiCode` 列表见下文。`apiCode` 只会在 `statusCode` 非 200 且错误原因具备业务含义时才会返回。
- `requestId`: 请求 ID，当请求失败时会返回。如果你在使用 Node SDK 的过程中遇到了错误，可以使用此 `requestId` 咨询 GenAuth 开发人员。

详细的 `statusCode` 列表和 `apiCode` 请见[错误码](https://docs.genauth.ai/v3/reference/other/error-code.html)。

## 私有化部署

<LastUpdated/>

如果你使用的是私有化部署的 GenAuth IDaaS 服务，需要指定此 GenAuth 私有化实例的 `host`，需要在调用 GenAuth.init() **之前**先调用:

```java
GenAuth.setHost(String host)；
```

- _`host`_ 是[私有化域名](https://docs.genauth.ai/guides/customize/domain/customized-domain.html)，如：`mycompany.com`

如果你不清楚如何获取，可以联系为你们提供 GenAuth IDaaS 服务的管理人员，通常是 IT 部门或信息化部门。

## 获取帮助

有任何建议或者问题反馈，欢迎在 [GenAuth 论坛 (opens new window)](https://forum.genauth.ai/)中提出。
