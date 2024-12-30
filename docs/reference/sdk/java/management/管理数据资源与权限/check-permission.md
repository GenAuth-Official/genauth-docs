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

## Scenario example

When a user deletes a piece of data, it is necessary to determine whether he has the deletion permission for this resource, so this interface can be used.

## Request example

### Example of judging user permissions for string and array resources (unconditional judgment)

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "get",
  "resources": ["strResourceCode1", "arrayResourceCode1"]
}
```

- Parameters

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

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "get",
  "resources": ["strResourceCode1", "arrayResourceCode1"],
  "judgeConditionEnabled": true,
  "authEnvParams": {
    "ip": "110.96.0.0",
    "city": "xxx",
    "province": "xxx",
    "country": "xxx",
    "deviceType": "PC",
    "systemType": "ios",
    "browserType": "IE",
    "requestDate": "2022-12-26 17:40:00"
  }
}
```

- Parameters

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

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "get",
  "resources": [
    "treeResourceCode1/StructCode1/resourceStructChildrenCode1",
    "treeResourceCode2/StructCode1/resourceStructChildrenCode1"
  ]
}
```

- Parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "checkResultList": [
      {
        "namespaceCode": "examplePermissionNamespace",
        "action": "get",
        "resource": "treeResourceCode1/StructCode1/resourceStructChildrenCode1",
        "enabled": true
      },
      {
        "namespaceCode": "examplePermissionNamespace",
        "action": "get",
        "resource": "treeResourceCode2/StructCode1/resourceStructChildrenCode1",
        "enabled": true
      }
    ]
  }
}
```

## Method Name

`ManagementClient.checkPermission`

## Request Parameters

| Name                  | Type                                       | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                   | <div style="width:200px">Example Value</div>                                                       |
| --------------------- | ------------------------------------------ | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| resources             | string[]                                   | Yes                                          | -                                           | Resource path list, **tree resources need to go to specific tree nodes**     | `["strResourceCode","arrResourceCode","treeResourceCode/StructCode1/resourceStructChildrenCode1"]` |
| action                | string                                     | Yes                                          | -                                           | Data resource permission operation, read, get, write and other actions       | `get`                                                                                              |
| userId                | string                                     | Yes                                          | -                                           | User id                                                                      | `63721xxxxxxxxxxxxdde14a3`                                                                         |
| namespaceCode         | string                                     | Yes                                          | -                                           | Permission space Code                                                        | `examplePermissionNamespace`                                                                       |
| judgeConditionEnabled | boolean                                    | No                                           | -                                           | Whether to enable conditional judgment, the default is false and not enabled |                                                                                                    |
| authEnvParams         | <a href="#AuthEnvParams">AuthEnvParams</a> | No                                           | -                                           | Conditional environment attributes, used if conditional judgment is enabled  | `{"ip":"127.0.0.1"}`                                                                               |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CheckPermissionDto;
import cn.authing.sdk.java.dto.CheckPermissionRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class CheckPermissionTest {

    // Need to be replaced with your GenAuth Access Key ID
    private static final String ACCESS_KEY_ID = "AUTHING_ACCESS_KEY_ID";
    // Need to be replaced with your GenAuth Access Key Secret
    private static final String ACCESS_KEY_SECRET = "AUTHING_ACCESS_KEY_SECRET";

    public static void main(String[] args) throws Throwable {
        ManagementClientOptions clientOptions = new ManagementClientOptions();
        clientOptions.setAccessKeyId(ACCESS_KEY_ID);
        clientOptions.setAccessKeySecret(ACCESS_KEY_SECRET);
        // If you are a private deployment customer, you need to set the GenAuth service domain name
        // clientOptions.setHost("https://api.your-authing-service.com");
        ManagementClient client = new ManagementClient(clientOptions);

        CheckPermissionDto request = new CheckPermissionDto();
        request.setNamespaceCode("examplePermissionNamespace");
        request.setUserId("63721xxxxxxxxxxxxdde14a3");
        request.setAction("get");
        List<String> resources = new ArrayList<>();
        resources.add("strResourceCode");
        resources.add("arrayResourceCode");
        resources.add("/treeResourceCode/structCode/resourceStructChildrenCode");
        request.setResources(resources);
        CheckPermissionRespDto response = client.checkPermission(request);
        System.out.println(JsonUtils.serialize(response));
    }

}
```

## Request Response

Type： `CheckPermissionRespDto`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                       | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                       | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#CheckPermissionDataDto">CheckPermissionDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

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

### <a id="CheckPermissionDataDto"></a> CheckPermissionDataDto

| Name            | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                          | <div style="width:200px">Example Value</div> |
| --------------- | ----- | -------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| checkResultList | array | yes                                          | Check the result list Nested Type: <a href="#CheckPermissionsRespDto">CheckPermissionsRespDto</a>。 |                                              |

### <a id="CheckPermissionsRespDto"></a> CheckPermissionsRespDto

| Name          | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                     | <div style="width:200px">Example Value</div> |
| ------------- | ------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| namespaceCode | string  | yes                                          | permission space Code                                                                          | `examplePermissionNamespace`                 |
| action        | string  | yes                                          | data resource permission operation                                                             | `get`                                        |
| resource      | string  | yes                                          | resource path                                                                                  | `treeResource1`                              |
| enabled       | boolean | yes                                          | Whether the user has a certain operation on the data resource under a certain permission space | `true`                                       |
