# 修改邮箱

<LastUpdated />

终端用户自主修改邮箱，需要提供相应的验证手段，见 [发起修改邮箱的验证请求](./verify-update-email-request.md)。
此参数需要提供一次性临时凭证 `updateEmailToken`，此数据需要从**发起修改邮箱的验证请求**接口获取。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| updateEmailToken | string | 是 | - | 用于临时修改邮箱的 token，可从**发起修改邮箱的验证请求**接口获取。  | `xxxx` |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.updateEmail("undefined", (AuthCallback) response -> {
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

