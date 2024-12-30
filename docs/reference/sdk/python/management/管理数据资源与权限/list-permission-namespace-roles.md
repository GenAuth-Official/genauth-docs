# Paged query for all role lists under permission space

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Paged query for all role lists under permission space, paged to obtain all role lists under permission space.

## Method name

`ManagementClient.list_permission_namespace_roles`

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Example value</div> |
| ----- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | -------------------------------------------- |
| code  | string | Yes                                    | -                                           | Permission group unique identifier Code                  | `examplePermissionNamespace`                 |
| page  | number | No                                     | 1                                           | Current page number, starting from 1                     | `1`                                          |
| limit | number | No                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                         |
| query | string | No                                     | -                                           | Role Code or name                                        | `test`                                       |

## Request Response

Type: `PermissionNamespaceRolesListPaginatedRespDto`

| Name       | Type                                                                                       | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                                     | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                                                     | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                                                     | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                                     | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#PermissionNamespaceRolesListPagingDto">PermissionNamespaceRolesListPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "name": "Role name",
      "code": "role1",
      "description": "This is a description of an example role",
      "namespace": "system",
      "updatedAt": "2022-07-03T02:20:30.000Z"
    }
  }
}
```

## Data Structure

### <a id="PermissionNamespaceRolesListPagingDto"></a> PermissionNamespaceRolesListPagingDto

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                         | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| totalCount | number | Yes                                    | Total number of records                                                                                            |                                             |
| list       | array  | Yes                                    | Response data Nested type: <a href="#PermissionNamespaceRolesListRespDto">PermissionNamespaceRolesListRespDto</a>. |                                             |

### <a id="PermissionNamespaceRolesListRespDto"></a> PermissionNamespaceRolesListRespDto

| Name        | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| name        | string | Yes                                    | Role name                                  | `Role name`                                 |
| code        | string | Yes                                    | Role Code                                  | `role1`                                     |
| description | string | No                                     | Role description                           | `This is a sample role description`         |
| namespace   | string | Yes                                    | Permission space Code                      | `system`                                    |
| updatedAt   | string | Yes                                    | Update time                                | `2022-07-03T02:20:30.000Z`                  |
