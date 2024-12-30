# Create an administrator role

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Create an administrator role by role code and role name, and select role description

## Method name

`ManagementClient.create_admin_role`

## Request parameters

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>  | <div style="width:200px">Sample value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| name        | string | Yes                                          | -                                           | Administrator role name                     | `manager`                                   |
| code        | string | Yes                                          | -                                           | Unique identifier of the administrator role | `manager`                                   |
| description | string | No                                           | -                                           | Role description                            | `this is role manager description`          |

## Request Response

Type: `RoleCheckParamsRespDto`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                       |
| message    | string                                                       | Description                                                                                                                                                                                                                                                                                                                                        |
| apiCode    | number                                                       | Segmented error code, which can be used to get the specific error type (no return for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#CheckRoleParamsRespDto">CheckRoleParamsRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                      |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "apiCode": 20001,
  "data": {
    "isValid": " false",
    "message": " namespace name already exist"
  }
}
```

## Data Structure

### <a id="CheckRoleParamsRespDto"></a> CheckRoleParamsRespDto

| Name    | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                           | <div style="width:200px">Sample value</div> |
| ------- | ------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| isValid | boolean | Yes                                           | Is the permission space name or permission space Code verification valid?                                                            | ` false`                                    |
| message | boolean | Yes                                           | Permission space name or permission space Code verification failed prompt message, if verification succeeds, Message is not returned | ` namespace name already exist`             |
