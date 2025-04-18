# 修改角色

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

通过权限分组内角色新旧 code，修改角色，可以选择角色描述等。

## 请求参数

| 名称        | 类型   | 必填 | 默认值  | 描述                           | 示例值                |
| ----------- | ------ | ---- | ------- | ------------------------------ | --------------------- |
| newCode     | string | 是   | -       | 角色新的权限分组内唯一识别码。 | `code2`               |
| code        | string | 是   | -       | 权限分组内角色的唯一标识符。   | `code1`               |
| namespace   | string | 否   | default | 所属权限分组的 code。          | `default`             |
| description | string | 否   | -       | 角色描述。                     | `this is description` |

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

        UpdateRoleDto request = new UpdateRoleDto();
        request.setCode("code1");
        request.setNewCode("code2");
        request.setNamespace("default");
        request.setDescription("this is description");

        IsSuccessRespDto response = managementClient.updateRole(request);
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
