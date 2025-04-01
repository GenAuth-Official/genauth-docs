# Get the structure list of resources authorized by the user under the logged-in application

<!--
Warning⚠️:
Do not modify this document directly, https://github.com/Authing/authing-docs-factory
Use this project for generation
-->

<LastUpdated />

Get the list of resources authorized by the user, the user gets the structure list authorized by a resource under a certain application, and returns the authorization list of the corresponding resource through different resource types.

## Method name

`AuthenticationClient.getUserAuthResourceStruct`

## Request parameters

Type: `GetUserAuthResourceStructDto`

| Name     | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example value</div> |
| -------- | ------ | -------------------------------------- | ------------- | ------------------------------------------ | -------------------------------------------------- |
| resource | string | Yes                                    | -             | Data resource Code                         | `"exampleResource"`                                |

## Sample code

```ts
import { AuthenticationClient, Models } from "@genauth/nodejs";

const authenticationClient = new AuthenticationClient({
  // Need to be replaced with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
  const user = await authenticationClient.signInByUsernamePassword(
    "Username",
    "Password"
  );
  // Please call the login interface to get access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken(user.data.accessToken);
  const result = await authenticationClient.getUserAuthResourceStruct({
    resource: "treeExampleResourceCode",
  });
  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetUserAuthResourceStructRespDto`

| Name       | Type                                                                             | Description                                                                                                  |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                           | Description                                                                                                  |
| apiCode    | number                                                                           | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                           | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#GetUserAuthResourceStructDataDto">GetUserAuthResourceStructDataDto</a> | Response data                                                                                                |

Sample result:

```json
{
"statusCode": 200,
"message": "Operation successful",
"apiCode": 0,
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
"actions": ["create"],
"children": [
{
"code": "code2",
"name": "Subnode 2",
"value": "Subnode 2 value",
"actions": ["get"]
}
]
}
]
}
]
}
}

```

## Data structure

### <a id="GetUserAuthResourceStructDataDto"></a> GetUserAuthResourceStructDataDto

| Name                   | Type                   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                  | <div style="width:200px">Sample value</div> |
| ---------------------- | ---------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| namespaceCode          | string                 | Yes                                          | Permission space Code                                                                                                                                                                                                                                                                                                                                                                       | `namespaceCode`                             |
| resourceCode           | string                 | Yes                                          | Data resource Code                                                                                                                                                                                                                                                                                                                                                                          | `resourceCode`                              |
| resourceType           | string                 | Yes                                          | Data resource type, nested type, <a href="#ResourceType">ResourceType</a>. Currently supports three types: tree structure (TREE), string (STRING), array (ARRAY), and returns different structures according to different types. <br>- `STRING`: string type result StrResourceAuthAction. <br>- `ARRAY`: array type ArrResourceAuthAction. <br>- `TREE`: tree type TreeResourceAuthAction. |                                             |
| strResourceAuthAction  | StrResourceAuthAction  | No                                           | String resource authorization structure, nested type: <a href="#StrResourceAuthAction">StrResourceAuthAction</a>.                                                                                                                                                                                                                                                                           |
| arrResourceAuthAction  | ArrResourceAuthAction  | No                                           | Array resource authorization structure, nested type: <a href="#ArrResourceAuthAction">ArrResourceAuthAction</a>.                                                                                                                                                                                                                                                                            |                                             |
| treeResourceAuthAction | TreeResourceAuthAction | No                                           | Tree resource authorization structure, nested type: <a href="#TreeResourceAuthAction">TreeResourceAuthAction</a>.                                                                                                                                                                                                                                                                           |

### <a id="ResourceType"></a> ResourceType

| Name   | Type | Description |
| :----- | :--- | ----------- |
| STRING | enum | String type |
| ARRAY  | enum | Array type  |
| TREE   | enum | Tree type   |

### <a id="StrResourceAuthAction"></a> StrResourceAuthAction

| Name    | Type     | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>               | <div style="width:200px">Sample value</div> |
| ------- | -------- | --------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- |
| value   | string   | Yes                                           | Value of a string data resource                          | `resourceValue`                             |
| actions | string[] | Yes                                           | List of permission operations for a string data resource | `["read","get"]`                            |

### <a id="ArrResourceAuthAction"></a> ArrResourceAuthAction

| Name      | Type     | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>      | <div style="width:200px">Sample value</div> |
| --------- | -------- | --------------------------------------------- | ----------------------------------------------- | ------------------------------------------- |
| values ​​ | string[] | Yes                                           | Array data resource's Values ​​                 | `["resourceValue1","resourceValue2"]`       |
| actions   | string[] | Yes                                           | Array data resource's permission operation list | `["read","get"]`                            |

### <a id="TreeResourceAuthAction"></a> TreeResourceAuthAction

| Name               | Type          | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                     | <div style="width:200px">Sample value</div> |
| ------------------ | ------------- | --------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------- |
| nodeAuthActionList | TreeStructs[] | Yes                                           | Tree structure node list, nested type: <a href="#TreeStructs">TreeStructs</a>. | -                                           |

### <a id="TreeStructs"></a> TreeStructs

| Name     | Type        | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                           | <div style="width:200px">Sample value</div>                                                                                                                                                                            |
| -------- | ----------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code     | string      | Yes                                           | Tree resource node Code, unique at the same level                                                                    | `123`                                                                                                                                                                                                                  |
| name     | string      | Yes                                           | Tree resource node name, unique at the same level                                                                    | `Data resource`                                                                                                                                                                                                        |
| value    | string      | No                                            | Tree resource node Value                                                                                             | `Sample resource policy node`                                                                                                                                                                                          |
| actions  | string[]    | Yes                                           | Permission operation list of tree data resource policy node                                                          | `read`                                                                                                                                                                                                                 |
| children | TreeStructs | No                                            | Child node data, child node data has a maximum of five levels, nesting type: <a href="#TreeStructs">TreeStructs</a>. | `[{"code":"code1","name":"child node 1","value":"child node value","enabled":false,"action":"create","children":[{"code":"code2","name":"child node 2","value":"child node 2 value","enabled":true,"action":"get"}]}]` |
