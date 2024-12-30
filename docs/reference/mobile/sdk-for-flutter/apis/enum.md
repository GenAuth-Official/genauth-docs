# 枚举值

<LastUpdated/>

## Channel

短信/邮件通道，指定发送此短信的目的。
发送短信/邮件时必须指定 `channel`，每个手机号/邮箱同一 `channel` 在一分钟内只能发送一次。

| 枚举值 | <div style="width:200px">说明</div> |
| :---- | :---- |
|  `CHANNEL_LOGIN`  |  用于用户登录 |
|  `CHANNEL_REGISTER`  | 用于用户注册 |
|  `CHANNEL_RESET_PASSWORD`  | 用于重置密码 |
|  `CHANNEL_BIND_PHONE`  | 用于绑定手机号 |
|  `CHANNEL_UNBIND_PHONE`  |  用于解绑手机号 |
|  `CHANNEL_BIND_MFA`  |  用于绑定 MFA |
|  `CHANNEL_VERIFY_MFA`  |  用于验证 MFA |
|  `CHANNEL_UNBIND_MFA`  |  用于解绑 MFA |
|  `CHANNEL_COMPLETE_PHONE`  |  用于在注册/登录时补全手机号信息 |
|  `CHANNEL_IDENTITY_VERIFICATION`  |  用于进行用户实名认证 |
|  `CHANNEL_DELETE_ACCOUNT`  |  用于注销账号 |

<br>

## Connection

社会化登录类型

| 枚举值 | <div style="width:200px">说明</div> |
| :---- | :---- |
|  `apple`  |  Apple 登录 |
|  `alipay`  |  支付宝 登录 |
|  `wechat`  |  微信登录 |
|  `wechatwork`  |  企业微信登录 |
|  `wechatwork_agency`  |  企业微信登录（代开发模式） |
|  `lark_internal`  |  飞书企业自建应用登录 |
|  `lark_public`  |  飞书应用商店应用登录 |
|  `google`  |  Google 登录 |

<br>

## PasswordEncryptType

密码加密类型，支持使用 RSA256 和国密 SM2 算法进行加密。

| 枚举值 | <div style="width:200px">说明</div> |
| :---- | :---- |
|  `none`  | 不对密码进行加密，使用明文进行传输 |
|  `sm2`  |  使用 RSA256 算法对密码进行加密 |
|  `ras`  |  使用国密 SM2 算法对密码进行加密 |
