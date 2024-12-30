# Get the role authorization list

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the role authorization list.

## Method Name

`ManagementClient.listRoleAssignments`

## Request Parameters

| Name          | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                | <div style="width:200px">Example Value</div> |
| ------------- | -------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------- |
| roleCode      | string   | yes                                          | -                                           | Role code, only letters, numbers and -\_ can be used, up to 50 characters | `code_1`                                     |
| page          | number   | no                                           | 1                                           | Current page number, starting from 1                                      | `1`                                          |
| limit         | number   | no                                           | 10                                          | Number per page, maximum cannot exceed 50, default is 10                  | `10`                                         |
| query         | string   | no                                           | -                                           | Query by role code or role name                                           | `Sample Application`                         |
| namespaceCode | string   | No                                           | -                                           | permission space code                                                     |                                              |
| targetType    | string[] | No                                           | -                                           | target type, accepts user, department                                     | `["USER","ORG"]`                             |

## Request Response

Type： `RoleListPageRespDto`

| Name       | Type                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                         | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                         | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#RoleListPageDto">RoleListPageDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "totalCount": 20,
    "data": {
      "roleId": "60b49eb83fd80adb96f26e68",
      "status": "ENABLE",
      "enableTime": "1670915666812",
      "endTime": "1670915666812",
      "userPoolId": "6076bacxxxxxxxxd80d993b5",
      "roleName": "testUser",
      "roleCode": "code_1",
      "description": "desc",
      "createdAt": "2022-03-17T05:23:01.567Z",
      "updatedAt": "2022-03-17T05:23:01.567Z"
    }
  }
}
```

## Data Structure

### <a id="RoleListPageDto"></a> RoleListPageDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                              | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | no                                           | Total number of records                                                                 | `20`                                         |
| data       | array  | yes                                          | Response data nested type：<a href="#RolePermissionListDto">RolePermissionListDto</a>。 |                                              |

### <a id="RolePermissionListDto"></a> RolePermissionListDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                  | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------- |
| roleId      | string | yes                                          | Role ID                                                                     | `60b49eb83fd80adb96f26e68`                   |
| status      | string | yes                                          | Subject status, DISABLE - not joined the role, ENABLE - has joined the role | `ENABLE`                                     |
| enableTime  | number | no                                           | Subject joining time in milliseconds                                        | `1670915666812`                              |
| endTime     | number | no                                           | Subject expiration time in milliseconds, null means no expiration           | `1670915666812`                              |
| userPoolId  | string | yes                                          | User pool ID                                                                | `6076bacxxxxxxxxd80d993b5`                   |
| roleName    | string | yes                                          | Role Name, up to 50 characters                                              | `Test User`                                  |
| roleCode    | string | yes                                          | Role code, only letters, numbers and -\_ can be used, up to 50 characters   | `code_1`                                     |
| description | string | no                                           | Role description, up to 200 characters                                      | `This is the description of a role`          |
| createdAt   | string | yes                                          | Creation time                                                               | `2022-03-17T05:23:01.567Z`                   |
| updatedAt   | string | yes                                          | Update time                                                                 | `2022-03-17T05:23:01.567Z`                   |
