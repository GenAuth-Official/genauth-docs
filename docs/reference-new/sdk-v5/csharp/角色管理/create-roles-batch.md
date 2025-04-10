# 批量创建角色

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

批量创建角色，可以选择权限分组、角色描述等。

## 请求参数

| 名称 | 类型                                       | 必填 | 默认值 | 描述       | 示例值                                                                                |
| ---- | ------------------------------------------ | ---- | ------ | ---------- | ------------------------------------------------------------------------------------- |
| list | <a href="#RoleListItem">RoleListItem[]</a> | 是   | -      | 角色列表。 | `[{"code":"my-role-code","namespace":"default","description":"this is description"}]` |

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

          IsSuccessRespDto  result = await managementClient.CreateRolesBatch
          (  new CreateRolesBatch{                List= new List<RoleListItem>
                {
                    new RoleListItem
                    {
                     Code= "my-role-code" ,
            Description= "this is a description about the role" ,
            Namespace= "default" ,
                }
                  },
            }
          );
        }
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

### <a id="RoleListItem"></a> RoleListItem

| 名称        | 类型   | 必填 | 描述                                                       |
| ----------- | ------ | ---- | ---------------------------------------------------------- |
| code        | string | 是   | 权限分组内角色的唯一标识符。 示例值： `my-role-code`       |
| description | string | 否   | 角色描述。 示例值： `this is a description about the role` |
| namespace   | string | 否   | 所属权限分组的 code。 示例值： `default`                   |

### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称    | 类型    | 必填 | 描述                           |
| ------- | ------- | ---- | ------------------------------ |
| success | boolean | 是   | 操作是否成功。 示例值： `true` |
