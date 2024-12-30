# Get the position of a public account

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the post of a public account

## Method name

`ManagementClient.get_post_of_public_user`

## Request parameters

| Name   | Type   | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------ | ------ | --------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| userId | string | Yes                                           | -                                           | User id                                    | `xxxxx`                                     |

## Request response

Type: `CreatePostDto`

| Name             | Type   | Description        |
| ---------------- | ------ | ------------------ |
| code             | string | Group code         |
| name             | string | Group name         |
| description      | string | Group description  |
| departmentIdList | string | Department id list |

Sample result:

```json
{
  "code": "developer",
  "name": "R&D",
  "description": "description content",
  "departmentIdList": "[\"xxx\"]"
}
```

## Data structure
