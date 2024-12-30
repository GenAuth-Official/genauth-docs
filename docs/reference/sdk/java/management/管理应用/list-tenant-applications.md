# Get tenant application list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get the application list, you can specify the tenant ID to filter.

## Method Name

`ManagementClient.listTenantApplications`

## Request Parameters

| Name        | Type    | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| sso_enabled | boolean | Yes                                          | -                                           | Application Yes No Join single sign-on     |                                              |
| keywords    | string  | Yes                                          | -                                           | Search keywords                            |                                              |
| limit       | string  | Yes                                          | -                                           | Number of applications to get per page     | `1`                                          |
| page        | string  | Yes                                          | -                                           | Page number to get the application list    | `1`                                          |

## Request Response

Type： `TenantApplicationListPaginatedRespDto`

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                       | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#TenantApplicationListPagingDto">TenantApplicationListPagingDto</a> | data                                                                                                                                                                                                                                                                                                                                              |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "userPoolId": "62b40xxxxxxxxxxxd16f57c7",
      "tenantAppId": "62b40xxxxxxxxxxxd16f57c7",
      "name": "App Name",
      "logo": "https://example.com/logo.png",
      "ssoEnabled": true,
      "appId": "62b40xxxxxxxxxxxd16f57c7"
    }
  }
}
```

## Data Structure

### <a id="TenantApplicationListPagingDto"></a> TenantApplicationListPagingDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                            | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------- |
| totalCount | number | yes                                          | Total number of records                                                               |                                              |
| list       | array  | yes                                          | Response data nested type：<a href="#TenantApplicationDto">TenantApplicationDto</a>。 |                                              |

### <a id="TenantApplicationDto"></a> TenantApplicationDto

| Name            | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| userPoolId      | string  | Yes                                          | UserPool ID                                | `62b40xxxxxxxxxxxd16f57c7`                   |
| tenantAppId     | string  | Yes                                          | App ID                                     | `62b40xxxxxxxxxxxd16f57c7`                   |
| name            | string  | Yes                                          | App Name                                   | `App Name`                                   |
| description     | string  | No                                           | Application description                    |                                              |
| logo            | string  | Yes                                          | App Logo                                   | `https://example.com/logo.png`               |
| applicationType | string  | Yes                                          | Application type                           |                                              |
| ssoEnabled      | boolean | Yes                                          | Yes No Enable SSO single sign-on           | `true`                                       |
| appId           | string  | Yes                                          | App ID                                     | `62b40xxxxxxxxxxxd16f57c7`                   |
