# Get a list of users who have certain resource permissions

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

## Description

When you need to get the user who has the permission to specify the resource, you can use this interface.

## Scenario Example

If your business scenario is: you want to see the list of users who can edit the current document, then you can use this interface.

## Request Example

### Example of getting a list of authorized users for string and array resources

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "actions": ["get", "update", "read"],
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
    "authUserList": [
      {
        "resource": "strResourceCode1",
        "actionAuthList": [
          {
            "userIds": ["63721xxxxxxxxxxxxdde14a3"],
            "action": "get"
          },
          {
            "userIds": ["63721xxxxxxxxxxxxdde14a3"],
            "action": "update"
          },
          {
            "userIds": ["63721xxxxxxxxxxxxdde14a3"],
            "action": "read"
          }
        ]
      },
      {
        "resource": "arrayResourceCode1",
        "actionAuthList": [
          {
            "userIds": ["63721xxxxxxxxxxxxdde14a3"],
            "action": "get"
          },
          {
            "userIds": ["63721xxxxxxxxxxxxdde14a3"],
            "action": "update"
          },
          {
            "userIds": ["63721xxxxxxxxxxxxdde14a3"],
            "action": "read"
          }
        ]
      }
    ]
  }
}
```

### Example of getting a list of users authorized to use a tree resource

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "actions": ["get", "update", "delete"],
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
    "authUserList": [
      {
        "resource": "treeResourceCode1/StructCode1/resourceStructChildrenCode1",
        "actionAuthList": [
          {
            "userIds": ["63721xxxxxxxxxxxxdde14a3"],
            "action": "get"
          },
          {
            "userIds": ["63721xxxxxxxxxxxxdde14a3"],
            "action": "update"
          },
          {
            "userIds": ["63721xxxxxxxxxxxxdde14a3"],
            "action": "delete"
          }
        ]
      },
      {
        "resource": "treeResourceCode2/StructCode1/resourceStructChildrenCode1",
        "actionAuthList": [
          {
            "userIds": ["63721xxxxxxxxxxxxdde14a3"],
            "action": "get"
          },
          {
            "userIds": ["63721xxxxxxxxxxxxdde14a3"],
            "action": "update"
          },
          {
            "userIds": ["63721xxxxxxxxxxxxdde14a3"],
            "action": "delete"
          }
        ]
      }
    ]
  }
}
```

## Method Name

`ManagementClient.listResourceTargets`

## Request Parameters

| Name          | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                        | <div style="width:200px">Example Value</div> |
| ------------- | -------- | -------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------- |
| resources     | string[] | yes                                          | -                                           | Data resource path list to which the data policy belongs. Array length limit: 50. | `["treeResourceCode1"]`                      |
| actions       | string[] | yes                                          | -                                           | Data resource permission operation list. Array length limit: 50.                  | `["get"]`                                    |
| namespaceCode | string   | yes                                          | -                                           | Permission space Code                                                             | `examplePermissionNamespace`                 |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ListResourceTargets;
import cn.authing.sdk.java.dto.ListResourceTargetsRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class ListResourceTargetsTest {

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

        ListResourceTargets request = new ListResourceTargets();
        request.setNamespaceCode("examplePermissionNamespace");
        ArrayList<String> actionList = new ArrayList<>();
        actionList.add("get");
        actionList.add("update");
        actionList.add("read");
        request.setActions(actionList);
        List<String> resources = new ArrayList<>();
        resources.add("strResourceCode");
        resources.add("arrayResourceCode");
        resources.add("/treeResourceCode/structCode/resourceStructChildrenCode2");
        request.setResources(resources);
        ListResourceTargetsRespDto response = client.listResourceTargets(request);
        System.out.println(JsonUtils.serialize(response));
    }
}
```

## Request Response

Type： `ListResourceTargetsRespDto`

| Name       | Type                                                                 | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                               | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                               | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                               | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                      |
| data       | <a href="#ListResourceTargetsDataDto">ListResourceTargetsDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "authUserList": {
      "resource": "treeResourceCode1",
      "actionAuthList": {
        "userIds": "[\"63721xxxxxxxxxxxxdde14a3\"]",
        "action": "get"
      }
    }
  }
}
```

## Data Structure

### <a id="ListResourceTargetsDataDto"></a> ListResourceTargetsDataDto

| Name         | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                 | <div style="width:200px">Example Value</div> |
| ------------ | ----- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| authUserList | array | yes                                          | User authorization list Nested Type: <a href="#ListResourceTargetsDtoResp">ListResourceTargetsDtoResp</a>. |                                              |

### <a id="ListResourceTargetsDtoResp"></a> ListResourceTargetsDtoResp

| Name           | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                 | <div style="width:200px">Example Value</div> |
| -------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------- |
| resource       | string | yes                                          | Resource path                                                                              | `treeResourceCode1`                          |
| actionAuthList | array  | yes                                          | Data resource permission operation list Nested Type: <a href="#ActionAuth">ActionAuth</a>. |                                              |

### <a id="ActionAuth"></a> ActionAuth

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| userIds | array  | yes                                          | Data policy authorized user ID list        | `["63721xxxxxxxxxxxxdde14a3"]`               |
| action  | string | yes                                          | Data resource permission operation         | `get`                                        |
