# List of all roles under the paginated permission group

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get the list of all roles under the permission group by pagination according to the filter conditions.

## Method name

`ManagementClient.listNamespaceRoles`

## Request parameters

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| code     | string | Yes                                           | -                                           | Permission group unique identifier                       | `my-namespace`                              |
| page     | number | No                                            | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit    | number | No                                            | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |
| keywords | string | No                                            | -                                           | Role Code or name                                        | `test`                                      |

## Request response

Type: `NamespaceRolesListPaginatedRespDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#NamespaceRolesListRespDto">NamespaceRolesListRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49exxxxxxxxxx26e68",
    "name": "Role name",
    "code": "role1",
    "description": "This is a description of an example role",
    "namespace": "system",
    "updatedAt": "2022-07-03T02:20:30.000Z"
  }
}
```

## Data structure

### <a id="NamespaceRolesListRespDto"></a> NamespaceRolesListRespDto

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| id          | string | Yes                                           | Role ID                                    | `60b49exxxxxxxxxx26e68`                     |
| name        | string | Yes                                           | Role name                                  | `Role name`                                 |
| code        | string | Yes                                           | Role Code                                  | `role1`                                     |
| description | string | No                                            | Role description                           | `This is a sample role description`         |
| namespace   | string | Yes                                           | Permission group Code                      | `system`                                    |
| updatedAt   | string | Yes                                           | Update time                                | `2022-07-03T02:20:30.000Z`                  |
