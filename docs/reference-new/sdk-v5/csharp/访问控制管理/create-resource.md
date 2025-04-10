# 创建资源

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

创建资源，可以设置资源的描述、定义的操作类型、URL 标识等。

## 请求参数

| 名称          | 类型                                           | 必填 | 默认值 | 描述                                                                     | 示例值                                                                                                       |
| ------------- | ---------------------------------------------- | ---- | ------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| type          | string                                         | 是   | -      | 资源类型，如数据、API、按钮、菜单。 枚举值：`DATA`,`API`,`MENU`,`BUTTON` | `API`                                                                                                        |
| code          | string                                         | 是   | -      | 资源唯一标志符。                                                         | `ecs`                                                                                                        |
| description   | string                                         | 否   | -      | 资源描述。                                                               | `服务器`                                                                                                     |
| actions       | <a href="#ResourceAction">ResourceAction[]</a> | 否   | -      | 资源定义的操作类型。                                                     | `[{"name":"ecs:Start","description":"启动 ECS 服务器"},{"name":"ecs:Stop","description":"停止 ECS 服务器"}]` |
| apiIdentifier | string                                         | 否   | -      | API 资源的 URL 标识。                                                    | `https://my-awesome-api.com/api`                                                                             |
| namespace     | string                                         | 否   | -      | 所属权限分组的 code。                                                    | `default`                                                                                                    |

## 示例代码

```csharp

using GenAuth.CSharp.SDK.Models;
using GenAuth.CSharp.SDK.Services;
using GenAuth.CSharp.SDK.Utils;
using GenAuth.CSharp.SDK.UtilsImpl;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Example
{
    class Program
    {
      private static ManagementClientOptions options;
      private static string ACCESS_Key_ID = "GEN_AUTH_USERPOOL_ID";
      private static string ACCESS_KEY_SECRET = "GEN_AUTH_USERPOOL_SECRET";

      static void Main(string[] args)
      {
          MainAsync().GetAwaiter().GetResult();
      }

      private static async Task MainAsync()
      {
          options = new ManagementClientOptions()
          {
              AccessKeyId = ACCESS_Key_ID,
              AccessKeySecret = ACCESS_KEY_SECRET,
          };

          ManagementClient managementClient = new ManagementClient(options);

          ResourceRespDto  result = await managementClient.CreateResource
          (  new CreateResourceDto{                  Code= "ecs" ,
                  Description= "服务器" ,
                  Type= CreateResourceDto.type.API ,
                Actions= new List<ResourceAction>
                {
                    new ResourceAction
                    {
                     Name= "ecs:Start" ,
            Description= "ecs:Start" ,
                }
                  },
                  ApiIdentifier= "https://my-awesome-api.com/api" ,
                  Namespace= "default" ,
            }
          );
        }
    }
}

```

## 请求响应

类型： `ResourceRespDto`

| 名称       | 类型                                   | 描述                                                         |
| ---------- | -------------------------------------- | ------------------------------------------------------------ |
| statusCode | number                                 | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | string                                 | 描述信息                                                     |
| apiCode    | number                                 | 细分错误码，可通过此错误码得到具体的错误类型。               |
| data       | <a href="#ResourceDto">ResourceDto</a> | 资源详情                                                     |

示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "code": "ecs",
    "description": "服务器",
    "type": "API",
    "actions": "[{\"name\":\"ecs:Start\",\"description\":\"启动 ECS 服务器\"},{\"name\":\"ecs:Stop\",\"description\":\"停止 ECS 服务器\"}]",
    "apiIdentifier": "https://my-awesome-api.com/api",
    "namespace": "default"
  }
}
```

## 数据结构

### <a id="ResourceAction"></a> ResourceAction

| 名称        | 类型   | 必填 | 描述                                |
| ----------- | ------ | ---- | ----------------------------------- |
| name        | string | 是   | 资源操作名称。 示例值： `ecs:Start` |
| description | string | 是   | 资源操作描述。 示例值： `ecs:Start` |

### <a id="ResourceDto"></a> ResourceDto

| 名称          | 类型   | 必填 | 描述                                                                                                                                                                                               |
| ------------- | ------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code          | string | 是   | 资源唯一标志符。 示例值： `ecs`                                                                                                                                                                    |
| description   | string | 否   | 资源描述。 示例值： `服务器`                                                                                                                                                                       |
| type          | string | 是   | 资源类型，如数据、API、按钮、菜单。 枚举值：`DATA`,`API`,`MENU`,`BUTTON`                                                                                                                           |
| actions       | array  | 否   | 资源定义的操作类型。嵌套类型：<a href="#ResourceAction">ResourceAction</a>。 示例值： `[{"name":"ecs:Start","description":"启动 ECS 服务器"},{"name":"ecs:Stop","description":"停止 ECS 服务器"}]` |
| apiIdentifier | string | 否   | API 资源的 URL 标识。 示例值： `https://my-awesome-api.com/api`                                                                                                                                    |
| namespace     | string | 否   | 所属权限分组的 code。 示例值： `default`                                                                                                                                                           |

### <a id="ResourceAction"></a> ResourceAction

| 名称        | 类型   | 必填 | 描述                                |
| ----------- | ------ | ---- | ----------------------------------- |
| name        | string | 是   | 资源操作名称。 示例值： `ecs:Start` |
| description | string | 是   | 资源操作描述。 示例值： `ecs:Start` |
