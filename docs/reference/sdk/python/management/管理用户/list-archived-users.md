# Get the archived user list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the archived user list, support paging, can filter start time, etc.

## Method name

`ManagementClient.list_archived_users`

## Request parameters

| Name    | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                             | <div style="width:200px">Sample value</div> |
| ------- | ------ | -------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------- |
| page    | number | No                                     | 1                                           | Current page number, starting from 1                                   | `1`                                         |
| limit   | number | No                                     | 10                                          | Number of pages per page, maximum cannot exceed 50, default is 10      | `10`                                        |
| startAt | number | No                                     | -                                           | Start time, UNIX timestamp accurate to seconds, unspecified by default | `1655714763890`                             |

## Request Response

Type: `ListArchivedUsersSingleRespDto`

| Name       | Type                                                                 | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                               | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                               | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                               | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#ArchivedUsersListPagingDto">ArchivedUsersListPagingDto</a> | Data                                                                                                                                                                                                                                                                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "userId": "userId",
      "archivedAt": "2022-07-03T03:20:30.000Z"
    }
  }
}
```

## Data Structure

### <a id="ArchivedUsersListPagingDto"></a> ArchivedUsersListPagingDto

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                   | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                    | Total number of records                                                                      |                                             |
| list       | array  | Yes                                    | Response data Nested type: <a href="#ListArchivedUsersRespDto">ListArchivedUsersRespDto</a>. |                                             |

### <a id="ListArchivedUsersRespDto"></a> ListArchivedUsersRespDto

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| userId     | string | yes                                    | User ID                                    | `userId`                                    |
| archivedAt | string | yes                                    | Archived at                                | `2022-07-03T03:20:30.000Z`                  |
