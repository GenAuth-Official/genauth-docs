# 删除部门

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

通过组织 code、部门 ID，删除部门。

## 请求参数

| 名称             | 类型   | 必填 | 默认值        | 描述                                                                          | 示例值                     |
| ---------------- | ------ | ---- | ------------- | ----------------------------------------------------------------------------- | -------------------------- |
| departmentId     | string | 是   | -             | 部门系统 ID（为 GenAuth 系统自动生成，不可修改）。                            | `60b49eb83fd80adb96f26e68` |
| organizationCode | string | 是   | -             | 组织 Code（organizationCode）。                                               | `steamory`                 |
| departmentIdType | string | 否   | department_id | 此次调用中使用的部门 ID 的类型。 枚举值：`department_id`,`open_department_id` | `department_id`            |

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

          IsSuccessRespDto  result = await managementClient.DeleteDepartment
          (  new DeleteDepartmentReqDto{                  OrganizationCode= "steamory" ,
                  DepartmentId= "60b49eb83fd80adb96f26e68" ,
                  DepartmentIdType= DeleteDepartmentReqDto.departmentIdType.DEPARTMENT_ID ,
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

### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称    | 类型    | 必填 | 描述                           |
| ------- | ------- | ---- | ------------------------------ |
| success | boolean | 是   | 操作是否成功。 示例值： `true` |
