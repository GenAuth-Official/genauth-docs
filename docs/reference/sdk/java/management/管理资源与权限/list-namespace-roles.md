# List of all roles under the paginated permission group

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

According to the filtering conditions, get the list of all roles under the permission group by pagination.

## Method Name

`ManagementClient.listNamespaceRoles`

## Request Parameters

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| code     | string | Yes                                          | -                                           | Permission group unique identifier                                                 | `my-namespace`                               |
| page     | number | No                                           | 1                                           | Current page number, starting from 1                                               | `1`                                          |
| limit    | number | No                                           | 10                                          | The maximum number of pages per page cannot exceed 50, and the default value is 10 | `10`                                         |
| keywords | string | No                                           | -                                           | Role Code or Name                                                                  | `test`                                       |

## Request Response

Type： `NamespaceRolesListPaginatedRespDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                             | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#NamespaceRolesListRespDto">NamespaceRolesListRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49exxxxxxxxxx26e68",
    "name": "RoleName",
    "code": "role1",
    "description": "This is a sample role description",
    "namespace": "system",
    "updatedAt": "2022-07-03T02:20:30.000Z"
  }
}
```

## Data Structure

### <a id="NamespaceRolesListRespDto"></a> NamespaceRolesListRespDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| id          | string | Yes                                          | Role ID                                    | `60b49exxxxxxxxxx26e68`                      |
| name        | string | Yes                                          | Role Name                                  | `RoleName`                                   |
| code        | string | Yes                                          | Role Code                                  | `role1`                                      |
| description | string | No                                           | Role Description                           | `This is a sample role description`          |
| namespace   | string | Yes                                          | Permission Group Code                      | `system`                                     |
| updatedAt   | string | Yes                                          | Updated At                                 | `2022-07-03T02:20:30.000Z`                   |
