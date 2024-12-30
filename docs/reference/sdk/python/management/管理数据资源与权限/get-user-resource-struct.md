# Get the structure list of user authorized resources

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is mainly used to obtain the user authorized resource list, and obtain the user resource authorization list through the permission space Code, user id, and resource Code.

### Example

- Input parameter

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "resourceCode": "exampleResourceCode"
}
```

- Output parameter

```json
{
  "statusCode": 200,
  "message": "Success",
  "apiCode": 20001,
  "data": {
    "namespaceCode": "exampleNamespaceCode",
    "resourceCode": "exampleResourceCode",
    "permissionBo": {
      "resourceId": "63xxxxxxxxxxxxx999",
      "resourceType": "TREE",
      "nodeAuthActionList": [
        {
          "name": "1",
          "code": "1",
          "children": [
            {
              "name": "1-1",
              "code": "1-1",
              "children": [],
              "actions": ["read", "get"]
            }
          ],
          "actions": ["read"]
        },
        {
          "name": "2",
          "code": "2",
          "children": [
            {
              "name": "2-1",
              "code": "2-1",
              "actions": ["read"]
            }
          ],
          "actions": ["get"]
        }
      ]
    }
  }
}
```

## Method name

`ManagementClient.get_user_resource_struct`

## Request parameters

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ------------- | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| resourceCode  | string | Yes                                    | -                                           | Resource Code                              | `exampleResourceCode`                        |
| userId        | string | Yes                                    | -                                           | User ID                                    | `6301ceaxxxxxxxxxxx27478`                    |
| namespaceCode | string | Yes                                    | -                                           | Permission space Code                      | `examplePermissionNamespace`                 |

## Request Response

Type: `GetUserResourceStructRespDto`

| Name       | Type                                                                     | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                   | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                   | Description                                                                                                  |
| apiCode    | number                                                                   | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#GetUserResourceStructDataDto">GetUserResourceStructDataDto</a> | Response data                                                                                                |

Example results:

```json
{
  "statusCode": 200,
  "message": "Success",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "namespaceCode": "namespaceCode",
    "resourceCode": "resourceCode",
    "permissionBo": {
      "resourceId": "resourceId",
      "resourceType": "TREE",
      "nodeAuthActionList": {
        "code": "123",
        "value": "Sample Resource Policy Node",
        "name": "Data Resource",
        "action": "read",
        "children": "[{\"code\":\"code1\",\"name\":\"Subnode 1\",\"value\":\"Subnode value\",\"enabled\":false,\"action\":\"Create\",\"children\":[{\"code\":\"code2\",\"name\":\"Subnode 2\",\"value\":\"Subnode 2 value\",\"enabled\":true,\"action\":\"Get\"}]}]"
      }
    }
  }
}
```

## Data Structure

### <a id="GetUserResourceStructDataDto"></a> GetUserResourceStructDataDto

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                               | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| namespaceCode | string | Yes                                    | Permission space code                                                                                    | `namespaceCode`                             |
| resourceCode  | string | Yes                                    | Resource code                                                                                            | `resourceCode`                              |
| permissionBo  |        | Yes                                    | Data resource permission operation list Nested type: <a href="#TreePermissionDto">TreePermissionDto</a>. |                                             |

### <a id="TreePermissionDto"></a> TreePermissionDto

| Name               | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                        | <div style="width:200px">Sample value</div> |
| ------------------ | ------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| resourceId         | string | Yes                                           | Resource id                                                                                                       | `resourceId`                                |
| resourceType       | string | Yes                                           | Resource type, STRING/ARRAY/TREE                                                                                  | `TREE`                                      |
| nodeAuthActionList | array  | Yes                                           | Tree structure node list Nested type: <a href="#DataResourcePolicyTreeStructs">DataResourcePolicyTreeStructs</a>. |                                             |

### <a id="DataResourcePolicyTreeStructs"></a> DataResourcePolicyTreeStructs

| Name     | Type    | <div style="width:80px">Is this field required?</div> | <div style="width:300px">Description</div>                    | <div style="width:200px">Sample value</div>                                                                                                                                                                            |
| -------- | ------- | ----------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code     | string  | yes                                                   | Data resource policy node Code, unique in the same level      | `123`                                                                                                                                                                                                                  |
| value    | string  | no                                                    | Data resource policy node Value                               | `Sample resource policy node`                                                                                                                                                                                          |
| name     | string  | yes                                                   | Data resource node name, unique in the same level             | `Data resource`                                                                                                                                                                                                        |
| action   | string  | yes                                                   | Data resource policy node action                              | `read`                                                                                                                                                                                                                 |
| enabled  | boolean | yes                                                   | Whether the data resource policy node action is enabled       |                                                                                                                                                                                                                        |
| children | array   | no                                                    | Child node data, child node data has a maximum of five levels | `[{"code":"code1","name":"child node 1","value":"child node value","enabled":false,"action":"Create","children":[{"code":"code2","name":"child node 2","value":"child node 2 value","enabled":true,"action":"Get"}]}]` |
