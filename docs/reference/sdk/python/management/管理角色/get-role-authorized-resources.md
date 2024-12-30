# Get the list of resources authorized by the role

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the list of resources authorized by the role through the role code in the permission group.

## Method name

`ManagementClient.get_role_authorized_resources`

## Request parameters

| Name         | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>            | <div style="width:200px">Sample value</div> |
| ------------ | ------ | -------------------------------------- | ------------------------------------------- | ----------------------------------------------------- | ------------------------------------------- |
| code         | string | yes                                    | -                                           | Unique identifier of the role in the permission group | `60b49eb83fd80adb96f26e68`                  |
| namespace    | string | no                                     | -                                           | Code of the permission group                          | `default`                                   |
| resourceType | string | no                                     | -                                           | Resource type, such as data, API, button, menu        | `DATA`                                      |

## Request Response

Type: `RoleAuthorizedResourcePaginatedRespDto`

| Name       | Type                                                                           | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                         | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                         | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                         | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#RoleAuthorizedResourcePagingDto">RoleAuthorizedResourcePagingDto</a> | Data                                                                                                                                                                                                                                                                                                                                         |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "resourceCode": "ecs",
      "resourceType": "DATA",
      "actions": "[\"ecs:Start\",\"ecs:Stop\"]",
      "apiIdentifier": "dd8d7stf44"
    }
  }
}
```

## Data Structure

### <a id="RoleAuthorizedResourcePagingDto"></a> RoleAuthorizedResourcePagingDto

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                      | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                    | Total number of records                                                                         |                                             |
| list       | array  | Yes                                    | Data Nested type: <a href="#RoleAuthorizedResourcesRespDto">RoleAuthorizedResourcesRespDto</a>. |                                             |

### <a id="RoleAuthorizedResourcesRespDto"></a> RoleAuthorizedResourcesRespDto

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------- | -------------------------------------------- | ------------------------------------------- |
| resourceCode  | string | Yes                                    | Resource descriptor                          | `ecs`                                       |
| resourceType  | string | Yes                                    | Resource type                                | DATA                                        |
| actions       | array  | Yes                                    | Authorized action list                       | `["ecs:Start","ecs:Stop"]`                  |
| apiIdentifier | string | Yes                                    | API Identifier corresponding to the resource | `dd8d7stf44`                                |
