# Modify the application multi-factor authentication configuration

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Pass in a list of MFA authentication factors to enable or disable

## Method name

`ManagementClient.update_application_mfa_settings`

## Request parameters

| Name            | Type     | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------------- | -------- | --------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| appId           | string   | Yes                                           | -                                           | App ID                                     | `62a50xxxxxxxxxxxd15d57c7`                  |
| enabledFactors  | string[] | No                                            |                                             | List of enabled MFA authentication factors | `["SMS"]`                                   |
| disabledFactors | string[] | No                                            |                                             | Disabled MFA Authentication Factor List    | `["EMAIL"]`                                 |

## Request Response

Type: `MFASettingsRespDto`

| Name       | Type                                         | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                       |
| message    | string                                       | Description                                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                                       | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                       |
| data       | <a href="#MFASettingsDto">MFASettingsDto</a> | Response data                                                                                                                                                                                                                                                                                                                                      |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "enabledFactors": "[\"SMS\"]"
  }
}
```

## Data Structure

### <a id="MFASettingsDto"></a> MFASettingsDto

| Name           | Type  | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------------- | ----- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| enabledFactors | array | Yes                                           | List of enabled MFA authentication factors | `["SMS"]`                                   |
