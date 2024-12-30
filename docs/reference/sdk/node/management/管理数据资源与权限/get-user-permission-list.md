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

The interface provides two array-type input parameters `userIds` and `namespaceCodes` to support batch query (Note: namespaceCodes is optional).

## Scenario Example

If your business scenario is that after a user logs in, he can see all the documents, personnel information, equipment information and other resources that he can access or perform other operations on, then you can call this interface to query all the user's permissions after the user logs in.

## Request example

### Query a single user permission list example

Note: In the return parameters of this interface, the data resource permissions of the tree type are returned in the **path** way

- Input parameter

```json
{
  "userIds": ["6301ceaxxxxxxxxxxx27478"]
}
```

- Output parameter

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
              "values": ["Example data resource 1", "Example data resource 2"],
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
                  "nodeValue": "treeChildrenValue1"
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

- Input parameters

```json
{
  "userIds": ["6301ceaxxxxxxxxxxx27478", "6121ceaxxxxxxxxxxx27312"]
}
```

- Output parameters

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

- Input parameters

```json
{
  "userIds": ["6301ceaxxxxxxxxxxx27478", "6121ceaxxxxxxxxxxx27312"],
  "namespaceCodes": [
    "examplePermissionNamespace1",
    "examplePermissionNamespace2"
  ]
}
```

- Output parameters

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
  "data": {
    "userPermissionList": [
      {
        "userId": "6301ceaxxxxxxxxxxxx27478",
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

## Method name

`ManagementClient.getUserPermissionList`

## Request parameters

| Name           | Type     | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------------- | -------- | --------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| userIds        | string[] | yes                                           | -                                           | user ID list                               | `["6301ceaxxxxxxxxxxx27478"]`               |
| namespaceCodes | string[] | no                                            | -                                           | permission space code list                 | `["examplePermissionNamespace1"]`           |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If you are a private deployment customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.getUserPermissionList({
    userIds: ["6229ffaxxxxxxxxcade3e3d9", "6229ffaxxxxxxxxcade3e3d9"],
    namespaceCodes: [
      "examplePermissionNamespace1",
      "examplePermissionNamespace2",
    ],
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetUserPermissionListRespDto`

| Name       | Type                                                                     | Description                                                                                                                                                                                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                               |
| message    | string                                                                   | description                                                                                                                                                                                                                                                                                                                                                |
| apiCode    | number                                                                   | Segmented error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| data       | <a href="#GetUserPermissionListDataDto">GetUserPermissionListDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                              |

Sample result:

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
            "nodeName": "Example tree resource node name",
            "nodeActions": "[\"read\",\"get\"]",
            "nodeValue": "Example tree resource node Value"
          }
        }
      }
    }
  }
}
```

## Data structure

### <a id="GetUserPermissionListDataDto"></a> GetUserPermissionListDataDto

| Name               | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                    | <div style="width:200px">Sample value</div> |
| ------------------ | ----- | -------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------- |
| userPermissionList | array | Yes                                          | User permission list Nested type: <a href="#UserPermissionListDto">UserPermissionListDto</a>. |                                             |

### <a id="UserPermissionListDto"></a> UserPermissionListDto

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                      | <div style="width:200px">Sample value</div> |
| ------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| userId        | string | yes                                           | User ID authorized by data policy                                                                                               | `6301cexxxxxxxxxxxxxxxxx78`                 |
| namespaceCode | string | yes                                           | Permission space Code authorized by data policy                                                                                 | `examplePermissionNamespace`                |
| resourceList  | array  | no                                            | List of all data policy resources of the user under the permission space Nested type: <a href="#OpenResource">OpenResource</a>. |                                             |

### <a id="OpenResource"></a> OpenResource

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                       | <div style="width:200px">Sample value</div> |
| ------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| resourceCode  | string | Yes                                           | Data resource Code authorized under the data policy                                                                                                                                                                                                                                                                                              | `resourceCode`                              |
| resourceType  | string | Yes                                           | Data resource type authorized under the data policy. Currently, it supports three types: tree structure (TREE), string (STRING), and array (ARRAY). Different structures are returned according to different types. <br>- `STRING`: string type result StrAuthorize<br>- `ARRAY`: array type ArrayAuthorize<br>- `TREE`: tree type TreeAuthorize | TREE                                        |
| strAuthorize  |        | No                                            | String resource of data policy Nested type: <a href="#StrAuthorize">StrAuthorize</a>.                                                                                                                                                                                                                                                            |                                             |
| arrAuthorize  |        | No                                            | Array resource of data policy Nested type: <a href="#ArrayAuthorize">ArrayAuthorize</a>.                                                                                                                                                                                                                                                         |                                             |
| treeAuthorize |        | No                                            | Tree resource of data policy Nested type: <a href="#TreeAuthorize">TreeAuthorize</a>.                                                                                                                                                                                                                                                            |                                             |

### <a id="StrAuthorize"></a> StrAuthorize

| Name    | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| value   | string | Yes                                           | String resource Value                      | `Sample string resource Value`              |
| actions | array  | Yes                                           | String resource action list                | `["read","get"]`                            |

### <a id="ArrayAuthorize"></a> ArrayAuthorize

| Name      | Type  | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------- | ----- | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| values ​​ | array | Yes                                           | Array resource Value list                  | `["value0","value1"]`                       |
| actions   | array | Yes                                           | Array resource action list                 | `["read","get"]`                            |

### <a id="TreeAuthorize"></a> TreeAuthorize

| Name     | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                          | <div style="width:200px">Sample value</div> |
| -------- | ----- | -------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------- |
| authList | array | Yes                                          | Tree resource authorization list Nested type: <a href="#TreeAuthBo">TreeAuthBo</a>. |                                             |

### <a id="TreeAuthBo"></a> TreeAuthBo

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>   | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | -------------------------------------------- | ------------------------------------------- |
| nodePath    | string | yes                                           | Tree resource node path                      | `/treeCode1/treeCode11`                     |
| nodeName    | string | yes                                           | Tree resource node name                      | `Sample tree resource node name`            |
| nodeActions | array  | yes                                           | Tree resource node operation permission list | `["read","get"]`                            |
| nodeValue   | string | no                                            | Tree resource node Value                     | `Sample tree resource node Value`           |
