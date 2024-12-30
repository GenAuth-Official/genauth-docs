# Modify permission group information

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Modify the permission group information, you can modify the name, description information and new unique identifier (NewCode).

## Method name

`ManagementClient.update_namespace`

## Request parameters

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| code        | string | Yes                                           | -                                           | Permission group unique identifier         | `my-namespace`                              |
| description | string | No                                            | -                                           | Permission group description               | `My permission group description`           |
| name        | string | No                                            | -                                           | Permission group name                      | `My permission group`                       |
| newCode     | string | No                                            | -                                           | Permission group new unique identifier     | `my-new-namespace`                          |

## Request Response

Type: `UpdateNamespaceRespDto`

| Name       | Type                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                               | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                               | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#UpdateNamespaceDto">UpdateNamespaceDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "my-namespace",
    "description": "My permission group description",
    "name": "My permission group",
    "newCode": "my-new-namespace"
  }
}
```

## Data Structure

### <a id="UpdateNamespaceDto"></a> UpdateNamespaceDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| code        | string | yes                                          | Permission group unique identifier         | `my-namespace`                               |
| description | string | no                                           | Permission group description               | `My Permission Group Description`            |
| name        | string | no                                           | Permission group name                      | `My Permission Group`                        |
| newCode     | string | no                                           | Permission group new unique identifier     | `my-new-namespace`                           |
