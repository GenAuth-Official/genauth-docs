# 批量创建资源

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

批量创建资源，可以设置资源的描述、定义的操作类型、URL 标识等。

## 请求参数

| 名称      | 类型                                                                   | 必填 | 默认值 | 描述                  | 示例值    |
| --------- | ---------------------------------------------------------------------- | ---- | ------ | --------------------- | --------- |
| list      | <a href="#CreateResourceBatchItemDto">CreateResourceBatchItemDto[]</a> | 是   | -      | 资源列表。            |           |
| namespace | string                                                                 | 否   | -      | 所属权限分组的 code。 | `default` |

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
  const result = await managementClient.createResourcesBatch({
    namespace: "default",
    list: [
      {
        code: "ecs",
        description: "服务器",
        type: "API",
        actions: [
          {
            name: "ecs:Start",
            description: "ecs:Start",
          },
        ],
        apiIdentifier: "https://my-awesome-api.com/api",
      },
    ],
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

### <a id="CreateResourceBatchItemDto"></a> CreateResourceBatchItemDto

| 名称          | 类型   | 必填 | 描述                                                                                                                                                                                               |
| ------------- | ------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code          | string | 是   | 资源唯一标志符。 示例值： `ecs`                                                                                                                                                                    |
| description   | string | 否   | 资源描述。 示例值： `服务器`                                                                                                                                                                       |
| type          | string | 是   | 资源类型，如数据、API、按钮、菜单。 枚举值：`DATA`,`API`,`MENU`,`BUTTON`                                                                                                                           |
| actions       | array  | 否   | 资源定义的操作类型。嵌套类型：<a href="#ResourceAction">ResourceAction</a>。 示例值： `[{"name":"ecs:Start","description":"启动 ECS 服务器"},{"name":"ecs:Stop","description":"停止 ECS 服务器"}]` |
| apiIdentifier | string | 否   | API 资源的 URL 标识。 示例值： `https://my-awesome-api.com/api`                                                                                                                                    |

### <a id="ResourceAction"></a> ResourceAction

| 名称        | 类型   | 必填 | 描述                                |
| ----------- | ------ | ---- | ----------------------------------- |
| name        | string | 是   | 资源操作名称。 示例值： `ecs:Start` |
| description | string | 是   | 资源操作描述。 示例值： `ecs:Start` |

### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称    | 类型    | 必填 | 描述                           |
| ------- | ------- | ---- | ------------------------------ |
| success | boolean | 是   | 操作是否成功。 示例值： `true` |
