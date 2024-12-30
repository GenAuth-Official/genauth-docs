# 绑定 MFA 认证要素

<LastUpdated />

绑定 MFA 要素

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| factorType      | <a href="#FactorType">FactorType</a> | 是                                     | -      | MFA 认证要素类型，目前共支持短信、邮箱验证码、OTP、人脸四种类型的认证要素。 | `SMS` |
| enrollmentToken | String | 是                                     | -      | 「发起绑定 MFA 认证要素请求」接口返回的 enrollmentToken，此 token 有效时间为一分钟。 | `TQoCISidM0kBji0dxRi3afSDtkvvMiUphenIgLF87y+JOw4T8fDWOsHHXIcvZ2EVESXhTrfGyh1iGf52Cg9e9byeFQvm1VZ0QWrwmzwpntFAVtf1IP9LqVhmzXhBMFvLOcU/z1Eh/n0CrwX0uHNpJoMW9lp9AqHd9HvauaGKX+Y=` |
| passCode        | String | 否                                     | -      | 绑定短信、邮箱验证码、OTP 类型的认证要素时，需要传此参数。值为短信/邮箱/OTP 验证码。 | `1234`                                                       |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.enrollFactor(FactorType.SMS, "TQoCISidM0kBji0dxRi3afSDtkvvMiUphenIgLF87y+JOw4T8fDWOsHHXIcvZ2EVESXhTrfGyh1iGf52Cg9e9byeFQvm1VZ0QWrwmzwpntFAVtf1IP9LqVhmzXhBMFvLOcU/z1Eh/n0CrwX0uHNpJoMW9lp9AqHd9HvauaGKX+Y=", "1234", (AuthCallback) response -> {
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

### <a id="FactorType"></a> FactorType

| 名称  | 类型 | 描述               |
| :---- | :--- | ------------------ |
| SMS   | enum | 短信验证码认证要素 |
| EMAIL | enum | 邮箱验证码认证要素 |
| OTP   | enum | OTP 认证要素       |
| FACE  | enum | 人脸认证要素       |
