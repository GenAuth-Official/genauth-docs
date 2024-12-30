# Get the structure list of external user authorized resources

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is mainly used to obtain the resource list authorized by external users, and obtain the authorization list of external user resources through the permission space Code, external user id, and resource Code.

### Get user authorization string data resource example

- Input parameter

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "externalId": "63721xxxxxxxxxxxxdde14a3",
  "resourceCode": "exampleStrResourceCode"
}
```

- Output parameter

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

- Input parameter

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "externalId": "63721xxxxxxxxxxxxdde14a3",
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
"namespaceCode": "examplePermissionNamespace", "externalId": "63721xxxxxxxxxxxxdde14a3", "resourceCode": "exampleArrResourceCode" } ``` - Outtake ```json { "statusCode": 200, "message": "Operation successful", "apiCode": 20001, "data":{ "namespaceCode": "exampleNamespaceCode", "resourceCode": "exampleArrResourceCode", "resourceType": "TREE", "treeResourceAuthAction":{ "nodeAuthActionList":[{ "code": "tree11", "name": "tree11", "value": "test11Value", "actions": ["get","delete"], "children": [{ "code": "tree111", "name": "tree111", "value": "test111Value", "actions": ["update","read"]
}]
},{
"code": "tree22",
"name": "tree22",
"value": "test22Value",
"actions": ["get","delete"]
}]
}
}
}
````

## Method name

`ManagementClient.getExternalUserResourceStruct`

## Request parameters

Type: `GetExternalUserResourceStructDto`

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| namespaceCode | string | Yes                                          | -                                           | Permission space Code                      | `examplePermissionNamespace`                |
| resourceCode  | string | Yes                                          | -                                           | Resource Code                              | `exampleResourceCode`                       |
| externalId    | string | Yes                                          | -                                           | External user ID                           | `63721xxxxxxxxxxxxdde14a3`                  |

## Request response

Type: `GetExternalUserResourceStructRespDto`

| Name       | Type                                                                     | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                   | Description                                                                                                  |
| apiCode    | number                                                                   | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                   | Request ID. It will be returned when the request fails.                                                      |
| data       | <a href="#GetUserResourceStructDataDto">GetUserResourceStructDataDto</a> | Response data                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "namespaceCode": "namespaceCode",
    "resourceCode": "resourceCode",
    "permissionBo": {
      "resourceId": "resourceId",
      "resourceType": "TREE",
      "nodeAuthActionList": {
        "code": "123",
        "value": "Sample resource policy node",
        "name": "Data resource",
        "action": "read",
        "children": "[{\"code\":\"code1\",\"name\":\"Subnode 1\",\"value\":\"Subnode value\",\"enabled\":false,\"action\":\"Create\",\"children\":[{\"code\":\"code2\",\"name\":\"Subnode 2\",\"value\":\"Subnode 2 value\",\"enabled\":true,\"action\":\"Get\"}]}]"
      }
    }
  }
}
```

## Data structure

### <a id="GetExternalUserResourceStructDataDto"></a> GetExternalUserResourceStructDataDto

| Name                   | Type                   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                  | <div style="width:200px">Sample value</div> |
| ---------------------- | ---------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| namespaceCode          | string                 | Yes                                           | Permission space code                                                                                                                                                                                                                                                                                                                                                                       | `namespaceCode`                             |
| resourceCode           | string                 | Yes                                           | Resource code                                                                                                                                                                                                                                                                                                                                                                               | `resourceCode`                              |
| resourceType           | string                 | Yes                                           | Data resource type, nested type, <a href="#ResourceType">ResourceType</a>. Currently supports three types: tree structure (TREE), string (STRING), array (ARRAY), and returns different structures according to different types. <br>- `STRING`: string type result StrResourceAuthAction. <br>- `ARRAY`: array type ArrResourceAuthAction. <br>- `TREE`: tree type TreeResourceAuthAction. |                                             |
| strResourceAuthAction  | StrResourceAuthAction  | No                                            | String resource authorization structure, nested type: <a href="#StrResourceAuthAction">StrResourceAuthAction</a>.                                                                                                                                                                                                                                                                           |                                             |
| arrResourceAuthAction  | ArrResourceAuthAction  | No                                            | Array resource authorization structure, nested type: <a href="#ArrResourceAuthAction">ArrResourceAuthAction</a>.                                                                                                                                                                                                                                                                            |                                             |
| treeResourceAuthAction | TreeResourceAuthAction | No                                            | Tree resource authorization structure, nested type: <a href="#TreeResourceAuthAction">TreeResourceAuthAction</a>. Tree resource authorization                                                                                                                                                                                                                                               |                                             |

### <a id="ResourceType"></a> ResourceType

| Name   | Type | Description |
| :----- | :--- | ----------- |
| STRING | enum | String type |
| ARRAY  | enum | Array type  |
| TREE   | enum | Tree type   |

### <a id="StrResourceAuthAction"></a> StrResourceAuthAction

| Name    | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| ------- | ------ | --------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| value   | string | Yes                                           | Value of a string data resource                          | `resourceValue`                             |
| actions | array  | Yes                                           | List of permission operations for a string data resource | `["read","get"]`                            |

### <a id="ArrResourceAuthAction"></a> ArrResourceAuthAction

| Name      | Type  | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>      | <div style="width:200px">Sample value</div> |
| --------- | ----- | --------------------------------------------- | ----------------------------------------------- | ------------------------------------------- |
| values ​​ | array | Yes                                           | Array data resource's Values ​​                 | `["resourceValue1","resourceValue2"]`       |
| actions   | array | Yes                                           | Array data resource's permission operation list | `["read","get"]`                            |

### <a id="TreeResourceAuthAction"></a> TreeResourceAuthAction

| Name               | Type  | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Sample value</div> |
| ------------------ | ----- | --------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------- |
| nodeAuthActionList | array | Yes                                           | Tree structure node list, nested type: <a href="#TreeStructs">TreeStructs</a>. | -                                           |

### <a id="TreeStructs"></a> TreeStructs

| Name     | Type        | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                           | <div style="width:200px">Sample value</div>                                                                                                                                                                            |
| -------- | ----------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code     | string      | yes                                          | Tree resource node Code, unique in the same level                                                                    | `123`                                                                                                                                                                                                                  |
| name     | string      | yes                                          | Tree resource node name, unique in the same level                                                                    | `Data Resource`                                                                                                                                                                                                        |
| value    | string      | no                                           | Tree resource node Value                                                                                             | `Sample Resource Policy Node`                                                                                                                                                                                          |
| actions  | array       | yes                                          | Permission operation list of tree data resource policy node                                                          | `read`                                                                                                                                                                                                                 |
| children | TreeStructs | no                                           | Child node data, child node data has a maximum of five levels, nesting type: <a href="#TreeStructs">TreeStructs</a>. | `[{"code":"code1","name":"child node 1","value":"child node value","enabled":false,"action":"create","children":[{"code":"code2","name":"child node 2","value":"child node 2 value","enabled":true,"action":"get"}]}]` |
