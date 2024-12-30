# Get user permission list

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

## Description

This interface is used to query the permission data of certain users in certain permission spaces.

Our authentication interface has multiple authentication scenarios, the difference lies in the parameter list that can be passed in the scenario and the different forms of output parameters. **When you need to query all permissions of certain users**, you can use this interface,

## Note

The interface provides two array-type input parameters `userIds` and `namespaceCodes` to support batch query (note: namespaceCodes is optional).

## Scenario Example

If your business scenario is that after a user logs in, he can see all the documents, personnel information, equipment information and other resources that he can access or perform other operations on, then you can call this interface to query all the user's permissions after the user logs in.

## Request Example

### Query a single user permission list example

Note: In the return parameters of this interface, the tree type data resource permissions are returned in the **path** way

- Entry

```json
{
  "userIds": ["6301ceaxxxxxxxxxxx27478"]
}
```

- Parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "userPermissionList": [
      {
        "userId": "6301ceaxxxxxxxxxxx27478",
        "namespaceCode": "examplePermissionNamespace",
        "resourceList": [
          {
            "resourceCode": "strCode",
            "resourceType": "STRING",
            "strAuthorize": {
              "value": "Example string resource",
              "actions": ["read", "post", "get", "write"]
            }
          },
          {
            "resourceCode": "arrayCode",
            "resourceType": "ARRAY",
            "arrAuthorize": {
              "values": [
                "Example array resource 1",
                "Example array resource 2"
              ],
              "actions": ["read", "post", "get", "write"]
            }
          },
          {
            "resourceCode": "treeCode",
            "resourceType": "TREE",
            "treeAuthorize": {
              "authList": [
                {
                  "nodePath": "/treeChildrenCode/treeChildrenCode1",
                  "nodeActions": ["read", "get"],
                  "nodeName": "treeChildrenName1",
                  "nodeValue": "treeChildrenValue1",
                  "nodeExtendFieldValue": {
                    "str": "str_value"
                  }
                },
                {
                  "nodePath": "/treeChildrenCode/treeChildrenCode2",
                  "nodeActions": ["read", "get"],
                  "nodeName": "treeChildrenName2",
                  "nodeValue": "treeChildrenValue2"
                },
                {
                  "nodePath": "/treeChildrenCode/treeChildrenCode3",
                  "nodeActions": ["read"],
                  "nodeName": "treeChildrenName3",
                  "nodeValue": "treeChildrenValue3"
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
```

### Example of querying multiple user permission lists

- Entry

```json
{
  "userIds": ["6301ceaxxxxxxxxxxx27478", "6121ceaxxxxxxxxxxx27312"]
}
```

- Parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "userPermissionList": [
      {
        "userId": "6301ceaxxxxxxxxxxx27478",
        "namespaceCode": "examplePermissionNamespace1",
        "resourceList": [
          {
            "resourceCode": "strCode",
            "resourceType": "STRING",
            "strAuthorize": {
              "value": "Example string resource",
              "actions": ["read", "post", "get", "write"]
            }
          }
        ]
      },
      {
        "userId": "6121ceaxxxxxxxxxxx27312",
        "namespaceCode": "examplePermissionNamespace2",
        "resourceList": [
          {
            "resourceCode": "arrayCode",
            "resourceType": "ARRAY",
            "arrAuthorize": {
              "values": [
                "Example array resource 1",
                "Example array resource 2"
              ],
              "actions": ["read", "post", "get", "write"]
            }
          }
        ]
      }
    ]
  }
}
```

### Example of querying the permission list of multiple users in multiple permission spaces

- Entry

```json
{
  "userIds": ["6301ceaxxxxxxxxxxx27478", "6121ceaxxxxxxxxxxx27312"],
  "namespaceCodes": [
    "examplePermissionNamespace1",
    "examplePermissionNamespace2"
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
    "userPermissionList": [
      {
        "userId": "6301ceaxxxxxxxxxxx27478",
        "namespaceCode": "examplePermissionNamespace1",
        "resourceList": [
          {
            "resourceCode": "strCode1",
            "resourceType": "STRING",
            "strAuthorize": {
              "value": "Example string resource",
              "actions": ["read", "post", "get", "write"]
            }
          }
        ]
      },
      {
        "userId": "6121ceaxxxxxxxxxxx27312",
        "namespaceCode": "examplePermissionNamespace2",
        "resourceList": [
          {
            "resourceCode": "arrayCode",
            "resourceType": "ARRAY",
            "arrAuthorize": {
              "values": [
                "Example array resource 1",
                "Example array resource 2"
              ],
              "actions": ["read", "post", "get", "write"]
            }
          }
        ]
      }
    ]
  }
}
```

## Method Name

`ManagementClient.getUserPermissionList`

## Request Parameters

| Name           | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------------- | -------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| userIds        | string[] | yes                                          | -                                           | User id list                               | `["6301ceaxxxxxxxxxxx27478"]`                |
| namespaceCodes | string[] | no                                           | -                                           | Permission Space Code List                 | `["examplePermissionNamespace1"]`            |

## Sample Code

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetUserPermissionListDto;
import cn.authing.sdk.java.dto.GetUserPermissionListRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class GetUserPermissionListTest {

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

        GetUserPermissionListDto request = new GetUserPermissionListDto();
        List<String> userIds = new ArrayList<>();
        userIds.add("6301ceaxxxxxxxxxxx27478");
        userIds.add("6121ceaxxxxxxxxxxx27312");
        request.setUserIds(userIds);
        List<String> namespaceCodes = new ArrayList<>();
        namespaceCodes.add("examplePermissionNamespace1");
        namespaceCodes.add("examplePermissionNamespace2");
        request.setNamespaceCodes(namespaceCodes);

        GetUserPermissionListRespDto response = client.getUserPermissionList(request);
        System.out.println(JsonUtils.serialize(response));
    }

}
```

## Request Response

Type： `GetUserPermissionListRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                           |
| message    | string                                                                   | Description                                                                                                                                                                                                                                                                                                                                       |
| apiCode    | number                                                                   | Segment error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see：[API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#GetUserPermissionListDataDto">GetUserPermissionListDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "userPermissionList": {
      "userId": "6301cexxxxxxxxxxxxxxxxx78",
      "namespaceCode": "examplePermissionNamespace",
      "resourceList": {
        "resourceCode": "resourceCode",
        "resourceType": "STRING",
        "strAuthorize": {
          "value": "Example string resource Value",
          "actions": "[\"read\",\"get\"]"
        },
        "arrAuthorize": {
          "values": "[\"value0\",\"value1\"]",
          "actions": "[\"read\",\"get\"]"
        },
        "treeAuthorize": {
          "authList": {
            "nodePath": "/treeCode1/treeCode11",
            "nodeName": "Example Tree Resource Node Name",
            "nodeActions": "[\"read\",\"get\"]",
            "nodeValue": "Example Tree Resource Node Value"
          }
        }
      }
    }
  }
}
```

## Data Structure

### <a id="GetUserPermissionListDataDto"></a> GetUserPermissionListDataDto

| Name               | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                    | <div style="width:200px">Example Value</div> |
| ------------------ | ----- | -------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------- |
| userPermissionList | array | yes                                          | User permission list Nested Type: <a href="#UserPermissionListDto">UserPermissionListDto</a>. |                                              |

### <a id="UserPermissionListDto"></a> UserPermissionListDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                      | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| userId        | string | yes                                          | User ID authorized by data policy                                                                                               | `6301cexxxxxxxxxxxxxxxxx78`                  |
| namespaceCode | string | yes                                          | Permission space Code authorized by data policy                                                                                 | `examplePermissionNamespace`                 |
| resourceList  | array  | No                                           | List of all data policy resources of the user under the permission space Nested Type: <a href="#OpenResource">OpenResource</a>. |                                              |

### <a id="OpenResource"></a> OpenResource

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                   | <div style="width:200px">Example Value</div> |
| ------------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| resourceCode  | string | yes                                          | Data resource Code authorized under data policy                                                                                                                                                                                                                                                                                              | `resourceCode`                               |
| resourceType  | string | yes                                          | Data resource type authorized under data policy. Currently, it supports three types: tree structure (TREE), string (STRING), and array (ARRAY). Different structures are returned according to different types. <br>- `STRING`: string type result StrAuthorize<br>- `ARRAY`: array type ArrayAuthorize<br>- `TREE`: tree type TreeAuthorize | TREE                                         |
| strAuthorize  |        | No                                           | String resource of data policy Nested Type: <a href="#StrAuthorize">StrAuthorize</a>.                                                                                                                                                                                                                                                        |                                              |
| arrAuthorize  |        | No                                           | Array resource of data policy Nested Type: <a href="#ArrayAuthorize">ArrayAuthorize</a>.                                                                                                                                                                                                                                                     |                                              |
| treeAuthorize |        | No                                           | Tree resource of data policy Nested Type：<a href="#TreeAuthorize">TreeAuthorize</a>。                                                                                                                                                                                                                                                       |                                              |

### <a id="StrAuthorize"></a> StrAuthorize

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| value   | string | yes                                          | String resource Value                      | `Example string resource Value`              |
| actions | array  | yes                                          | String resource operation list             | `["read","get"]`                             |

### <a id="ArrayAuthorize"></a> ArrayAuthorize

| Name      | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------- | ----- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| values ​​ | array | yes                                          | Array resource Value list                  | `["value0","value1"]`                        |
| actions   | array | yes                                          | Array resource operation list              | `["read","get"]`                             |

### <a id="TreeAuthorize"></a> TreeAuthorize

| Name     | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                          | <div style="width:200px">Example Value</div> |
| -------- | ----- | -------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------- |
| authList | array | yes                                          | Tree resource authorization list Nested Type: <a href="#TreeAuthBo">TreeAuthBo</a>. |                                              |

### <a id="TreeAuthBo"></a> TreeAuthBo

| Name                 | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Example Value</div> |
| -------------------- | ------ | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| nodePath             | string | yes                                          | Tree resource node path                      | `/treeCode1/treeCode11`                      |
| nodeName             | string | yes                                          | Tree resource node Name                      | `Example tree resource node Name`            |
| nodeActions          | array  | yes                                          | Tree resource node operation permission list | `["read","get"]`                             |
| nodeValue            | string | No                                           | Tree resource node Value                     | `Example tree resource node Value`           |
| nodeExtendFieldValue | map    | No                                           | Extended field value                         | `{"str":"str_value"}`                        |
