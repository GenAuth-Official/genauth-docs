# Modify the application multi-factor authentication configuration

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Pass in the MFA authentication factor list to turn it on or off

## Method Name

`ManagementClient.updateApplicationMfaSettings`

## Request Parameters

| Name            | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>  | <div style="width:200px">Example Value</div> |
| --------------- | -------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------- | -------------------------------------------- |
| appId           | string   | Yes                                          | -                                           | App ID                                      | `62a50xxxxxxxxxxxd15d57c7`                   |
| enabledFactors  | string[] | No                                           |                                             | List of enabled MFA authentication factors  | `["SMS"]`                                    |
| disabledFactors | string[] | No                                           |                                             | List of disabled MFA authentication factors | `["EMAIL"]`                                  |

## Request Response

Type： `MFASettingsRespDto`

| Name       | Type                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                       | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                       | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#MFASettingsDto">MFASettingsDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "enabledFactors": "[\"SMS\"]"
  }
}
```

## Data Structure

### <a id="MFASettingsDto"></a> MFASettingsDto

| Name           | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------------- | ----- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| enabledFactors | array | Yes                                          | List of enabled MFA authentication factors | `["SMS"]`                                    |
