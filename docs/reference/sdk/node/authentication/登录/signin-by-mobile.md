# Use mobile social login

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

This endpoint is a mobile social login interface, which uses the temporary credentials returned by the third-party mobile social login to log in and exchange the user's `id_token` and `access_token`. Please read the corresponding social login access process first.

Note: Depending on the **application type** you selected when creating the application in GenAuth and the **exchange token authentication method** configured in the application, different forms of client identity verification are required when calling this interface.

<details>
<summary>Click to expand details</summary>

<br>

You can find the **Exchange token authentication method** configuration item in **Application** - **Self-built application** - **Application details** - **Application configuration** - **Other settings** - **Authorization configuration** in the [GenAuth console](https://console.genauth.ai):

> Single-page web applications and client applications are hidden, and the default value is `none`, which is not allowed to be modified; backend applications and standard web applications can modify this configuration item.

![](https://files.authing.co/api-explorer/tokenAuthMethod.jpg)

#### When the exchange token authentication method is none

No additional operations are required to call this interface.

#### When the exchange token authentication method is client_secret_post

When calling this interface, the `client_id` and `client_secret` parameters must be passed in the body as conditions for verifying the client identity. Among them, `client_id` is the application ID, and `client_secret` is the application secret key.

#### When exchanging token authentication mode is client_secret_basic

When calling this interface, the `authorization` request header must be carried in the HTTP request header as a condition for verifying the client identity. The format of the `authorization` request header is as follows (where `client_id` is the application ID and `client_secret` is the application secret key):

```
Basic base64(<client_id>:<client_secret>)
```

Result example:

```
Basic NjA2M2ZiMmYzY3h4eHg2ZGY1NWYzOWViOjJmZTdjODdhODFmODY3eHh4eDAzMjRkZjEyZGFlZGM3
```

JS code example:

```js
"Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64");
```

</details>

## Method name

`AuthenticationClient.signInByMobile`

## Request parameters

| Name | Type | <div style="width:80px">Is it required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------ | ------------------------ ...| `wework` |
| connection | string | yes | - | Mobile social login type:<br>- `apple`: Apple mobile application<br>- `wechat`: WeChat mobile application<br>- `alipay`: Alipay mobile application<br>- `wechatwork`: WeChat mobile application for enterprises<br>- `wechatwork_agency`: WeChat mobile application for enterprises (agency development mode)<br>- `lark_internal`: Feishu mobile enterprise self-built application<br>- `lark_public`: Feishu mobile application store application<br>- `lark_block`: Feishu widget<br>- `yidun`: NetEase Yidun one-click login<br>- `wechat_mini_program_code`: WeChat mini program uses code to log in<br>- `wechat_mini_program_phone `: WeChat mini program uses mobile phone number to log in<br>- `wechat_mini_program_code_and_phone`: WeChat mini program uses code and mobile phone number to log in<br>- `google`: Google mobile social login<br>- `facebook`: Facebook mobile social login<br>- `qq`: QQ mobile social login<br>- `weibo`: Sina Weibo mobile social login<br>- `baidu`: Baidu mobile social login<br>- `linkedin`: LinkedIn mobile social login<br>- `dingtalk`: DingTalk mobile social login<br>- `github`: Github mobile social login<br>- `gitee`: Gitee mobile social login<br>- `gitlab`: GitLab mobile social login<br>- `douyin`: Douyin mobile social login<br>- `kuaishou`: Kuaishou mobile social login<br>- `xiaomi`: Xiaomi mobile social login<br>- `line`: LINE mobile social login<br>- `slack`: Slack mobile social login<br>- `oppo`: OPPO mobile social login<br>- `huawei`: Huawei mobile social login<br>- `amazon`: Amazon mobile social login<br> | `wechat` |
| wechatPayload | <a href="#SignInByWechatPayloadDto">SignInByWechatPayloadDto</a> | No | - | Apple mobile social login data, required when `connection` is `wechat`. | |
| applePayload | <a href="#SignInByApplePayloadDto">SignInByApplePayloadDto</a> | No | - | WeChat mobile social login data, required when `connection` is `apple`. | |
| alipayPayload | <a href="#SignInByApplePayloadDto">SignInByApplePayloadDto</a> | No | - | WeChat mobile social login data, required when `connection` is `apple`.ref="#SignInByAlipayPayloadDto">SignInByAlipayPayloadDto</a> | No | - | Alipay mobile social login data, required when `connection` is `alipay`. | |
| wechatworkPayload | <a href="#SignInByWechatworkDto">SignInByWechatworkDto</a> | No | - | Enterprise WeChat mobile social login data, required when `connection` is `wechatwork`. | |
| wechatworkAgencyPayload | <a href="#SignInByWechatworkAgencyPayloadDto">SignInByWechatworkAgencyPayloadDto</a> | No | - | Enterprise WeChat (agent development mode) mobile social login data, required when `connection` is `wechatwork_agency`. | |
| larkPublicPayload | <a href="#SignInByLarkPublicPayloadDto">SignInByLarkPublicPayloadDto</a> | No | - | Social login data for Lark App Store mobile app. Required when `connection` is `lark_public`.
