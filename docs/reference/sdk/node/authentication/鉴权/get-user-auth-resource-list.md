# Get the list of resources authorized by the user in the logged-in application

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the list of resource permissions specified by the user. The user obtains the list of resources owned by the user in a certain application.

## Method name

`AuthenticationClient.getUserAuthorizedResourcesList`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |

## Sample code

```ts
import { AuthenticationClient, Models } from "authing-node-sdk";

const authenticationClient = new AuthenticationClient({
  // Need to replace with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
  // Please call the login interface to get access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.getUserAuthorizedResourcesList();

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetUserAuthResourceListRespDto`

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                       | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                       | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#GetUserAuthResourceListDataDto">GetUserAuthResourceListDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "userPermissionList": {
      "userId": "6301cexxxxxxxxxxxxxxxxx78",
      "namespaceCode": "examplePermissionNamespace",
      "resourceList": {
        "resourceCode": "resourceCode",
        "resourceType": "STRING",
        "strAuthorize": {
          "value": "Sample string resource Value",
          "actions": "[\"read\",\"get\"]"
        },
        "arrAuthorize": {
          "values": "[\"value0\",\"value1\"]",
          "actions": "[\"read\",\"get\"]"
        },
        "treeAuthorize": {
          "authList": {
            "nodePath": "/treeCode1/treeCode11",
            "nodeName": "Sample tree resource node name",
            "nodeActions": "[\"read\",\"get\"]",
            "nodeValue": "Sample tree resource node Value"
          }
        }
      }
    }
  }
}
```

## Data structure

### <a id="GetUserAuthResourceListDataDto"></a> GetUserAuthResourceListDataDto

| Name               | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                        | <div style="width:200px">Sample value</div> |
| ------------------ | ----- | -------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| userPermissionList | array | Yes                                          | User permission list Nested type: <a href="#UserAuthResourceListDto">UserAuthResourceListDto</a>. |                                             |

### <a id="UserAuthResourceListDto"></a> UserAuthResourceListDto

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                      | <div style="width:200px">Example value</div> |
| ------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| userId        | string | Yes                                           | User ID authorized by data policy                                                                                               | `6301cexxxxxxxxxxxxxxxxx78`                  |
| namespaceCode | string | Yes                                           | Permission space authorized by data policy Code                                                                                 | `examplePermissionNamespace`                 |
| resourceList  | array  | No                                            | List of all data policy resources of the user under the permission space Nested type: <a href="#OpenResource">OpenResource</a>. |                                              |

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

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
|
