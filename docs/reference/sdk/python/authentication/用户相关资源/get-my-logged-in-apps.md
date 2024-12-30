# Get the login application

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the logged-in application

## Method name

`AuthenticationClient.get_logged_in_apps`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |

## Request response

Type: `GetLoggedInAppsRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | array  | response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appId": "xxx",
    "appName": "Sample application",
    "appLoginUrl": "https://example.genauth.ai/login",
    "appLogo": "https://files.authing.co/authing-console/default-app-logo.png",
    "active": true
  }
}
```

## Data structure

### <a id="LoggedInAppsDto"></a> LoggedInAppsDto

| Name        | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div>                    |
| ----------- | ------- | -------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| appId       | string  | yes                                          | Application ID                             | `xxx`                                                           |
| appName     | string  | yes                                          | Application name                           | `Sample application`                                            |
| appLoginUrl | string  | yes                                          | Application login address                  | `https://example.genauth.ai/login`                              |
| appLogo     | string  | yes                                          | Application Logo                           | `https://files.authing.co/authing-console/default-app-logo.png` |
| active      | boolean | yes                                          | Whether currently logged in                | `true`                                                          |
