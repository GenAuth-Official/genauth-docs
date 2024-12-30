# Determine external user permissions

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

## Description

When your user is an external user and needs to determine whether he has a certain permission for a resource, you can use this interface to pass the user's ID through `externalId`

## Method Name

`ManagementClient.checkExternalUserPermission`

## Request Parameters

| Name                  | Type                                       | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                 | <div style="width:200px">Example Value</div>                                                       |
| --------------------- | ------------------------------------------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| resources             | string[]                                   | yes                                          | -                                           | Resource path list, **Tree resources need to go to specific tree nodes**   | `["strResourceCode","arrResourceCode","treeResourceCode/StructCode1/resourceStructChildrenCode1"]` |
| action                | string                                     | yes                                          | -                                           | Data resource permission operation, read, get, write and other actions     | `get`                                                                                              |
| externalId            | string                                     | yes                                          | -                                           | External user ID                                                           | `63721xxxxxxxxxxxxdde14a3`                                                                         |
| namespaceCode         | string                                     | yes                                          | -                                           | Permission space Code                                                      | `examplePermissionNamespace`                                                                       |
| judgeConditionEnabled | boolean                                    | no                                           | -                                           | Whether to enable conditional judgment, default true                       | `true`                                                                                             |
| authEnvParams         | <a href="#AuthEnvParams">AuthEnvParams</a> | no                                           | -                                           | Conditional environment attribute, used if conditional judgment is enabled | `{"ip":"127.0.0.1"}`                                                                               |

## Request Response

Type： `CheckExternalUserPermissionRespDto`

| Name       | Type                                                                                 | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                               | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                               | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#CheckExternalUserPermissionDataDto">CheckExternalUserPermissionDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "checkResultList": {
      "namespaceCode": "examplePermissionNamespace",
      "action": "get",
      "resource": "treeResource1",
      "enabled": true
    }
  }
}
```

## Data Structure

### <a id="AuthEnvParams"></a> AuthEnvParams

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| ip          | string | no                                           | ip                                           | `127.0.0.1`                                  |
| city        | string | no                                           | city                                         | `Beijing`                                    |
| province    | string | no                                           | province                                     | `Hubei`                                      |
| country     | string | no                                           | country                                      | `China`                                      |
| deviceType  | string | no                                           | device type: PC/Mobile                       | PC                                           |
| systemType  | string | no                                           | operation type: Windows, Android, iOS, MacOS | Windows                                      |
| browserType | string | no                                           | browser type: IE/Chrome/Firefox              | IE                                           |
| requestDate | string | no                                           | request time                                 | `2022-07-03T03:20:30.000Z`                   |

### <a id="CheckExternalUserPermissionDataDto"></a> CheckExternalUserPermissionDataDto

| Name            | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                             | <div style="width:200px">Example Value</div> |
| --------------- | ----- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| checkResultList | array | Yes                                          | Check result list Nested Type: <a href="#CheckExternalUserPermissionsRespDto">CheckExternalUserPermissionsRespDto</a>. |                                              |

### <a id="CheckExternalUserPermissionsRespDto"></a> CheckExternalUserPermissionsRespDto

| Name          | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                     | <div style="width:200px">Example Value</div> |
| ------------- | ------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| namespaceCode | string  | Yes                                          | Permission space Code                                                                          | `examplePermissionNamespace`                 |
| action        | string  | Yes                                          | Data resource permission operation                                                             | `get`                                        |
| resource      | string  | Yes                                          | Resource path                                                                                  | `treeResource1`                              |
| enabled       | boolean | Yes                                          | Whether the user has a certain operation of the data resource under a certain permission space | `true`                                       |
