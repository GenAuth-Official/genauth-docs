# Get the client application associated with the push login request

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

This endpoint is used to check whether the application logged in by the current user supports authorization for push login requests when the GenAuth token APP receives a push login notification.

## Method Name

`AuthenticationClient.getPushLoginRelationApps`

## Request Parameters

| Name       | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>          | <div style="width:200px"></div>Sample value</div> |
| ---------- | ------ | -------------------------------------- | ------------- | --------------------------------------------------- | ------------------------------------------------- |
| appId      | string | Yes                                    | -             | ID of the application that initiated the push login |                                                   |
| pushCodeId | string | Yes                                    | -             | Push code (unique ID for push login)                |                                                   |

## Request Response

Type: `GetPushCodeRelationAppsRespDto`

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                                       | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                                       | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#GetPushCodeRelationAppsDataDto">GetPushCodeRelationAppsDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appIds": "[\"xxxxxxxxxx\"]"
  }
}
```

## Data Structure

### <a id="GetPushCodeRelationAppsDataDto"></a> GetPushCodeRelationAppsDataDto

| Name   | Type  | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                                            | <div style="width:200px">Sample value</div> |
| ------ | ----- | ----------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------- |
| appIds | array | No                                                    | Client application data associated with the application that initiated the push login | `["xxxxxxxxxx"]`                            |
