# Get user list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get user list by page

## Method Name

`ManagementClient.findUserList`

## Request Parameters

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Example Value</div> |
| ------------ | ------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | -------------------------------------------- |
| userListType | string | yes                                          | -                                           | IP type                                                  | `BLACK`                                      |
| page         | number | no                                           | 1                                           | Current page number, starting from 1                     | `1`                                          |
| limit        | number | no                                           | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                         |

## Request Response

Type： `UserListPaginatedRespDto`

| Name       | Type                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                             | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                             | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                             | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#UserListPagingDto">UserListPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "60b49eb83fd80adb96f26e68",
      "userId": "60b49eb83fd80adb96f26e68",
      "addType": "MANUAL",
      "userListType": "WHITE",
      "removeType": "MANUAL",
      "limitList": "[FORBID_LOGIN]",
      "addAt": "2023-09-12T05:54:58.758Z"
    }
  }
}
```

## Data Structure

### <a id="UserListPagingDto"></a> UserListPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                              | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                 |                                              |
| list       | array  | yes                                          | Data List Nested Type：<a href="#RiskListItemDto">RiskListItemDto</a>。 |                                              |

### <a id="RiskListItemDto"></a> RiskListItemDto

| Name         | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                              | <div style="width:200px">Example Value</div> |
| ------------ | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| id           | string | yes                                          | ID                                                                                                      | `60b49eb83fd80adb96f26e68`                   |
| userId       | string | yes                                          | userId                                                                                                  | `60b49eb83fd80adb96f26e68`                   |
| addType      | string | yes                                          | Add type, MANUAL-manual, SCHEDULE-policy addition                                                       | `MANUAL`                                     |
| userListType | string | yes                                          | ip type, WHITE-whitelist, BLACK-blacklist                                                               | `WHITE`                                      |
| removeType   | string | yes                                          | Delete type, MANUAL-manual, SCHEDULE-policy deletion                                                    | `MANUAL`                                     |
| limitList    | array  | yes                                          | Restriction type, FORBID_LOGIN-prohibit login, FORBID_REGISTER-prohibit registration, SKIP_MFA-skip MFA | `[FORBID_LOGIN]`                             |
| addAt        | string | yes                                          | Add time                                                                                                | `2023-09-12T05:54:58.758Z`                   |
