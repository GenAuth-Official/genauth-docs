# Get the role list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get the role list, support paging, support filtering by permission group (permission space)

## Method name

`ManagementClient.listRoles`

## Request parameters

| Name      | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                    | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| page      | number | No                                     | 1                                           | Current page number, starting from 1                                                                          | `1`                                         |
| limit     | number | No                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10                                                      | `10`                                        |
| keywords  | string | No                                     | -                                           | Used for fuzzy search based on role code or name, optional.                                                   | `admin`                                     |
| namespace | string | No                                     | default                                     | The code of the permission group (permission space). If not passed, the default permission group is obtained. | `default`                                   |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.listRoles({
    keywords: "admin",
    namespace: "default",
    page: 1,
    limit: 10,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `RolePaginatedRespDto`

| Name       | Type                                       | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                     | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#RolePagingDto">RolePagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "60b49eb83fd80adb96f26e68",
      "code": "role1",
      "name": "role1",
      "description": "this is role description",
      "namespace": "default",
      "namespaceName": "Sample permission name",
      "status": "ENABLE",
      "disableTime": "1669881887852"
    }
  }
}
```

## Data structure

### <a id="RolePagingDto"></a> RolePagingDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                 | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                           | Total number of records                                    |                                             |
| list       | array  | Yes                                           | Response data Nested type: <a href="#RoleDto">RoleDto</a>. |                                             |

### <a id="RoleDto"></a> RoleDto

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                             | <div style="width:200px">Sample value</div> |
| ------------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| id            | string | Yes                                           | Role ID                                                                                                                                | `60b49eb83fd80adb96f26e68`                  |
| code          | string | Yes                                           | Unique identifier of the role in the permission group (permission space) Code                                                          | `role1`                                     |
| name          | string | Yes                                           | Role name in the permission group (permission space)                                                                                   | `role1`                                     |
| description   | string | Yes                                           | Role description                                                                                                                       | `this is role description`                  |
| namespace     | string | Yes                                           | The name of the permission group (permission space) to which it belongs Code, if not passed, the default permission group is obtained. | `default`                                   |
| namespaceName | string | yes                                           | The name of the permission group (permission space)                                                                                    | `Sample permission name`                    |
| status        | string | no                                            | Role status, ENABLE- means normal, DISABLE- means disabled                                                                             | `ENABLE`                                    |
| disableTime   | number | no                                            | Role automatic disable time, in milliseconds, if null is passed, it means permanent                                                    | `1669881887852`                             |
