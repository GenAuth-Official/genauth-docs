# Get event application list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get event application list

## Method name

`ManagementClient.list_event_apps`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Request response

Type: `EventAppPaginatedRespDto`

| Name       | Type                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                             | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                             | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                             | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#EventAppPagingDto">EventAppPagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "identifier": "myapp",
      "name": "Custom application"
    }
  }
}
```

## Data structure

### <a id="EventAppPagingDto"></a> EventAppPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                     | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | yes                                          | total number of records                                        |                                             |
| list       | array  | yes                                          | data list Nested type: <a href="#EventAppDto">EventAppDto</a>. |                                             |

### <a id="EventAppDto"></a> EventAppDto

| name       | type   | <div style="width:80px">is it required</div> | <div style="width:300px">description</div> | <div style="width:200px">example value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| identifier | string | yes                                          | unique identifier                          | `myapp`                                      |
| name       | string | yes                                          | application name                           | `custom application`                         |
| logo       | string | yes                                          | application logo                           |                                              |
