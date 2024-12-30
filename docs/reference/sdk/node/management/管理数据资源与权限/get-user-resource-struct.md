# Get the structure list of user authorized resources

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is mainly used to obtain the user authorized resource list, and obtain the user resource authorization list through the permission space Code, user id, and resource Code.

### Example of getting user authorization string data resource

- Input

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "resourceCode": "exampleStrResourceCode"
}
```

- Output

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

### Example of getting user authorization data array resource

- Input

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "resourceCode": "exampleArrResourceCode"
}
```

- Output parameters

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

- Input parameters

````json
{
"namespaceCode": "examplePermissionNamespace", "userId": "63721xxxxxxxxxxxxdde14a3", "resourceCode": "exampleArrResourceCode" } ``` - Outtake ```json { "statusCode": 200, "message": "Operation successful", "apiCode": 20001, "data": { "namespaceCode": "exampleNamespaceCode", "resourceCode": "exampleArrResourceCode", "resourceType": "TREE", "treeResourceAuthAction": { "nodeAuthActionList": [ { "code": "tree11", "name": "tree11", "value": "test11Value", "actions": ["get", "delete"], "children": [ { "code": "tree111", "name": "tree111", "value": "test111Value", "actions": ["update", "read"]
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
````

## Method name

`ManagementClient.getUserResourceStruct`

## Request parameters

Type: `GetUserResourceStructDto`

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| namespaceCode | string | Yes                                          | -                                           | Permission space Code                      | `examplePermissionNamespace`                |
| resourceCode  | string | yes                                          | -                                           | Resource Code                              | `exampleResourceCode`                       |
| userId        | string | yes                                          | -                                           | User ID                                    | `6301ceaxxxxxxxxxxx27478`                   |

## Sample code

```ts
import { ManagementClient, Models } from "authing-node-sdk";

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
  const result = await managementClient.getUserResourceStruct({
    // Replace user ID
    namespaceCode: "examplePermissionNamespace",
    resourceCode: "arrResourceCode",
    userId: "63721xxxxxxxxxxxxdde14a3",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetUserResourceStructRespDto`

| Name       | Type                                                                     | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string                                                                   | Description                                                                                                  |
| apiCode    | number                                                                   | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                   | Request ID. It will be returned when the request fails.                                                      |
| data       | <a href="#GetUserResourceStructDataDto">GetUserResourceStructDataDto</a> | Response data                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "namespaceCode": "namespaceCode",
    "resourceCode": "resourceCode",
    "resourceType": "TREE",
    "treeResourceAuthAction": {
      "nodeAuthActionList": [
        {
          "code": "123",
          "name": "Tree data resource",
          "value": "Sample tree resource policy node",
          "actions": "read",
          "children": [
            {
              "code": "code1",
              "name": "Child node 1",
              "value": "Child node value",
              "actions": ["Create"],
              "children": [
                {
                  "code": "code2",
                  "name": "Child node 2",
                  "value": "Child node 2 value",
                  "actions": ["get"]
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

## Data structure

### <a id="GetUserResourceStructDataDto"></a> GetUserResourceStructDataDto

| Name                   | Type                   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                           | <div style="width:200px">Sample value</div> |
| ---------------------- | ---------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| namespaceCode          | string                 | Yes                                           | Permission space code                                                                                                                                                                                                                                                                                                                                                                                                | `namespaceCode`                             |
| resourceCode           | string                 | Yes                                           | Resource code                                                                                                                                                                                                                                                                                                                                                                                                        | `resourceCode`                              |
| resourceType           | string                 | Yes                                           | Data resource type, nested type, <a href="#ResourceType">ResourceType</a>. Currently, three types of structures are supported: tree structure (TREE), string (STRING), and array (ARRAY). Different structures are returned according to different types. <br>- `STRING`: string type result StrResourceAuthAction. <br>- `ARRAY`: array type ArrResourceAuthAction. <br>- `TREE`: tree type TreeResourceAuthAction. |                                             |
| strResourceAuthAction  | StrResourceAuthAction  | No                                            | String resource authorization structure, nested type: <a href="#StrResourceAuthAction">StrResourceAuthAction</a>.                                                                                                                                                                                                                                                                                                    |                                             |
| arrResourceAuthAction  | ArrResourceAuthAction  | No                                            | Array resource authorization structure, nested type: <a href="#ArrResourceAuthAction">ArrResourceAuthAction</a>.                                                                                                                                                                                                                                                                                                     |                                             |
| treeResourceAuthAction | TreeResourceAuthAction | No                                            | Tree resource authorization structure, nested type: <a href="#TreeResourceAuthAction">TreeResourceAuthAction</a>. Tree resource authorization                                                                                                                                                                                                                                                                        |                                             |

### <a id="ResourceType"></a> ResourceType

| Name   | Type | Description |
| :----- | :--- | ----------- |
| STRING | enum | String type |
| ARRAY  | enum | Array type  |
| TREE   | enum | Tree type   |

### <a id="StrResourceAuthAction"></a> StrResourceAuthAction

| Name    | Type     | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>              | <div style="width:200px">Sample value</div> |
| ------- | -------- | --------------------------------------------- | ------------------------------------------------------- | ------------------------------------------- |
| value   | string[] | Yes                                           | Value of a string data resource                         | `resourceValue`                             |
| actions | array    | Yes                                           | List of permission operations for string data resources | `["read","get"]`                            |

### <a id="ArrResourceAuthAction"></a> ArrResourceAuthAction

| Name      | Type     | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>             | <div style="width:200px">Sample value</div> |
| --------- | -------- | -------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| values ​​ | string[] | Yes                                    | Values ​​of array data resources                       | `["resourceValue1","resourceValue2"]`       |
| actions   | string[] | Yes                                    | List of permission operations for array data resources | `["read","get"]`                            |

### <a id="TreeResourceAuthAction"></a> TreeResourceAuthAction

| Name               | Type  | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Sample value</div> |
| ------------------ | ----- | --------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------- |
| nodeAuthActionList | array | Yes                                           | Tree structure node list, nested type: <a href="#TreeStructs">TreeStructs</a>. | -                                           |

### <a id="TreeStructs"></a> TreeStructs

| Name     | Type        | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                           | <div style="width:200px">Sample value</div>                                                                                                                                                                            |
| -------- | ----------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code     | string      | Yes                                           | Tree resource node Code, unique at the same level                                                                    | `123`                                                                                                                                                                                                                  |
| name     | string      | Yes                                           | Tree resource node name, unique at the same level                                                                    | `Data resource`                                                                                                                                                                                                        |
| value    | string      | No                                            | Tree resource node Value                                                                                             | `Sample resource policy node`                                                                                                                                                                                          |
| actions  | string[]    | Yes                                           | List of permission operations for tree data resource policy nodes                                                    | `read`                                                                                                                                                                                                                 |
| children | TreeStructs | No                                            | Child node data, child node data has a maximum of five levels, nesting type: <a href="#TreeStructs">TreeStructs</a>. | `[{"code":"code1","name":"child node 1","value":"child node value","enabled":false,"action":"create","children":[{"code":"code2","name":"child node 2","value":"child node 2 value","enabled":true,"action":"get"}]}]` |
