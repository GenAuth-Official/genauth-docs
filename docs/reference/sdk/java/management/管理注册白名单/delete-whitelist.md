# Delete the registration whitelist

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Delete the registration whitelist by specifying multiple registration whitelist data in the form of an array

## Method Name

`ManagementClient.deleteWhitelist`

## Request Parameters

| Name | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | -------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| type | string   | Yes                                          | -                                           | Whitelist type                             | `EMAIL`                                      |
| list | string[] | No                                           | -                                           | Type parameter                             | `["12580@163.com"]`                          |

## Request Response

Type： `IsSuccessDto`

| Name    | Type    | Description                         |
| ------- | ------- | ----------------------------------- |
| success | boolean | Whether the operation is successful |

Example Results：

```json
{
  "success": true
}
```

## Data Structure
