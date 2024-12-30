# 解绑 MFA 认证要素

<LastUpdated />

当前不支持通过此接口解绑短信、邮箱验证码类型的认证要素。如果需要，请调用「解绑邮箱」和「解绑手机号」接口。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| factorId | string | 是 | - | MFA 认证要素 ID  | `6229ffaxxxxxxxxcade3e3d9` |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.resetFactor("6229ffaxxxxxxxxcade3e3d9", (AuthCallback) response -> {
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

