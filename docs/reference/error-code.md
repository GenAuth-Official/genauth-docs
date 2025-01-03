---
meta:
  - name: description
    content: GenAuth 错误码
---

# GenAuth 错误码

<LastUpdated/>

GenAuth V3 API 和 SDK 如果没有特殊说明，所有接口返回的 HTTP 状态码均为 `200`。一个 HTTP 状态码为 `200` 的响应，不能视为操作成功，你需要通过响应体的具体内容进行判断。

GenAuth V3 API 和 SDK 的返回数据中，包含了两个状态码：`statusCode` 和 `apiCode`：

- `statusCode`: `statusCode` 为请求状态码，不包含具体的业务错误信息。
  - **当且仅当 statusCode 为 200 时，表示接口请求成功**，此时不会带有 `apiCode`。
  - `statusCode` 不为 `200` 的情况下，表示接口请求失败或者需要进行额外操作（比如登录接口需要进行 MFA 二次验证），你需要对此进行关注，进行必要的错误处理。每个 `statusCode` 对应一个类型的错误，
    具体的错误分类请见下文。在大多数情况下，除非你需要对某些特定的异常做出响应，否则你只需要关注 `statusCode`，不需要关注 `apiCode`。
- `apiCode`: `apiCode` 为业务状态码，每个 `apiCode` 具备特定的错误含义，具体的 `apiCode` 列表见下文。`apiCode` 只会在 `statusCode` 非 200 且错误原因具备业务含义时才会返回。

## statusCode

| 错误码大类 | 错误类型           | 包含详细错误码                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2xx        | 请求正常           | - 200: OK                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4xx        | 客户端异常         | - [400]InvalidArgumentError：请求参数格式错误 <br> - [401]UnauthorizedError：用户未登录 <br>- [402]PaymentNeededError：此接口需要升级套餐之后使用<br>- [403]ForbiddenError：没有权限执行某操作<br>- [404]NotFoundError：找不到资源<br>- [409]ConflictError：要创建的资源和已有资源存在字段冲突<br>- [413]PayloadTooLargeError：请求体过大<br>- [422]InvalidOperationError：非法操作（参数格式正确，但不符合业务限制）<br>- [429]ThrottleError：触发限流机制<br>- [499]ClientError：通用客户端异常 |
| 5xx        | 服务器端异常       | - [500]ServerError：通用服务端异常<br>- [501]UnsupportedOperationError：服务器不支持的操作<br> - [502]BadGatewayError：微服务调用出错<br> - [503]ServiceUnavailableError：维护中                                                                                                                                                                                                                                                                                                                  |
| 6xx        | 第三方服务调用异常 | - [601]EndpointRequestError：请求第三方端点失败<br>- [602]EndpointResponseError：第三方端点返回了错误<br>- [603]CustomCodeError：自定义代码出错，例如 pipeline 或自定义数据库                                                                                                                                                                                                                                                                                                                     |

## apiCode

| apiCode | 描述                                                       |
| :------ | :--------------------------------------------------------- |
| 1300    | AK/SK 签名不合法                                           |
| 1301    | AK/SK 签名方式和服务端不匹配                               |
| 1302    | AK/SK 签名版本和服务端不匹配                               |
| 1303    | AK/SK 签名时间戳格式不正确，应该是单位为毫秒的 Unix 时间戳 |
| 1304    | 使用 AK/SK 签名机制时，请求头中没有 date 请求头            |
| 1305    | AK/SK 签名时间戳和服务器时间戳相差较大，此次请求不被允许   |
| 1306    | AK/SK 签名已经被消费过，此次请求不被允许                   |
| 1600    | 认证后流程成功完成，登录态已设置                           |
| 1635    | 个人（个人中心绑定）MFA                                    |
| 1636    | 企业（应用下配置的） MFA                                   |
| 1639    | 首次登录重置密码（不需要验证旧密码）                       |
| 1640    | 触发联邦认证询问身份绑定，只允许绑定现有账号               |
| 1641    | 触发联邦认证询问身份绑定，允许绑定现有账号和创建新账号     |
| 1642    | 登录信息补全                                               |
| 1643    | 用户自主解锁                                               |
| 1699    | 提前终止认证后流程，返回登录界面                           |
| 1700    | 未上传人脸识别的照片                                       |
| 1701    | 人脸对比时，未上传需要对比的图片                           |
| 1702    | 人脸校验错误                                               |
| 1703    | 未绑定邮箱或手机号，无法绑定人脸                           |
| 1704    | 绑定人脸时，手机验证失败                                   |
| 1705    | 绑定人脸时，邮箱验证失败                                   |
| 1706    | 人脸已被绑定                                               |
| 1707    | 绑定人脸失败                                               |
| 2004    | 用户未找到                                                 |
| 2005    | 用户已锁定                                                 |
| 2006    | 密码错误                                                   |
| 2011    | 应用不存在                                                 |
| 2020    | 尚未登录，无权限访问此请求                                 |
| 2031    | 应用已禁止注册用户                                         |
| 2039    | 应用域名已被占用                                           |
| 2040    | 用户池域名已被占用                                         |
| 2058    | 强制重置密码（需要验证旧密码）                             |
| 2224    | 用户池不存在                                               |
| 2333    | 用户名或密码错误                                           |
| 4021    | 计量计费错误                                               |
| 6001    | Totp 码错误                                                |
| 6002    | Totp 恢复码错误                                            |
| 6003    | 未输入 Totp 安全码                                         |
| 6004    | 未输入 Totp 恢复码                                         |
| 2120008 | 用户已停用或不是此租户成员                                 |
| 2130010 | 用户无权限登录此租户                                       |
| 2820002 | 无效的 LDAP 链接                                           |

## 响应数据示例

一个成功的请求响应数据示例如下：

```json
{
  // 此响应表示请求成功，所以不会返回 apiCode
  "statusCode": 200,
  "message": "",
  "data": {
    // ... 省略具体数据
  }
}
```

一个失败的请求响应数据示例如下：

```json
{
  // 此类型错误不具备具体的业务含义，所以不会返回 apiCode
  "statusCode": 429,
  "message": "您的请求已超过最大数量限制，请稍后重试"
}
```

以及：

```json
{
  // 账号不存在或密码错误具备业务含义，所以返回了对应的 apiCode: 2333
  "statusCode": 403,
  "apiCode": 2333,
  "message": "Account not exists or password is incorrect.",
  "requestId": "xxxxxx-xxxxxx-xxxxxx-xxxxxx"
}
```

## 我该如何处理 statusCode 和 apiCode

在大多数情况下，除非你需要对某些特定的异常做出响应，否则你只需要关注 `statusCode`，不需要关注 `apiCode`。
比如登录接口，如果你只需要在用户登录失败的时候给出错误提示，可以不用关心 `apiCode`；但是如果你需要对某一种
特定的业务错误进行额外处理，就需要根据 `apiCode` 进行判断。

## 获取帮助

有任何建议或者问题反馈，欢迎在 [GenAuth 论坛](https://forum.genauth.ai/)中提出。
