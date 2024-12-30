# Get user-related positions

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

This interface will only return one post, it is deprecated, please use /api/v3/get-user-posts interface

## Method Name

`ManagementClient.getUserPost`

## Request Parameters

| Name           | Type    | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------------- | ------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| userId         | string  | yes                                          | -                                           | user id                                    | `xxxxx`                                      |
| withCustomData | boolean | no                                           | -                                           | whether to get custom data                 |                                              |

## Request Response

Type: `CreatePostDto`

| Name             | Type   | Description        |
| ---------------- | ------ | ------------------ |
| code             | string | group code         |
| name             | string | Group Name         |
| description      | string | Group Description  |
| departmentIdList | string | Department ID List |

Example Results:

```json
{
  "code": "developer",
  "name": "R&D",
  "description": "Description",
  "departmentIdList": "[\"xxx\"]"
}
```

## Data Structure
