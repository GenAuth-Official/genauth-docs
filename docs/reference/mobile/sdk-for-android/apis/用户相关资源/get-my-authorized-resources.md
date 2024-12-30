# 获取被授权的资源列表

<LastUpdated />

此接口用于获取用户被授权的资源列表。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| namespace | string  | 否 | - | 所属权限分组的 code  | `default` |
| resourceType | ResourceType | 否 | - | 资源类型，如 数据、API、菜单、按钮  |  |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.getAuthorizedResources("default", ResourceType.DATA, (AuthCallback) response -> {
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
  "data": {
    "totalCount": 0,
    "list": [
      {
        "resourceCode": "ecs:1",
        "description": "服务器",
        "condition": [
          {
            "param": "AppId",
            "operator": "StringEquals",
            "value": "1"
          }
        ],
        "resourceType": "API",
        "apiIdentifier": "/api/v1/example",
        "actions": [
          "ecs:Start",
          "ecs:Stop"
        ],
        "effect": "ALLOW"
      }
    ]
  }
}
```

## 数据结构


### <a id="data"></a> data

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据<br>参考：<a href="#list">list</a>。 |  |


### <a id="list"></a> list

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceCode | string | 是 | 资源描述符   |  `ecs:1` |
| description | string | 否 | 资源描述信息   |  `服务器` |
| condition | array | 否 | 策略 Condition <br/>参考：<a href="#condition">condition</a>。 |  |
| resourceType | string | 是 | 资源类型   | DATA |
| apiIdentifier | string | 是 | API URL   |  `/api/v1/example` |
| actions | array | 是 | 授权的操作列表   |  `["ecs:Start","ecs:Stop"]` |
| effect | string | 是 | 允许还是拒绝   | ALLOW |


### <a id="condition"></a> condition

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| param | string | 是 | Condition Param   | UserPoolId |
| operator | string | 是 | Condition Operator   | Bool |
| value | string | 是 | Condition Value   |  `1` |

