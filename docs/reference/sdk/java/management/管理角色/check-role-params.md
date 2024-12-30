# Check if the role Code or Name is available

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Check whether it is available through user pool ID, permission space Code and role Code, or user pool ID, permission space Name and role Name.

## Method Name

`ManagementClient.checkParamsNamespace`

## Request Parameters

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                            | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| code      | string | yes                                          | -                                           | Unique identifier of the role in the permission group (permission space)                              | `exampleCode`                                |
| namespace | string | yes                                          | -                                           | Code of the permission group (permission space). If not passed, the default permission group is used. | `default`                                    |
| name      | string | No                                           | -                                           | Role Name in the permission group (permission space)                                                  | `Example Role Name`                          |

## Request Response

Type： `RoleCheckParamsRespDto`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                       | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#CheckRoleParamsRespDto">CheckRoleParamsRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "isValid": " false",
    "message": " namespace name already exist"
  }
}
```

## Data Structure

### <a id="CheckRoleParamsRespDto"></a> CheckRoleParamsRespDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                      | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| isValid | boolean | yes                                          | Is the permission space Name or permission space Code verification valid?                                                                       | ` false`                                     |
| message | boolean | yes                                          | Prompt message if the permission space Name or permission space Code verification fails. If the verification succeeds, Message is not returned. | ` namespace name already exist`              |
