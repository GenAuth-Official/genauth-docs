# 解绑外部身份源

<LastUpdated />

解绑外部身份源，此接口需要传递用户绑定的外部身份源 ID，**注意不是身份源连接 ID**。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| extIdpId | string | 是 | - | 外部身份源 ID  | `62f209327xxxxcc10d966ee5` |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.unLinkExtIdp("62f209327xxxxcc10d966ee5", (AuthCallback) response -> {
    if (response.getStatusCode() == 200) {
        JSONObject data = response.getData();
        // data：请求成功返回的数据
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

