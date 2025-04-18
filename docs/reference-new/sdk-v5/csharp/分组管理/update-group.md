# 修改分组

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

通过分组 code，修改分组，可以修改此分组的 code。

## 请求参数

| 名称        | 类型   | 必填 | 默认值 | 描述            | 示例值      |
| ----------- | ------ | ---- | ------ | --------------- | ----------- |
| description | string | 是   | -      | 分组描述。      | `描述内容`  |
| name        | string | 是   | -      | 分组名称。      | `开发者`    |
| code        | string | 是   | -      | 分组 code。     | `developer` |
| newCode     | string | 否   | -      | 分组新的 code。 | `developer` |

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

          GroupSingleRespDto  result = await managementClient.UpdateGroup
          (  new UpdateGroupReqDto{                  Code= "developer" ,
                  Name= "开发者" ,
                  Description= "描述内容" ,
                  NewCode= "developer" ,
            }
          );
        }
    }
}

```

## 请求响应

类型： `GroupSingleRespDto`

| 名称       | 类型                             | 描述                                                         |
| ---------- | -------------------------------- | ------------------------------------------------------------ |
| statusCode | number                           | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | string                           | 描述信息                                                     |
| apiCode    | number                           | 细分错误码，可通过此错误码得到具体的错误类型。               |
| data       | <a href="#GroupDto">GroupDto</a> | 响应数据                                                     |

示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "code": "developer",
    "name": "开发者",
    "description": "描述内容"
  }
}
```

## 数据结构

### <a id="GroupDto"></a> GroupDto

| 名称        | 类型   | 必填 | 描述                             |
| ----------- | ------ | ---- | -------------------------------- |
| code        | string | 是   | 分组 code。 示例值： `developer` |
| name        | string | 是   | 分组名称。 示例值： `开发者`     |
| description | string | 是   | 分组描述。 示例值： `描述内容`   |
