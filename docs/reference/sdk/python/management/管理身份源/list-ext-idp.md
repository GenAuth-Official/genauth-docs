# Get the list of identity sources

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Get the list of identity sources, you can specify the tenant ID filter.

## Method name

`ManagementClient.list_ext_idp`

## Request parameters

| Name     | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| tenantId | string | No                                     | -                                           | Tenant ID                                  | `60b49eb83fd80adb96f26e68`                  |
| appId    | string | No                                     | -                                           | Application ID                             | `60b49eb83fd80adb96f26e68`                  |

## Request Response

Type: `ExtIdpListPaginatedRespDto`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                       |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                                                 | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                       |
| data       | <a href="#ExtIdpListPagingDto">ExtIdpListPagingDto</a> | Data                                                                                                                                                                                                                                                                                                                                               |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "id": "60b49eb83fd80adb96f26e68",
      "name": "default",
      "logo": "https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg",
      "tenantId": "60b49eb83fd80adb96f26e68",
      "type": "wechat"
    }
  }
}
```

## Data Structure

### <a id="ExtIdpListPagingDto"></a> ExtIdpListPagingDto

| Name       | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                     | <div style="width:200px">Sample value</div> |
| ---------- | ------ | -------------------------------------- | -------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                    | Total number of records                                        |                                             |
| list       | array  | Yes                                    | Response data Nested type: <a href="#ExtIdpDto">ExtIdpDto</a>. |                                             |

### <a id="ExtIdpDto"></a> ExtIdpDto

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>                                            |
| -------- | ------ | --------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------- |
| id       | string | yes                                           | Identity source id                         | `60b49eb83fd80adb96f26e68`                                                             |
| name     | string | yes                                           | Identity source name                       | `default`                                                                              |
| logo     | string | yes                                           | Identity source logo                       | `https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg` |
| tenantId | string | no                                            | Tenant ID                                  | `60b49eb83fd80adb96f26e68`                                                             |
| type     | string | yes                                           | identity source type                       | `wechat`                                                                               |
