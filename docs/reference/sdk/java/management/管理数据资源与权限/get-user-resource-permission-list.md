# Get the list of permissions that a user has for certain resources (recommended)

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

## Description

When you need to query the permissions that a user has for a specified list of resources, you can use this interface.

## Note

This interface requires you to pass the specified resource code (if it is a tree type resource, you need to pass the full code path of the node). This interface has better performance and is recommended.

## Request example

### Example of getting user string and array resource permissions

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
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
    "permissionList": [
      {
        "namespaceCode": "examplePermissionNamespace",
        "actions": ["read", "get"],
        "resource": "strResourceCode1"
      },
      {
        "namespaceCode": "examplePermissionNamespace",
        "actions": ["read", "update", "delete"],
        "resource": "arrayResourceCode1"
      }
    ]
  }
}
```

### Example of obtaining user tree resource permissions

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
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
    "permissionList": [
      {
        "namespaceCode": "examplePermissionNamespace",
        "actions": ["read", "update", "delete"],
        "resource": "treeResourceCode1/StructCode1/resourceStructChildrenCode1"
      },
      {
        "namespaceCode": "examplePermissionNamespace",
        "actions": ["read", "get", "delete"],
        "resource": "treeResourceCode2/StructCode1/resourceStructChildrenCode1"
      }
    ]
  }
}
```

## Method Name

`ManagementClient.getUserResourcePermissionList`

## Request Parameters

| Name          | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                               | <div style="width:200px">Example Value</div>                                                       |
| ------------- | -------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| resources     | string[] | yes                                          | -                                           | Resource path list, **tree resources need to go to specific tree nodes** | `["strResourceCode","arrResourceCode","treeResourceCode/StructCode1/resourceStructChildrenCode1"]` |
| userId        | string   | yes                                          | -                                           | User id                                                                  | `6301ceaxxxxxxxxx27478`                                                                            |
| namespaceCode | string   | yes                                          | -                                           | Permission space Code                                                    | `examplePermissionNamespace`                                                                       |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetUserResourcePermissionListDto;
import cn.authing.sdk.java.dto.GetUserResourcePermissionListRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class GetUserResourcePermissionListTest {

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

        GetUserResourcePermissionListDto request = new GetUserResourcePermissionListDto();
        request.setNamespaceCode("examplePermissionNamespace");
        request.setUserId("63721xxxxxxxxxxxxdde14a3");
        List<String> resources = new ArrayList<>();
        resources.add("strResourceCode");
        resources.add("arrayResourceCode");
        resources.add("/treeResourceCode/structCode/resourceStructChildrenCode");
        request.setResources(resources);
        GetUserResourcePermissionListRespDto response = client.getUserResourcePermissionList(request);
        System.out.println(JsonUtils.serialize(response));
    }

}
```

## Request Response

Type： `GetUserResourcePermissionListRespDto`

| Name       | Type                                                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                                   | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                                   | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#GetUserResourcePermissionListDataDto">GetUserResourcePermissionListDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "permissionList": {
      "namespaceCode": "examplePermissionNamespace",
      "actions": "[\"get\",\"read\",\"write\",\"delete\"]",
      "resource": "treeResourceCode1"
    }
  }
}
```

## Data Structure

### <a id="GetUserResourcePermissionListDataDto"></a> GetUserResourcePermissionListDataDto

| Name           | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                               | <div style="width:200px">Example Value</div> |
| -------------- | ----- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| permissionList | array | yes                                          | Permission list Nested Type: <a href="#GetUserResourcePermissionList">GetUserResourcePermissionList</a>. |                                              |

### <a id="GetUserResourcePermissionList"></a> GetUserResourcePermissionList

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| namespaceCode | string | yes                                          | Permission space code                      | `examplePermissionNamespace`                 |
| actions       | array  | yes                                          | Data resource permission operation list    | `["get","read","write","delete"]`            |
| resource      | string | yes                                          | Resource path                              | `treeResourceCode1`                          |
