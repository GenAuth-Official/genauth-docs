# 发起修改邮箱的验证请求

<LastUpdated />

终端用户自主修改邮箱时，需要提供相应的验证手段。此接口用于验证用户的修改邮箱请求是否合法。当前支持通过**邮箱验证码**的方式进行验证，你需要先调用发送邮件接口发送对应的邮件验证码。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| newEmail | String | 是 | - | 新邮箱 | `new@example.com` |
| newEmailPassCode | String | 是 | - | 新邮箱验证码 | `1234` |
| oldEmail | String | 否 | - | 旧邮箱，如果用户池开启了修改邮箱需要验证之前的邮箱，此参数必填。 | `old@example.com` |
| oldEmailPassCode | String | 否 | - | 旧邮箱验证码，如果用户池开启了修改邮箱需要验证之前的邮箱，此参数必填。 | `1234` |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.updateEmailRequest("new@example.com", "1234", "old@example.com", "1234", (AuthCallback) response -> {
    if (response.getStatusCode() == 200) {
        // 请求成功
    }
});
```


## 请求响应

类型： `AuthResponse`

| 名称       | 类型       | 描述                                                         |
| ---------- | ---------- | ------------------------------------------------------------ |
| statusCode | int        | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | String     | 描述信息                                                     |
| apiCode    | int        | 细分错误码，可通过此错误码得到具体的错误类型。               |
| requestId  | String     | 请求 ID，当请求失败时会返回。                                |
| data       | JSONObject | 响应数据<br/>参考：<a href="#data">data</a>。                |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "tokenExpiresIn": 60
  }
}
```

## 数据结构


### <a id="data"></a> data

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| updateEmailToken | string | 是 | 用于修改当前邮箱的 token，你需要使用此 token 调用**[修改邮箱](./update-email.md)**接口。 |  |
| tokenExpiresIn | number | 是 | Token 有效时间，时间为 60 秒。   |  `60` |

