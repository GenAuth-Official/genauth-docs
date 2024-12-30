# Delete the registration whitelist

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

By specifying multiple registered whitelist data, the registered whitelist is deleted in the form of an array

## Method name

`ManagementClient.delete_whitelist`

## Request parameters

| Name | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | -------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| type | string   | Yes                                          | -                                           | Whitelist type                             | `EMAIL`                                     |
| list | string[] | No                                           | -                                           | Type parameter                             | `["12580@163.com"]`                         |

## Request Response

Type: `IsSuccessDto`

| Name    | Type    | Description                          |
| ------- | ------- | ------------------------------------ |
| success | boolean | Whether the operation was successful |

Example results:

```json
{
  "success": true
}
```

## Data Structure
