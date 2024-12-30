# 发送短信

<LastUpdated />

发送短信时必须指定短信 Channel，每个手机号同一 Channel 在一分钟内只能发送一次。

## 请求参数

| 名称             | 类型                           | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <div style="width:200px"></div>示例值</div> |
| ---------------- | ------------------------------ | -------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| channel          | <a href="#SmsType">SmsType</a> | 是                                     | -      | 短信通道，指定发送此短信的目的：<br>- `CHANNEL_LOGIN`: 用于用户登录<br>- `CHANNEL_REGISTER`: 用于用户注册<br>- `CHANNEL_RESET_PASSWORD`: 用于重置密码<br>- `CHANNEL_BIND_PHONE`: 用于绑定手机号<br>- `CHANNEL_UNBIND_PHONE`: 用于解绑手机号<br>- `CHANNEL_BIND_MFA`: 用于绑定 MFA<br>- `CHANNEL_VERIFY_MFA`: 用于验证 MFA<br>- `CHANNEL_UNBIND_MFA`: 用于解绑 MFA<br>- `CHANNEL_COMPLETE_PHONE`: 用于在注册/登录时补全手机号信息 <br>- `CHANNEL_IDENTITY_VERIFICATION`: 用于进行用户实名认证<br>- `CHANNEL_DELETE_ACCOUNT`: 用于注销账号<br> | `CHANNEL_LOGIN`                             |
| phoneNumber      | String                         | 是                                     | -      | 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `188xxxx8888`                               |
| phoneCountryCode | String                         | 否                                     | -      | 手机区号，中国大陆手机号可不填。GenAuth 短信服务暂不内置支持国际手机号，你需要在 GenAuth 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。                                                                                                                                                                                                                                                                                                                                | `+86`                                       |

## 示例代码

```java
AuthClient authClient = new AuthClient();
authClient.sendSms("+86", "188xxxx8888", EmailType.CHANNEL_LOGIN, (AuthCallback) response -> {
    if (response.getCode() == 200) {
      	// 发送成功
    }
});
```

## 请求响应

类型： `AuthResponse`

| 名称       | 类型   | 描述                                                         |
| ---------- | ------ | ------------------------------------------------------------ |
| statusCode | int    | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | String | 描述信息                                                     |
| apiCode    | int    | 细分错误码，可通过此错误码得到具体的错误类型。               |
| requestId  | String | 请求 ID，当请求失败时会返回。                                |

示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## 数据结构

### <a id="SmsType"></a> SmsType

| 名称                          | 类型 | 描述                            |
| :---------------------------- | :--- | ------------------------------- |
| CHANNEL_LOGIN                 | enum | 用于用户登录                    |
| CHANNEL_REGISTER              | enum | 用于用户注册                    |
| CHANNEL_RESET_PASSWORD        | enum | 用于重置密码                    |
| CHANNEL_BIND_PHONE            | enum | 用于绑定手机号                  |
| CHANNEL_UNBIND_PHONE          | enum | 用于解绑手机号                  |
| CHANNEL_BIND_MFA              | enum | 用于绑定 MFA                    |
| CHANNEL_VERIFY_MFA            | enum | 用于验证 MFA                    |
| CHANNEL_UNBIND_MFA            | enum | 用于解绑 MFA                    |
| CHANNEL_COMPLETE_PHONE        | enum | 用于在注册/登录时补全手机号信息 |
| CHANNEL_IDENTITY_VERIFICATION | enum | 用于进行用户实名认证            |
| CHANNEL_DELETE_ACCOUNT        | enum | 用于注销账号                    |
