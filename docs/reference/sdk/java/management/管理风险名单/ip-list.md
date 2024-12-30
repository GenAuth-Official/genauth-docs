# Get ip list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get IP list by page

## Method Name

`ManagementClient.findIpList`

## Request Parameters

| Name   | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Example Value</div> |
| ------ | ------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | -------------------------------------------- |
| ipType | string | yes                                          | -                                           | IP type                                                  | `IP`                                         |
| page   | number | no                                           | 1                                           | Current page number, starting from 1                     | `1`                                          |
| limit  | number | no                                           | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                         |

## Request Response

Type： `IpListPaginatedRespDto`

| Name       | Type                                           | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                         | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                         | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                         | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#IpListPagingDto">IpListPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "60b49eb83fd80adb96f26e68",
      "ip": "10.123.32.25",
      "ipType": "WHITE",
      "addType": "MANUAL",
      "removeType": "MANUAL",
      "limitList": "[FORBID_LOGIN]"
    }
  }
}
```

## Data Structure

### <a id="IpListPagingDto"></a> IpListPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                          | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                             |                                              |
| list       | array  | yes                                          | Data List Nested Type：<a href="#IpListRespDto">IpListRespDto</a>。 |                                              |

### <a id="IpListRespDto"></a> IpListRespDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                              | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| id         | string | yes                                          | ID                                                                                                      | `60b49eb83fd80adb96f26e68`                   |
| ip         | string | yes                                          | ip                                                                                                      | `10.123.32.25`                               |
| ipType     | string | yes                                          | ip type, WHITE-whitelist, BLACK-blacklist                                                               | `WHITE`                                      |
| addType    | string | yes                                          | add type, MANUAL-manual, SCHEDULE-policy add                                                            | `MANUAL`                                     |
| removeType | string | yes                                          | remove type, MANUAL-manual, SCHEDULE-policy delete                                                      | `MANUAL`                                     |
| limitList  | array  | yes                                          | restriction type, FORBID_LOGIN-prohibit login, FORBID_REGISTER-prohibit registration, SKIP_MFA-skip MFA | `[FORBID_LOGIN]`                             |
