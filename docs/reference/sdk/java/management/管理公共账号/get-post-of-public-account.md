# Get the positions of public accounts

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the positions of public accounts

## Method Name

`ManagementClient.getPostOfPublicUser`

## Request Parameters

| Name   | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------ | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| userId | string | yes                                          | -                                           | User id                                    | `xxxxx`                                      |

## Request Response

Type： `CreatePostDto`

| Name             | Type   | Description        |
| ---------------- | ------ | ------------------ |
| code             | string | Group code         |
| name             | string | Group Name         |
| description      | string | Group description  |
| departmentIdList | string | Department id list |

Example Results：

```json
{
  "code": "developer",
  "name": "Test",
  "description": "desc",
  "departmentIdList": "[\"xxx\"]"
}
```

## Data Structure
