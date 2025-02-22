# 判断用户是否存在

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

根据条件判断用户是否存在，可以筛选用户名、邮箱、手机号、第三方外部 ID 等。

## 请求参数

| 名称       | 类型   | 必填 | 默认值 | 描述                   | 示例值             |
| ---------- | ------ | ---- | ------ | ---------------------- | ------------------ |
| username   | string | 否   | -      | 用户名，用户池内唯一。 | `bob`              |
| email      | string | 否   | -      | 邮箱。                 | `test@example.com` |
| phone      | string | 否   | -      | 手机号。               | `188xxxx8888`      |
| externalId | string | 否   | -      | 第三方外部 ID。        | `10010`            |

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

        IsUserExistsReqDto request = new IsUserExistsReqDto();
        request.setUsername("bob");
        request.setEmail("test@example.com");
        request.setPhone("188xxxx8888");
        request.setExternalId("10010");

        IsUserExistsRespDto response = managementClient.isUserExists(request);
        System.out.println(response);
    }
}
```

## 请求响应

类型： `IsUserExistsRespDto`

| 名称       | 类型                                           | 描述                                                         |
| ---------- | ---------------------------------------------- | ------------------------------------------------------------ |
| statusCode | number                                         | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | string                                         | 描述信息                                                     |
| apiCode    | number                                         | 细分错误码，可通过此错误码得到具体的错误类型。               |
| data       | <a href="#IsUserExistsDto">IsUserExistsDto</a> | 响应数据                                                     |

示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "exists": true
  }
}
```

## 数据结构

### <a id="IsUserExistsDto"></a> IsUserExistsDto

| 名称   | 类型    | 必填 | 描述                           |
| ------ | ------- | ---- | ------------------------------ |
| exists | boolean | 是   | 用户是否存在。 示例值： `true` |
