# Get event list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get a list of all events supported by the GenAuth service

## Method name

`ManagementClient.list_events`

## Request parameters

| Name  | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| ----- | ------ | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| page  | number | No                                     | 1                                           | Current page number, starting from 1                     | `1`                                         |
| limit | number | No                                     | 10                                          | Number per page, maximum cannot exceed 50, default is 10 | `10`                                        |
| app   | string | No                                     | -                                           | Application type                                         | `authing`                                   |

## Request response

Type: `OpenEventPaginatedRespDto`

| Name       | Type                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                               | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                               | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#OpenEventPagingDto">OpenEventPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "12203530144321536",
      "code": "authing.user.login",
      "topic": "authing.user.login",
      "name": "User login event",
      "desc": "User login event"
    }
  }
}
```

## Data structure

### <a id="OpenEventPagingDto"></a> OpenEventPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                       | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                          | Total number of records                                          |                                             |
| list       | array  | Yes                                          | Data list Nested type: <a href="#OpenEventDto">OpenEventDto</a>. |                                             |

### <a id="OpenEventDto"></a> OpenEventDto

| Name  | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----- | ------ | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| id    | string | Yes                                          | Event ID                                   | `12203530144321536`                         |
| code  | string | Yes                                          | Event code                                 | `authing.user.login`                        |
| topic | string | Yes                                          | Event Topic                                | `authing.user.login`                        |
| name  | string | Yes                                          | Event name                                 | `User login event`                          |
| desc  | string | Yes                                          | Event description                          | `User login event`                          |
