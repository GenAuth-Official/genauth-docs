# 枚举值

<LastUpdated/>

## Channel

短信/邮件通道，指定发送此短信的目的。
发送短信/邮件时必须指定 `channel`，每个手机号/邮箱同一 `channel` 在一分钟内只能发送一次。

| 名称 | <div style="width:300px">rawValue</div> | <div style="width:200px">示例值</div> |
| :---- | :---- | :---- |
| Channel.login |  `CHANNEL_LOGIN`  |  用于用户登录 |
| Channel.register |  `CHANNEL_REGISTER`  | 用于用户注册 |
| Channel.reset_password |  `CHANNEL_RESET_PASSWORD`  | 用于重置密码 |
| Channel.bind_phone |  `CHANNEL_BIND_PHONE`  | 用于绑定手机号 |
| Channel.unbind_phone |  `CHANNEL_UNBIND_PHONE`  |  用于解绑手机号 |
| Channel.bind_mfa |  `CHANNEL_BIND_MFA`  |  用于绑定 MFA |
| Channel.verify_mfa |  `CHANNEL_VERIFY_MFA`  |  用于验证 MFA |
| Channel.unbind_mfa |  `CHANNEL_UNBIND_MFA`  |  用于解绑 MFA |
| Channel.complete_phone |  `CHANNEL_COMPLETE_PHONE`  |  用于在注册/登录时补全手机号信息 |
| Channel.identity_verification |  `CHANNEL_IDENTITY_VERIFICATION`  |  用于进行用户实名认证 |
| Channel.delete_account |  `CHANNEL_DELETE_ACCOUNT`  |  用于注销账号 |

<br>

## SocialConnection

社会化登录类型

| 名称 | <div style="width:300px">rawValue</div> | <div style="width:200px">示例值</div> |
| :---- | :---- | :---- |
| SocialConnection.apple |  `apple`  |  Apple 登录 |
| SocialConnection.wechat |  `wechat`  |  微信登录 |
| SocialConnection.wechatwork |  `wechatwork`  |  企业微信登录 |
| SocialConnection.wechatwork_agency |  `wechatwork_agency`  |  企业微信登录（代开发模式） |
| SocialConnection.lark_internal |  `lark_internal`  |  飞书企业自建应用登录 |
| SocialConnection.lark_public |  `lark_public`  |  飞书应用商店应用登录 |
| SocialConnection.google |  `google`  |  Google 登录 |

<br>

## EncryptType
密码加密类型，支持使用 RSA256 和国密 SM2 算法进行加密。

| 名称 | <div style="width:300px">rawValue</div> | <div style="width:200px">示例值</div> |
| :---- | :---- | :---- |
| EncryptType.NONE |  `none`  | 不对密码进行加密，使用明文进行传输 |
| EncryptType.SM2 |  `sm2`  |  使用 RSA256 算法对密码进行加密 |
| EncryptType.RSA |  `ras`  |  使用国密 SM2 算法对密码进行加密 |
