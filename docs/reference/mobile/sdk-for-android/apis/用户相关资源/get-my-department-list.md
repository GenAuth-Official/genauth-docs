# 获取部门列表

<LastUpdated />

此接口用于获取用户的部门列表，可根据一定排序规则进行排序。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | withCustomData | boolean  | 否 | - | 是否获取部门的自定义数据  | `true` |
 | sortBy | string  | 否 | JoinDepartmentAt | 排序依据，如 部门创建时间、加入部门时间、部门名称、部门标志符  | `JoinDepartmentAt` |
 | orderBy | string  | 否 | Desc | 增序或降序  | `Desc` |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.getDepartmentList(1, 10, true, "JoinDepartmentAt", "Desc", (AuthCallback) response -> {
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
    "list": {
      "organizationCode": "steamory",
      "departmentId": "60b49eb83fd80adb96f26e68",
      "createdAt": "2022-07-03T02:20:30.000Z",
      "name": "dd8d7stf44",
      "description": "dd8d7stf44",
      "openDepartmentId": "ou_7dab8a3d3cdccxxxxxx777c7ad535d62",
      "isLeader": true,
      "code": "6229c4deb3e4d8a20b6021ff",
      "isMainDepartment": true,
      "joinedAt": "2022-07-03T02:20:30.000Z",
      "i18n": {
        "name": {
          "zh-CN": {
            "enabled": false,
            "value": "中文"
          },
          "en-US": {
            "enabled": false,
            "value": "English"
          }
        }
      },
      "customData": {
        "icon": "https://example.com/logo"
      }
    }
  }
}
```

## 数据结构


### <a id="data"></a> data

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据<br/>参考：<a href="#list">list</a>。 |  |


### <a id="UserDepartmentRespDto"></a> UserDepartmentRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| organizationCode | string | 是 | 组织 Code（organizationCode）   |  `steamory` |
| departmentId | string | 是 | 部门 ID   |  `60b49eb83fd80adb96f26e68` |
| createdAt | string | 是 | 部门创建时间   |  `2022-07-03T02:20:30.000Z` |
| name | string | 是 | 部门名称   |  `dd8d7stf44` |
| description | string | 是 | 部门描述   |  `dd8d7stf44` |
| openDepartmentId | string | 否 | 自定义部门 ID，用于存储自定义的 ID   |  `ou_7dab8a3d3cdccxxxxxx777c7ad535d62` |
| isLeader | boolean | 是 | 是否是部门 Leader   |  `true` |
| code | string | 是 | 部门识别码   |  `6229c4deb3e4d8a20b6021ff` |
| isMainDepartment | boolean | 是 | 是否是主部门   |  `true` |
| joinedAt | string | 是 | 加入部门时间   |  `2022-07-03T02:20:30.000Z` |
| isVirtualNode | boolean | 是 | 是否是虚拟部门   |  |
| i18n | object | 否 | 多语言设置<br/>参考：<a href="#i18n">i18n</a>。 |  `{"name":{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}}` |
| customData | object | 否 | 部门的扩展字段数据   |  `{"icon":"https://example.com/logo"}` |


### <a id="i18n"></a> i18n

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| name |  | 是 | 支持多语言的字段<br/>参考：<a href="#name">name</a>。 |  `{"zh-CN":{"enabled":false,"value":"中文"},"en-US":{"enabled":false,"value":"English"}}` |


### <a id="name"></a> name

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| zh-CN |  | 是 | 多语言的中文内容<br/>参考：<a href="#LangUnit">LangUnit</a>。 |  `{"enabled":false,"value":"中文"}` |
| en-US |  | 是 | 多语言的英文内容 <br/>参考：<a href="#LangUnit">LangUnit</a>。 |  `{"enabled":false,"value":"English"}` |
| zh-TW |  | 是 | 多语言的繁体中文内容<br/>参考：<a href="#LangUnit">LangUnit</a>。 |  `{"enabled":false,"value":"繁體中文"}` |
| ja-JP |  | 是 | 多语言的日语内容<br/>参考：<a href="#LangUnit">LangUnit</a>。 |  `{"enabled":false,"value":"日本語"}` |


### <a id="LangUnit"></a> LangUnit

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| enabled | boolean | 是 | 是否已开启。若开启，且控制台选择该语言，则展示该内容。（默认关闭）   |  |
| value | string | 是 | 多语言内容   |  |

