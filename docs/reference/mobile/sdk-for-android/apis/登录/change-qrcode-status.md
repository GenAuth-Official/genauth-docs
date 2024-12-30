# 移动 APP 扫码登录：APP 端修改二维码状态

<LastUpdated />

此端点用于在移动 APP 扫码登录中修改二维码状态，对应着在浏览器渲染出二维码之后，终端用户扫码、确认授权、取消授权的过程。**此接口要求具备用户的登录态**。

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| action | <a href="#Action">Action</a> | 是 | - | 修改二维码状态的动作:<br>- `SCAN`: 修改二维码状态为已扫码状态，当移动 APP 扫了码之后，应当立即执行此操作。<br>- `CONFIRM`: 修改二维码状态为已授权，执行此操作前必须先执行 `SCAN 操作` 。<br> - `CANCEL`: 修改二维码状态为已取消，执行此操作前必须先执行 `SCAN` 操作。<br> | `CONFIRM` |
| qrcodeId | String | 是 | - | 二维码唯一 ID  |  |


## 示例代码
```java
AuthClient authClient = new AuthClient();
authClient.changeQrCodeStatus("", Action.SCAN, new AuthCallback() {
    @Override
    public void call(AuthResponse response) {
      if (response.getStatusCode() == 200) {
        	// 请求成功
      }
    }
});
```


## 请求响应

类型： `AuthResponse`

| 名称       | 类型   | 描述                                                         |
| ---------- | ------ | ------------------------------------------------------------ |
| statusCode | Int    | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | String | 描述信息                                                     |
| apiCode    | Int    | 细分错误码，可通过此错误码得到具体的错误类型。               |
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

### <a id="Action"></a> Action

| 名称    | 类型 | 描述                                                         |
| :------ | :--- | ------------------------------------------------------------ |
| SCAN    | enum | 修改二维码状态为已扫码状态，当移动 APP 扫了码之后，应当立即执行此操作。 |
| CONFIRM | enum | 修改二维码状态为已授权，执行此操作前必须先执行 `SCAN` 操作。 |
| CANCEL  | enum | 修改二维码状态为已取消，执行此操作前必须先执行 `SCAN` 操作。 |

