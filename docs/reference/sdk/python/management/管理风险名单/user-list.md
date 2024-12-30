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

## Method name

`ManagementClient.find_user_list`

## Request parameters

| Name         | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| ------------ | ------ | --------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| userListType | string | yes                                           | -                                           | IP type                                                  | `BLACK`                                     |
| page         | number | no                                            | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit        | number | no                                            | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |

## Request Response

Type: `UserListPaginatedRespDto`

| Name       | Type                                               | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                             | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                             | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#UserListPagingDto">UserListPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
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

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                             | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                    | Total number of records                                                |                                             |
| list       | array  | Yes                                    | Data list Nested type: <a href="#RiskListItemDto">RiskListItemDto</a>. |                                             |

### <a id="RiskListItemDto"></a> RiskListItemDto

| Name         | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                              | <div style="width:200px">Sample value</div> |
| ------------ | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| id           | string | Yes                                           | ID                                                                                                      | `60b49eb83fd80adb96f26e68`                  |
| userId       | string | Yes                                           | userId                                                                                                  | `60b49eb83fd80adb96f26e68`                  |
| addType      | string | Yes                                           | Add type, MANUAL-manual, SCHEDULE-policy addition                                                       | `MANUAL`                                    |
| userListType | string | Yes                                           | ip type, WHITE-whitelist, BLACK-blacklist                                                               | `WHITE`                                     |
| removeType   | string | yes                                           | removal type, MANUAL-manual, SCHEDULE-policy removal                                                    | `MANUAL`                                    |
| limitList    | array  | yes                                           | restriction type, FORBID_LOGIN-prohibit login, FORBID_REGISTER-prohibit registration, SKIP_MFA-skip MFA | `[FORBID_LOGIN]`                            |
| addAt        | string | yes                                           | add time                                                                                                | `2023-09-12T05:54:58.758Z`                  |
