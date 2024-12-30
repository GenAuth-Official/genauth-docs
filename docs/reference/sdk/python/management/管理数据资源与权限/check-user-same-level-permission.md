# Determine the user's permissions at the same level of a tree resource (recommended)

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

## Description

This interface is used to determine whether the user has certain permissions on the nodes of the **same level** of a tree resource. Since tree-type resources are more commonly used, we have added an interface for determining the permissions of tree-type resource nodes based on the business scenario of "determining whether the user has resource permissions".

## Note

We use the `resource` parameter to locate a certain level of the tree type data resource (so the parameter is passed in the format of `resource code/node code path`), and use the `resourceNodeCodes` parameter to locate the current nodes.

## Scenario Example

If your business scenario is: when a user deletes certain files in a folder in a file system, you need to determine whether he has the permission to delete these files, then you can use this interface.

## Request Example

### Example of judging the user's permissions at the same level of tree resources (unconditional judgment)

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read",
  "resource": "treeResourceCode/structCode",
  "resourceNodeCodes": [
    "resourceStructChildrenCode1",
    "resourceStructChildrenCode2",
    "resourceStructChildrenCode3"
  ]
}
```

### Example of judging the permissions of users at the same level of tree resources (enabling conditional judgment)

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read",
  "resource": "treeResourceCode/structCode",
  "resourceNodeCodes": [
    "resourceStructChildrenCode1",
    "resourceStructChildrenCode2",
    "resourceStructChildrenCode3"
  ],
  "judgeConditionEnabled": true,
  "authEnvParams": {
    "ip": "110.96.0.0",
    "city": "xxxx",
    "province": "xxxx",
    "country": "xxx",
    "deviceType": "PC",
    "systemType": "ios",
    "browserType": "IE",
    "requestDate": "2022-12-26 17:40:00"
  }
}
```

## Method name

`ManagementClient.check_user_same_level_permission`

## Request parameters

| Name                  | Type                                       | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                                          | <div style="width:200px">Sample value</div> |
| --------------------- | ------------------------------------------ | --------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| resourceNodeCodes     | string[]                                   | Yes                                           | -                                           | Current tree resource path child node Code                                                                                                                                                                          | `["resourceStructChildrenCode1"]`           |
| resource              | string                                     | Yes                                           | -                                           | Tree resource path, multi-level paths are allowed, examples are as follows<br>- treeResourceCode<br>- treeResourceCode/structCode<br>- treeResourceCode/structCode/struct1Code<br>- treeResourceCode/.../structCode | `treeResourceCode`                          |
| action                | string                                     | yes                                           | -                                           | Data resource permission operation                                                                                                                                                                                  | `read`                                      |
| userId                | string                                     | yes                                           | -                                           | User ID                                                                                                                                                                                                             | `63721xxxxxxxxxxxxdde14a3`                  |
| namespaceCode         | string                                     | yes                                           | -                                           | Permission space Code                                                                                                                                                                                               | `examplePermissionNamespace`                |
| judgeConditionEnabled | boolean                                    | no                                            | -                                           | Whether to enable conditional judgment, the default is false and not enabled                                                                                                                                        |                                             |
| authEnvParams         | <a href="#AuthEnvParams">AuthEnvParams</a> | no                                            | -                                           | Conditional environment attributes, used if conditional judgment is enabled                                                                                                                                         | `{"ip":"127.0.0.1"}`                        |

## Request Response

Type: `CheckUserSameLevelPermissionResponseDto`

| Name       | Type                                                                                   | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                                                                 | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                                                                 | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#CheckUserSameLevelPermissionDataDto">CheckUserSameLevelPermissionDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "checkLevelResultList": {
      "action": "get",
      "resourceNodeCode": "treeResourceStructChildrenCode1",
      "enabled": true
    }
  }
}
```

## Data Structure

### <a id="AuthEnvParams"></a> AuthEnvParams

| Name        | Type   | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Sample value</div> |
| ----------- | ------ | ----------------------------------------------------- | -------------------------------------------- | ------------------------------------------- |
| ip          | string | No                                                    | ip                                           | `127.0.0.1`                                 |
| city        | string | No                                                    | City                                         | `Beijing`                                   |
| province    | string | No                                                    | Province                                     | `Hubei`                                     |
| country     | string | No                                                    | Country                                      | `China`                                     |
| deviceType  | string | No                                                    | Device type: PC/Mobile                       | PC                                          |
| systemType  | string | No                                                    | Operation type: Windows, Android, iOS, MacOS | Windows                                     |
| browserType | string | No                                                    | Browser type: IE/Chrome/Firefox              | IE                                          |
| requestDate | string | No                                                    | Request time                                 | `2022-07-03T03:20:30.000Z`                  |

### <a id="CheckUserSameLevelPermissionDataDto"></a> CheckUserSameLevelPermissionDataDto

| Name                 | Type  | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                | <div style="width:200px">Sample value</div> |
| -------------------- | ----- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| checkLevelResultList | array | Yes                                    | Response result list Nested type: <a href="#CheckUserSameLevelPermissionRespDto">CheckUserSameLevelPermissionRespDto</a>. |                                             |

### <a id="CheckUserSameLevelPermissionRespDto"></a> CheckUserSameLevelPermissionRespDto

| Name             | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---------------- | ------- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| action           | string  | Yes                                           | Data resource permission operation         | `get`                                       |
| resourceNodeCode | string  | Yes                                           | Tree resource node code                    | `treeResourceStructChildrenCode1`           |
| enabled          | boolean | Yes                                           | Whether it has action permission           | `true`                                      |
