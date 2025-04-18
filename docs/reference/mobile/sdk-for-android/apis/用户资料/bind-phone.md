# 绑定手机号

<LastUpdated />

如果用户还**没有绑定手机号**，此接口可用于用户**自主**绑定手机号。如果用户已经绑定手机号想要修改手机号，请使用**[修改手机号](./update-phone.md)**接口。你需要先调用**[发送短信](../消息服务/send-sms.md)**接口发送短信验证码。

## 请求参数

| 名称             | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div>                                                                                                                                                                           | <div style="width:200px"></div>示例值</div> |
| ---------------- | ------ | -------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| passCode         | String | 是                                     | -      | 短信验证码<br/>注意一个短信验证码指南使用一次，且有过期时间。<br/>你需要先调用 [发送短信](../消息服务/send-sms.md)（场景值为 `CHANNEL_BIND_PHONE`）接口获取验证码。                                           | `123456`                                    |
| phoneNumber      | String | 是                                     | -      | 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。                                                                                                                                    | `188xxxx8888`                               |
| phoneCountryCode | String | 否                                     | -      | 手机区号，中国大陆手机号可不填。GenAuth 短信服务暂不内置支持国际手机号，你需要在 GenAuth 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。 | `+86`                                       |

## 示例代码

```java
AuthClient authClient = new AuthClient();
authClient.bindPhone("+86", "188xxxx8888", "1234", (AuthCallback) response -> {
    if (response.getStatusCode() == 200) {
        // 请求成功
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
