# 删除角色

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

删除角色，可以批量删除。

## 请求参数

| 名称      | 类型     | 必填 | 默认值  | 描述                  | 示例值              |
| --------- | -------- | ---- | ------- | --------------------- | ------------------- |
| codeList  | string[] | 是   | -       | 角色 code 列表。      | `["code1","code2"]` |
| namespace | string   | 否   | default | 所属权限分组的 code。 | `default`           |

## 示例代码

```ts
import { ManagementClient } from "@genauth/nodejs";
// 在 Node.js 中引用：
// const { ManagementClient } = require('@genauth/nodejs');

const managementClient = new ManagementClient({
  accessKeyId: "GEN_AUTH_USERPOOL_ID",
  accessKeySecret: "GEN_AUTH_USERPOOL_SECRET",
});

(async () => {
  const result = await managementClient.deleteRolesBatch({
    codeList: ["code1", "code2"],
    namespace: "default",
  });
})();
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
