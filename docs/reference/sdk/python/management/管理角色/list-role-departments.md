# Get the department list of the role

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get the department list of the role through the role code in the permission group, supporting paging.

## Method name

`ManagementClient.list_role_departments`

## Request parameters

| Name      | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                        | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------- |
| code      | string | yes                                    | -                                           | Unique identifier of the role in the permission group             | `manager`                                   |
| namespace | string | no                                     | -                                           | Code of the permission group                                      | `default`                                   |
| page      | number | no                                     | 1                                           | Current page number, starting from 1                              | `1`                                         |
| limit     | number | no                                     | 10                                          | Number of pages per page, maximum cannot exceed 50, default is 10 | `10`                                        |

## Request Response

Type: `RoleDepartmentListPaginatedRespDto`

| Name       | Type                                                                   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                 | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#RoleDepartmentListPagingDto">RoleDepartmentListPagingDto</a> | Data                                                                                                                                                                                                                                                                                                                                         |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "60b49eb83fd80adb96f26e68",
      "code": "code",
      "name": "departmentName",
      "description": "dd8d7stf44"
    }
  }
}
```

## Data Structure

### <a id="RoleDepartmentListPagingDto"></a> RoleDepartmentListPagingDto

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                    | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                    | Total number of records                                                       |                                             |
| list       | array  | Yes                                    | Data Nested type: <a href="#RoleDepartmentRespDto">RoleDepartmentRespDto</a>. |                                             |

### <a id="RoleDepartmentRespDto"></a> RoleDepartmentRespDto

| Name        | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| id          | string | Yes                                    | Department ID                              | `60b49eb83fd80adb96f26e68`                  |
| code        | string | Yes                                    | Department code                            | `code`                                      |
| name        | string | Yes                                    | Department name                            | `departmentName`                            |
| description | string | Yes                                    | Department description                     | `dd8d7stf44`                                |
