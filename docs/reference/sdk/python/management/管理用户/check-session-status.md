# Check if a user has a session login in the application

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Check whether a user has a session login status in the application

## Method name

`ManagementClient.check_session_status`

## Request parameters

| Name   | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                    | <div style="width:200px">Sample value</div> |
| ------ | ------ | -------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| appId  | string | Yes                                    | -                                           | App ID                                                                                                                                                                                                                        | `app1`                                      |
| userId | string | Yes                                    | -                                           | The unique identifier of the user, which can be user ID, user name, email, mobile number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. The default is user id. | `6229ffaxxxxxxxxcade3e3d9`                  |

## Request Response

Type: `CheckSessionStatusRespDto`

| Name       | Type                                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                             | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#CheckSessionStatusDataDto">CheckSessionStatusDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "active": true
  }
}
```

## Data Structure

### <a id="CheckSessionStatusDataDto"></a> CheckSessionStatusDataDto

| Name   | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ------ | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| active | boolean | yes                                          | Is it logged in                            | `true`                                       |
