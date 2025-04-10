# Create a post

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Create a post

## Method name

`ManagementClient.createPost`

## Request parameters

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| name             | string | Yes                                           | -                                           | Group name                                 | `R&D`                                       |
| code             | string | Yes                                           | -                                           | Group code                                 | `developer`                                 |
| description      | string | No                                            | -                                           | Group description                          | `Description content`                       |
| departmentIdList | string | No                                            | -                                           | Department id list                         | `["xxx"]`                                   |

## Request response

Type: `CreatePostRespDto`

| Name       | Type                                   | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                 | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                 | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#PostInfoDto">PostInfoDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "code": "developer",
    "name": "R&D",
    "description": "Description content"
  }
}
```

## Data structure

### <a id="PostInfoDto"></a> PostInfoDto

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>         | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | -------------------------------------------- | -------------------------------------------------- | ------------------------------------------- |
| code             | string | yes                                          | group code                                         | `developer`                                 |
| name             | string | yes                                          | group name                                         | `R&D`                                       |
| description      | string | no                                           | group description                                  | `description`                               |
| departmentIdList | array  | yes                                          | number of departments associated with the position |                                             |
