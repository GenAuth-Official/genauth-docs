# Get the risk strategy list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the risk policy list by page

## Method Name

`ManagementClient.findRiskListPolicy`

## Request Parameters

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | -------------------------------------------- |
| optObject | string | yes                                          | -                                           | Policy operation object, currently only ip               |                                              |
| page      | number | no                                           | 1                                           | Current page number, starting from 1                     | `1`                                          |
| limit     | number | no                                           | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                         |

## Request Response

Type： `UserListPolicyPaginatedRespDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                         | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#RiskListPolicyPagingDto">RiskListPolicyPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "60b49eb83fd80adb96f26e68",
      "optObject": "IP",
      "ipRange": "ALL",
      "userRange": "ALL",
      "ipCond": "ONE",
      "userCond": "ONE",
      "timeRange": "1",
      "countThr": "3",
      "eventStateType": "password_wrong",
      "removeType": "MANUAL",
      "action": "ADD_IP_BLACK_LIST",
      "limitList": "FORBID_LOGIN",
      "createdAt": "2023-09-18T06:49:45.191Z"
    }
  }
}
```

## Data Structure

### <a id="RiskListPolicyPagingDto"></a> RiskListPolicyPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                          | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                             |                                              |
| list       | array  | yes                                          | Data List Nested Type：<a href="#RiskListPolicyRespDto">RiskListPolicyRespDto</a>。 |                                              |

### <a id="RiskListPolicyRespDto"></a> RiskListPolicyRespDto

| Name           | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                       | <div style="width:200px">Example Value</div> |
| -------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| id             | string | yes                                          | ID                                                                                               | `60b49eb83fd80adb96f26e68`                   |
| optObject      | string | yes                                          | Policy operation object, currently only ip                                                       | IP                                           |
| ipRange        | string | yes                                          | Operation IP range, ALL-all, NOT_IN_WHITE_LIST-not in the whitelist, and userRange to choose one | ALL                                          |
| userRange      | string | yes                                          | Operation USER range, ALL-all, NOT_IN_WHITE_LIST-not in the whitelist, and ipRange to choose one | ALL                                          |
| ipCond         | string | yes                                          | IP condition, NO_LIMIT-unlimited, ONE-single IP, and userCond to choose one                      | NO_LIMIT                                     |
| userCond       | string | yes                                          | IP condition, NO_LIMIT-unlimited, ONE-single user, and ipCond to choose one                      | NO_LIMIT                                     |
| timeRange      | number | yes                                          | Time range, how many minutes in the last                                                         | `1`                                          |
| countThr       | number | yes                                          | Threshold                                                                                        | `3`                                          |
| eventStateType | string | yes                                          | Event state type, password_wrong-wrong password, account_wrong-wrong account                     | password_wrong                               |
| removeType     | string | yes                                          | Removal type, MANUAL-manual, SCHEDULE-strategy, currently only manual                            | MANUAL                                       |
| action         | string | yes                                          | Strategy action, ADD_IP_BLACK_LIST-add IP blacklist, ADD_USER_BLACK_LIST-add user blacklist      | ADD_IP_BLACK_LIST                            |
| limitList      | string | yes                                          | Restriction type list, FORBID_LOGIN-prohibit login, FORBID_REGISTER-prohibit registration        | FORBID_LOGIN                                 |
| createdAt      | string | yes                                          | Creation time,                                                                                   | `2023-09-18T06:49:45.191Z`                   |
