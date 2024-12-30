# 发起修改手机号的验证请求

<LastUpdated />

终端用户自主修改手机号时，需要提供相应的验证手段。此接口用于验证用户的修改手机号请求是否合法。当前支持通过**手机号验证码**的方式进行验证，你需要先调用发送短信接口发送对应的手机号验证码。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| newPhoneCountryCode | String | 是 | - | 手机区号 | `+86` |
| newPhoneNumber | String | 是 | - | 新手机号码，不带区号。如果是国外手机号，请在 `newPhoneCountryCode` 参数中指定区号。 | `188xxxx8888` |
| newPhonePassCode | String | 是 | - | 验证码 | `1234` |
| oldPhoneCountryCode | String | 否 | - | 手机区号 |  |
| oldPhoneNumber | String | 否 | - | 旧手机号码，如果用户池开启了修改手机号需要验证之前的手机号，此参数必填。 |  |
| oldPhonePassCode | String | 否 | - | 旧手机号的验证码，如果用户池开启了修改手机号需要验证之前的手机号，此参数必填。 |  |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.updatePhoneRequest("+86", "188xxxx8888", "1234","oldPhoneCountryCode", "oldPhoneNumber", "oldPhonePassCode", (AuthCallback) response -> {
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
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "updatePhoneToken": "string",
    "tokenExpiresIn": 0
  }
}
```

## 数据结构


### <a id="data"></a> data

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| updatePhoneToken | String | 是 | 用于修改当前手机号的 token，你需要使用此 token 调用**[修改手机号](./update-phone.md)**接口。 |  |
| tokenExpiresIn | int | 是 | Token 有效时间，时间为 60 秒。   |  `60` |

