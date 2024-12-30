# 注销账户

<LastUpdated />

此端点用于用户自主注销账号，需要提供用于注销账号的临时凭证 deleteAccountToken，此参数需要通过[发起注销账号请求](./verify-delete-account-request.md)接口获取。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| deleteAccountToken | string | 是 | - | 注销账户的 token  |  |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.deleteAccount("undefined", (AuthCallback) response -> {
    if (response.getStatusCode() == 200) {
        // 请求成功
    }
});
```


## 请求响应

类型： `IsSuccessRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | int | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | String | 描述信息 |
| apiCode | int | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | String | 请求 ID，当请求失败时会返回。 |
| data | JsonObject | 操作是否成功<br/>参考：<a href="#data">data</a>。 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## 数据结构


### <a id="data"></a> data

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| success | boolean | 是 | 操作是否成功   |  `true` |

