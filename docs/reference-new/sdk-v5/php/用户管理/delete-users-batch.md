# 删除用户

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

通过用户 ID 列表，删除用户，支持批量删除，可以选择指定用户 ID 类型等。

## 请求参数

| 名称    | 类型                                                                 | 必填 | 默认值 | 描述           | 示例值                  |
| ------- | -------------------------------------------------------------------- | ---- | ------ | -------------- | ----------------------- |
| userIds | string[]                                                             | 是   | -      | 用户 ID 列表。 | `["userId1","userId2"]` |
| options | <a href="#DeleteUsersBatchOptionsDto">DeleteUsersBatchOptionsDto</a> | 否   | -      | 可选参数。     |                         |

## 示例代码

```php
<?php

require 'vendor/autoload.php';

use GenAuth\ManagementClient;

$management = new ManagementClient(
    "GEN_AUTH_USERPOOL_ID",
    "GEN_AUTH_USERPOOL_SECRET"
);

$data = $management->deleteUsersBatch(array(
      "userIds" => array("userId1","userId2"),
    "options" => array(
          "userIdType" => "user_id",
    ),

));
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

### <a id="DeleteUsersBatchOptionsDto"></a> DeleteUsersBatchOptionsDto

| 名称       | 类型   | 必填 | 描述                                                                                                                              |
| ---------- | ------ | ---- | --------------------------------------------------------------------------------------------------------------------------------- |
| userIdType | string | 否   | 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。。 枚举值：`user_id`,`external_id`,`phone`,`email`,`username` |

### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称    | 类型    | 必填 | 描述                           |
| ------- | ------- | ---- | ------------------------------ |
| success | boolean | 是   | 操作是否成功。 示例值： `true` |
