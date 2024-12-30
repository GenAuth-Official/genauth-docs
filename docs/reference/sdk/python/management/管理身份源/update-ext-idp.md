# Update identity source configuration

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Update the identity source configuration, you can set the identity source ID and name.

## Method Name

`ManagementClient.update_ext_idp`

## Request Parameters

| Name     | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| id       | string | yes                                    | -                                           | Identity Source ID                         | `60b49eb83fd80adb96f26e68`                   |
| name     | string | yes                                    | -                                           | Name                                       | `exampleName`                                |
| tenantId | string | no                                     | -                                           | Tenant ID                                  | `60b49eb83fd80adb96f26e68`                   |

## Request Response

Type: `ExtIdpSingleRespDto`

| Name       | Type                               | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                             | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                       |
| message    | string                             | Description                                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                             | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                       |
| data       | <a href="#ExtIdpDto">ExtIdpDto</a> | Response data                                                                                                                                                                                                                                                                                                                                      |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49eb83fd80adb96f26e68",
    "name": "default",
    "logo": "https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg",
    "tenantId": "60b49eb83fd80adb96f26e68",
    "type": "wechat"
  }
}
```

## Data Structure

### <a id="ExtIdpDto"></a> ExtIdpDto

| name     | type   | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>                                            |
| -------- | ------ | ----------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------- |
| id       | string | yes                                                   | Identity source id                         | `60b49eb83fd80adb96f26e68`                                                             |
| name     | string | yes                                                   | Identity source name                       | `default`                                                                              |
| logo     | string | yes                                                   | Identity source logo                       | `https://files.authing.co/authing-console/social-connections/wechatIdentitySource.svg` |
| tenantId | string | no                                                    | Tenant ID                                  | `60b49eb83fd80adb96f26e68`                                                             |
| type     | string | yes                                                   | Identity source type                       | `wechat`                                                                               |
