# 身份源连接开关

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

身份源连接开关，可以打开或关闭身份源连接。

## 请求参数

| 名称     | 类型    | 必填 | 默认值 | 描述                 | 示例值                     |
| -------- | ------- | ---- | ------ | -------------------- | -------------------------- |
| appId    | string  | 是   | -      | 应用 ID。            | `60b49eb83fd80adb96f26e68` |
| enabled  | boolean | 是   | -      | 是否开启身份源连接。 |                            |
| id       | string  | 是   | -      | 身份源连接 ID。      | `60b49eb83fd80adb96f26e68` |
| tenantId | string  | 否   | -      | 租户 ID。            | `60b49eb83fd80adb96f26e68` |

## 示例代码

```java
import cn.authing.sdk.java.dto.*;
import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.model.ManagementClientOptions;

class ManagementClientTest {
    private static String ACCESS_KEY_ID = "GEN_AUTH_USERPOOL_ID";
    private static String ACCESS_KEY_SECRET = "GEN_AUTH_USERPOOL_SECRET";

    public static void main(String[] args) {
        ManagementClientOptions clientOptions = new ManagementClientOptions(ACCESS_KEY_ID, ACCESS_KEY_SECRET);
        ManagementClient managementClient = new ManagementClient(clientOptions);

        EnableExtIdpConnDto request = new EnableExtIdpConnDto();
        request.setId("60b49eb83fd80adb96f26e68");
        request.setEnabled(false);
        request.setAppId("60b49eb83fd80adb96f26e68");
        request.setTenantId("60b49eb83fd80adb96f26e68");

        IsSuccessRespDto response = managementClient.enableExtIdpConn(request);
        System.out.println(response);
    }
}
```

## 请求响应

类型： `IsSuccessRespDto`

| 名称       | 类型                                     | 描述                                                         |
| ---------- | ---------------------------------------- | ------------------------------------------------------------ |
| statusCode | number                                   | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | string                                   | 描述信息                                                     |
| apiCode    | number                                   | 细分错误码，可通过此错误码得到具体的错误类型。               |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | 操作是否成功                                                 |

示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "success": true
  }
}
```

## 数据结构

### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称    | 类型    | 必填 | 描述                           |
| ------- | ------- | ---- | ------------------------------ |
| success | boolean | 是   | 操作是否成功。 示例值： `true` |
