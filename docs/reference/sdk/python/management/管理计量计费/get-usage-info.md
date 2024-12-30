# Get usage details

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the current user pool usage details.

## Method name

`ManagementClient.get_usage_info`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Request Response

Type: `CostGetCurrentUsageRespDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                 | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#CurrentUsageRespDto">CurrentUsageRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "usages": {
      "amount": "0",
      "current": "0",
      "experience": true,
      "modelCode": "SocialConnections",
      "modelName": "SocialConnections：Social account link"
    }
  }
}
```

## Data Structure

### <a id="CurrentUsageRespDto"></a> CurrentUsageRespDto

| Name   | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                        | <div style="width:200px">Sample value</div> |
| ------ | ----- | -------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------- |
| usages | array | Yes                                          | Current usage entity Nested type: <a href="#CurrentUsageDto">CurrentUsageDto</a>. |                                             |

### <a id="CurrentUsageDto"></a> CurrentUsageDto

| Name       | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------- | ------- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| amount     | string  | Yes                                           | Total equity                               | `0`                                         |
| current    | string  | Yes                                           | Current equity usage                       | `0`                                         |
| experience | boolean | Yes                                           | Is it a trial equity?                      | `true`                                      |
| modelCode  | string  | Yes                                           | Equity code                                | `SocialConnections`                         |
| modelName  | string  | Yes                                           | Equity name                                | `SocialConnections: social account links`   |
