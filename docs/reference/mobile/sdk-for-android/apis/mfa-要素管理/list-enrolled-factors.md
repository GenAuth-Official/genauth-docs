# 获取绑定的所有 MFA 认证要素

<LastUpdated />

GenAuth 目前支持四种类型的 MFA 认证要素：手机短信、邮件验证码、OTP、人脸。如果用户绑定了手机号 / 邮箱之后，默认就具备了手机短信、邮箱验证码的 MFA 认证要素。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | -------------------------------------- | ------ | ----------------------------------- | ------------------------------------------- |

## 示例代码

```java
AuthClient authClient = new AuthClient();
authClient.listEnrolledFactors((AuthCallback) response -> {
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
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "factorId": "6229ffaxxxxxxxxcade3e3d9",
    "factorType": "SMS",
    "profile": {
      "phoneNumber": "188xxxx8888",
      "phoneCountryCode": "+86"
    }
  }
}
```

## 数据结构

### <a id="data"></a> data

| 名称       | 类型   | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div>                    |
| ---------- | ------ | -------------------------------------- | ----------------------------------- | -------------------------------------------------------- |
| factorId   | string | 是                                     | MFA 认证要素 ID                     | `6229ffaxxxxxxxxcade3e3d9`                               |
| factorType | string | 是                                     | MFA 认证要素类型                    | OTP                                                      |
| profile    | object | 是                                     | MFA 认证要素信息                    | `{"phoneNumber":"188xxxx8888","phoneCountryCode":"+86"}` |
