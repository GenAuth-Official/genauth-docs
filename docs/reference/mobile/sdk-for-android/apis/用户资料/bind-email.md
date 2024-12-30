# 绑定邮箱

<LastUpdated />

如果用户还**没有绑定邮箱**，此接口可用于用户**自主**绑定邮箱。如果用户已经绑定邮箱想要修改邮箱，请使用**[修改邮箱](./update-email.md)**接口。你需要先调用**[发送邮件](../消息服务/send-email.md)**接口发送邮箱验证码。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| passCode | String | 是 | - | 邮箱验证码<br/>一个邮箱验证码只能使用一次，且有一定有效时间。<br/>你需要先调用 [发送邮件](../消息服务/send-email.md)（场景值为 `CHANNEL_BIND_EMAIL`）接口获取验证码。 | `1234` |
| email | String | 是 | - | 邮箱，不区分大小写。  | `test@example.com` |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.bindEmail("test@example.com", "1234", (AuthCallback) response -> {
    if (response.getStatusCode() == 200) {
        // 请求成功
    }
});
```


## 请求响应

类型： `AuthResponse`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | int | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | String | 描述信息 |
| apiCode | int | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | String | 请求 ID，当请求失败时会返回。 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## 数据结构

