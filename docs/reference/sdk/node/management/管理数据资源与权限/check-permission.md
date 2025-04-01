# Determine user permissions (key points)

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

## Description

You can use this interface when you need to determine whether the user has specified permissions for certain resources

## Note

- This interface locates the corresponding data resource by passing the resource code (if it is a tree type, the full code path of the node needs to be passed).
- If you configure **environmental attribute** conditional judgment when configuring data policy, you need to set the parameter `judgeConditionEnabled` to `true` (default is false), and pass the environment information (such as IP, device type, system type, etc.) of the request through the parameter `authEnvParams`, otherwise the conditional judgment will not take effect, resulting in the failure of data policy.

## Scenario Example

When a user deletes a piece of data, he needs to determine whether he has the deletion permission for this resource, so he can use this interface.

## Request example

### Example of judging user permissions for string and array resources (unconditional judgment)

- Input parameters

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "get",
  "resources": ["strResourceCode1", "arrayResourceCode1"]
}
```

- Output parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "checkResultList": [
      {
        "namespaceCode": "examplePermissionNamespace",
        "resource": "strResourceCode1",
        "action": "get",
        "enabled": true
      },
      {
        "namespaceCode": "examplePermissionNamespace",
        "resource": "arrayResourceCode1",
        "action": "get",
        "enabled": true
      }
    ]
  }
}
```

### Example of judging user permissions for string and array resources (enabling conditional judgment)

- Input parameters

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "get",
  "resources": ["strResourceCode1", "arrayResourceCode1"],
  "judgeConditionEnabled": true,
  "authEnvParams": {
    "ip": "110.96.0.0",
    "city": "Beijing",
    "province": "Beijing",
    "country": "China",
    "deviceType": "PC",
    "systemType": "ios",
    "browserType": "IE",
    "requestDate": "2022-12-26 17:40:00"
  }
}
```

- Output parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "checkResultList": [
      {
        "namespaceCode": "examplePermissionNamespace",
        "resource": "strResourceCode1",
        "action": "get",
        "enabled": false
      },
      {
        "namespaceCode": "examplePermissionNamespace",
        "resource": "arrayResourceCode1",
        "action": "get",
        "enabled": false
      }
    ]
  }
}
```

### Example of judging user permissions on tree resources

- Input parameters

````json
{
"namespaceCode": "examplePermissionNamespace",
"userId": "63721xxxxxxxxxxxxdde14a3",
"action": "get",
"resources": [
"treeResourceCode1/StructCode1/resourceStructChildrenCode1", "treeResourceCode2/StructCode1/resourceStructChildrenCode1" ] } ``` - Outtake ```json { "statusCode": 200, "message": "Operation successful", "apiCode": 20001, "data": { "checkResultList": [ { "namespaceCode": "examplePermissionNamespace", "action": "get", "resource": "treeResourceCode1/StructCode1/resourceStructChildrenCode1", "enabled": true }, { "namespaceCode": "examplePermissionNamespace", "action": "get", "resource": "treeResourceCode2/StructCode1/resourceStructChildrenCode1", "enabled": true } ] }
}
````

## Method name

`ManagementClient.checkPermission`

## Request parameters

| Name                  | Type                                       | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                         | <div style="width:200px">Sample value</div>                                                        |
| --------------------- | ------------------------------------------ | --------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| resources             | string[]                                   | yes                                           | -                                           | Resource path list, **Tree resources need to go to specific tree nodes**           | `["strResourceCode","arrResourceCode","treeResourceCode/StructCode1/resourceStructChildrenCode1"]` |
| action                | string                                     | yes                                           | -                                           | Data resource permission operation, read, get, write and other actions             | `get`                                                                                              |
| userId                | string                                     | yes                                           | -                                           | User ID                                                                            | `63721xxxxxxxxxxxxdde14a3`                                                                         |
| namespaceCode         | string                                     | yes                                           | -                                           | Permission space Code                                                              | `examplePermissionNamespace`                                                                       |
| judgeConditionEnabled | boolean                                    | no                                            | -                                           | Whether to enable conditional judgment, the default value is false and not enabled |                                                                                                    |
| authEnvParams         | <a href="#AuthEnvParams">AuthEnvParams</a> | No                                            | -                                           | Conditional environment attribute, used if conditional judgment is enabled         | `{"ip":"127.0.0.1"}`                                                                               |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.checkPermission({
    namespaceCode: "examplePermissionNamespace",
    userId: "63721xxxxxxxxxxxxdde14a3",
    action: "get",
    resources: [
      "strResourceCode",
      "arrayResourceCode",
      "/treeResourceCode/structCode/resourceStructChildrenCode",
    ],
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `CheckPermissionRespDto`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                               |
| message    | string                                                       | description                                                                                                                                                                                                                                                                                                                                                |
| apiCode    | number                                                       | Segmented error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#CheckPermissionDataDto">CheckPermissionDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                              |

Sample result:

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

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Example value</div> |
| ----------- | ------ | --------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| ip          | string | No                                            | ip                                           | `127.0.0.1`                                  |
| city        | string | No                                            | City                                         | `Beijing`                                    |
| province    | string | No                                            | Province                                     | `Hubei`                                      |
| country     | string | No                                            | Country                                      | `China`                                      |
| deviceType  | string | No                                            | Device type: PC/Mobile                       | PC                                           |
| systemType  | string | No                                            | Operation type: Windows, Android, iOS, MacOS | Windows                                      |
| browserType | string | No                                            | Browser type: IE/Chrome/Firefox              | IE                                           |
| requestDate | string | No                                            | Request time                                 | `2022-07-03T03:20:30.000Z`                   |

### <a id="CheckPermissionDataDto"></a> CheckPermissionDataDto

| Name            | Type  | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                     | <div style="width:200px">Sample value</div> |
| --------------- | ----- | --------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------- |
| checkResultList | array | Yes                                           | Check result list Nested type: <a href="#CheckPermissionsRespDto">CheckPermissionsRespDto</a>. |                                             |

### <a id="CheckPermissionsRespDto"></a> CheckPermissionsRespDto

| Name          | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                     | <div style="width:200px">Example value</div> |
| ------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| namespaceCode | string  | Yes                                           | Permission space Code                                                                          | `examplePermissionNamespace`                 |
| action        | string  | Yes                                           | Data resource permission operation                                                             | `get`                                        |
| resource      | string  | Yes                                           | Resource path                                                                                  | `treeResource1`                              |
| enabled       | boolean | Yes                                           | Whether the user has a certain operation on the data resource under a certain permission space | `true`                                       |
