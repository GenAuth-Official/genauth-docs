# Get the structure list of external user authorized resources

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is mainly used to obtain the resource list authorized by external users. It obtains the authorization list of external user resources through the permission space Code, external user Id, and resource Code, and returns the authorization of the corresponding resource through different resource types.

### Example of obtaining user authorization string data resource

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "externalId": "63721xxxxxxxxxxxxdde14a3",
  "resourceCode": "exampleStrResourceCode"
}
```

- Parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "namespaceCode": "exampleNamespaceCode",
    "resourceCode": "exampleStrResourceCode",
    "resourceType": "STRING",
    "strResourceAuthAction": {
      "value": "strTestValue",
      "actions": ["get", "delete"]
    }
  }
}
```

### Get user authorization data array resource example

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "externalId": "63721xxxxxxxxxxxxdde14a3",
  "resourceCode": "exampleArrResourceCode"
}
```

- Parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "namespaceCode": "exampleNamespaceCode",
    "resourceCode": "exampleArrResourceCode",
    "resourceType": "ARRAY",
    "arrResourceAuthAction": {
      "values": ["arrTestValue1", "arrTestValue2", "arrTestValue3"],
      "actions": ["get", "delete"]
    }
  }
}
```

### Example of obtaining user authorization tree data resources

- Entry

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "externalId": "63721xxxxxxxxxxxxdde14a3",
  "resourceCode": "exampleArrResourceCode"
}
```

- Parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "namespaceCode": "exampleNamespaceCode",
    "resourceCode": "exampleArrResourceCode",
    "resourceType": "TREE",
    "treeResourceAuthAction": {
      "nodeAuthActionList": [
        {
          "code": "tree11",
          "name": "tree11",
          "value": "test11Value",
          "extendFieldValue": {
            "str": "str_value"
          },
          "actions": ["get", "delete"],
          "children": [
            {
              "code": "tree111",
              "name": "tree111",
              "value": "test111Value",
              "actions": ["update", "read"]
            }
          ]
        },
        {
          "code": "tree22",
          "name": "tree22",
          "value": "test22Value",
          "actions": ["get", "delete"]
        }
      ]
    }
  }
}
```

## Method Name

`ManagementClient.getExternalUserResourceStruct`

## Request Parameters

Type： `GetExternalUserResourceStructDto`

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------- | ------------------------------------ | ----------------------------------- | ------------------------------------- |
| namespaceCode | string | yes | - | permission space Code | `examplePermissionNamespace` |
| resourceCode | string | yes | - | resource Code | `exampleResourceCode` |
| externalId | string | yes | - | external user ID |`63721xxxxxxxxxxxxdde14a3`            |

## Sample Code

```java
package test.management.dataPermission.authentication;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CheckPermissionDto;
import cn.authing.sdk.java.dto.CheckPermissionRespDto;
import cn.authing.sdk.java.dto.GetUserResourceStructDto;
import cn.authing.sdk.java.dto.GetUserResourceStructRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;
import java.util.List;

public class GetUserResourceStructTest {
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

        GetExternalUserResourceStructDto request = new GetExternalUserResourceStructDto();
        request.setNamespaceCode("examplePermissionNamespace");
        request.setExternalId("63721xxxxxxxxxxxxdde14a3");
        request.setResourceCode("exampleStrResourceCode");

        GetExternalUserResourceStructRespDto response = client.getExternalUserResourceStruct(request);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `GetExternalUserResourceStructRespDto`

| Name       | Type                                                                     | Description                                                         |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------ |
| statusCode | number                                                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message    | string                                                                   | Description                                                     |
| apiCode    | number                                                                   | This error code is used to get the specific error type.               |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                |
| data       | <a href="#GetUserResourceStructDataDto">GetUserResourceStructDataDto</a> | Response data                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "namespaceCode": "namespaceCode",
    "resourceCode": "resourceCode",
    "resourceType": "STRING",
    "strResourceAuthAction": {
      "value": "resourceCode",
      "actions": ["resourceCode"]
    },
    "arrResourceAuthAction": {
      "values": ["resourceCode"],
      "actions": ["resourceCode"]
    },
    "treeResourceAuthAction": {
      "nodeAuthActionList": [
          {
              "code": "123",
              "name": "Tree data resource",
              "value": "Sample tree resource policy node",
              "extendFieldValue": {
                  "str": "str_value"
              },
              "actions": "read",
              "children": [
                  {
                      "code": "code1",
                      "name": "Child node 1",
                      "value": "Child node value",
                      "actions": [
                          "Create"
                      ],
                      "children": [
                          {
                              "code": "code2",
                              "name": "Child node 2",
                              "value": "Child node 2 value",
                              "actions": [
                                  "get"
                              ]
                          }
                      ]
                  }
              ]
          }
      ]
    }
  }
}
```

## Data Structure

### <a id="GetExternalUserResourceStructDataDto"></a> GetExternalUserResourceStructDataDto

| Name                   | Type                   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                  | <div style="width:200px">Example Value</div> |
| ---------------------- | ---------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| namespaceCode | string | yes | Permission space code | `namespaceCode` |
| resourceCode | string | yes | Resource code | `resourceCode` |
| resourceType | string | yes | Data resource type, nested type, <a href="#ResourceType">ResourceType</a>. Currently supports three types: tree structure (TREE), string (STRING), array (ARRAY), and returns different structures according to different types. <br>- `STRING`: string type result StrResourceAuthAction. <br>- `ARRAY`: array type ArrResourceAuthAction. <br>- `TREE`: tree type TreeResourceAuthAction. | |
| strResourceAuthAction | StrResourceAuthAction | No | String resource authorization structure, nested Type: <a href="#StrResourceAuthAction">StrResourceAuthAction</a>. | |
| arrResourceAuthAction | ArrResourceAuthAction | No | Array resource authorization structure, nested Type: <a href="#ArrResourceAuthAction">ArrResourceAuthAction</a>. | |
| treeResourceAuthAction | TreeResourceAuthAction | No | Tree resource authorization structure, nested Type: <a href="#TreeResourceAuthAction">TreeResourceAuthAction</a>. Tree resource authorization | |

### <a id="ResourceType"></a> ResourceType

| Name | Type | Description |
| :----- | :--- | ---------- |
| STRING | enum | String type |
| ARRAY | enum | Array type |
| TREE | enum | Tree type |

### <a id="StrResourceAuthAction"></a> StrResourceAuthAction

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| value | string | yes | Value of string data resource | `resourceValue` |
| actions | array | yes | Permission operation list of string data resource | `["read","get"]` |

### <a id="ArrResourceAuthAction"></a> ArrResourceAuthAction

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ----- | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| values ​​| array | yes | Values ​​of array data resources | `["resourceValue1","resourceValue2"]` |
| actions | array | yes | Permission operation list of array data resources      | `["read","get"]`                      |

### <a id="TreeResourceAuthAction"></a> TreeResourceAuthAction

| Name               | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                               | <div style="width:200px">Example Value</div> |
| ------------------ | ----- | -------------------------------------- | ----------------------------------------------------------------- | ------------------------------------- |
| nodeAuthActionList | array | yes                                     | Tree structure node list, nested Type：<a href="#TreeStructs">TreeStructs</a>。 | -                                     |

### <a id="TreeStructs"></a> TreeStructs

| Name             | Type        | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                  | <div style="width:200px">Example Value</div>                                                                                                                                                       |
| ---------------- | ----------- | -------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|code | string | yes | Tree resource node Code, unique in the same level | `123` |
| name | string | yes | Tree resource node Name, unique in the same level | `Data resource` |
| value | string | No | Tree resource node Value | `Sample resource policy node` |
| actions | array | yes | List of permission operations for tree data resource policy node | `read` |
| children | TreeStructs | No | Child node data, child node data can be up to five levels deep, nested Type: <a href="#TreeStructs">TreeStructs</a>. | `[{"code":"code1","name":"child node 1","value":"child node value","enabled":false,"action":"create","children":[{"code":"code2","name":"child node 2","value":"child node 2 value","enabled":true,"action":"get"}]}]` |
| extendFieldValue | map | No | Extend field value                                                                         | `{"str":"str_value"}`                                                                                                                                                                       |
