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

### Get user string and array resource permission example

- Input parameter

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "resources": ["strResourceCode1", "arrayResourceCode1"]
}
```

- Output parameter

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

### Example of getting user tree resource permissions

- Input parameters

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

- Output parameters

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

## Method name

`ManagementClient.getUserResourcePermissionList`

## Request parameters

| Name          | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                               | <div style="width:200px">Example value</div>                                                       |
| ------------- | -------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| resources     | string[] | yes                                          | -                                           | resource path list, **tree resources need to go to specific tree nodes** | `["strResourceCode","arrResourceCode","treeResourceCode/StructCode1/resourceStructChildrenCode1"]` |
| userId        | string   | yes                                          | -                                           | user ID                                                                  | `6301ceaxxxxxxxxx27478`                                                                            |
| namespaceCode | string   | yes                                          | -                                           | permission space Code                                                    | `examplePermissionNamespace`                                                                       |

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
  const result = await managementClient.getUserResourcePermissionList({
    // Replace user ID
    namespaceCode: "examplePermissionNamespace",
    userId: "63721xxxxxxxxxxxxdde14a3",
    resources: [
      "strResourceCode",
      "arrayResourceCode",
      "/treeResourceCode/structCode/resourceStructChildrenCode",
    ],
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetUserResourcePermissionListRespDto`

| Name       | Type                                                                                     | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                                   | Business status code. This status code can be used to determine whether the operation is successful. 200 indicates success.                                                                                                                                                                                                                    |
| message    | string                                                                                   | description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                                                   | Segmented error code, which can be used to get the specific error type (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                                   | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#GetUserResourcePermissionListDataDto">GetUserResourcePermissionListDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

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

## Data structure

### <a id="GetUserResourcePermissionListDataDto"></a> GetUserResourcePermissionListDataDto

| Name           | Type  | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                               | <div style="width:200px">Sample value</div> |
| -------------- | ----- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| permissionList | array | Yes                                           | Permission list Nested type: <a href="#GetUserResourcePermissionList">GetUserResourcePermissionList</a>. |                                             |

### <a id="GetUserResourcePermissionList"></a> GetUserResourcePermissionList

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| namespaceCode | string | Yes                                    | Permission space code                      | `examplePermissionNamespace`                |
| actions       | array  | Yes                                    | Data resource permission operation list    | `["get","read","write","delete"]`           |
| resource      | string | Yes                                    | Resource path                              | `treeResourceCode1`                         |
