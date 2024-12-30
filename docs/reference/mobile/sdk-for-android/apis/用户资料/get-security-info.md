# 获取密码强度和账号安全等级评分

<LastUpdated />

获取用户的密码强度和账号安全等级评分，需要在请求头中带上用户的 `access_token`。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.getSecurityLevel((AuthCallback) response -> {
    if (response.getStatusCode() == 200) {
        JSONObject data = response.getData();
        // data：请求成功返回的数据
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
    "passwordSecurityLevel": 0,
    "mfaEnrolled": true,
    "passwordSet": true,
    "emailBinded": true,
    "phoneBinded": true,
    "securityScore": 0
  }
}
```

## 数据结构


### <a id="data"></a> data

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| passwordSecurityLevel | number | 是 | 密码强度等级   |  |
| mfaEnrolled | boolean | 是 | 是否绑定了 MFA   |  |
| passwordSet | boolean | 是 | 是否设置了密码   |  |
| emailBinded | boolean | 是 | 是否绑定了邮箱   |  |
| phoneBinded | boolean | 是 | 是否绑定了手机号   |  |
| securityScore | number | 是 | 账号等级评分   |  |

