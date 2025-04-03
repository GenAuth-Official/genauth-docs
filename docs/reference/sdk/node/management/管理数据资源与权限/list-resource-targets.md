# Get a list of users who have certain resource permissions

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

## Description

When you need to get users who have permissions for a specified resource, you can use this interface.

## Scenario Example

If your business scenario is: you want to see the list of users who can edit the current document, then you can use this interface.

## Request example

### Get the list of authorized users for string and array resources

- Input parameters

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "actions": ["get", "update", "read"],
  "resources": ["strResourceCode1", "arrayResourceCode1"]
}
```

- Output parameters

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

### Example of getting a list of authorized users for a tree resource

- Input parameter

````json
{
"namespaceCode": "examplePermissionNamespace", "actions": ["get", "update", "delete"], "resources": [ "treeResourceCode1/StructCode1/resourceStructChildrenCode1", "treeResourceCode2/StructCode1/resourceStructChildrenCode1" ] } ``` - Outtake ```json { "statusCode": 200, "message": "Operation successful", "apiCode": 20001, "data": { "authUserList": [ { "resource": "treeResourceCode1/StructCode1/resourceStructChildrenCode1", "actionAuthList": [ { "userIds": ["63721xxxxxxxxxxxxdde14a3"], "action": "get" }, { "userIds": ["63721xxxxxxxxxxxxdde14a3"], "action": "update" }, { "userIds": ["63721xxxxxxxxxxxxdde14a3"], "action": "delete" } ] }, { "resource": "treeResourceCode2/StructCode1/resourceStructChildrenCode1", "actionAuthList": [ { "userIds": ["63721xxxxxxxxxxxxdde14a3"], "action": "get" }, { "userIds": ["63721xxxxxxxxxxxxdde14a3"], "action": "update" }, { "userIds": ["63721xxxxxxxxxxxxdde14a3"], "action": "delete" } ] }
]
}
}
````

## Method name

`ManagementClient.listResourceTargets`

## Request parameters

| Name          | Type     | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                        | <div style="width:200px">Sample value</div> |
| ------------- | -------- | -------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------- |
| resources     | string[] | Yes                                    | -                                           | Data resource path list to which the data policy belongs. Array length limit: 50. | `["treeResourceCode1"]`                     |
| actions       | string[] | Yes                                    | -                                           | Data resource permission operation list. Array length limit: 50.                  | `["get"]`                                   |
| namespaceCode | string   | yes                                    | -                                           | Permission space Code                                                             | `examplePermissionNamespace`                |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

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
  const result = await managementClient.listResourceTargets({
    namespaceCode: "examplePermissionNamespace",
    actions: ["get", "update", "delete"],
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

Type: `ListResourceTargetsRespDto`

| Name       | Type                                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                               | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                               | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                               | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                               | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#ListResourceTargetsDataDto">ListResourceTargetsDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

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

## Data structure

### <a id="ListResourceTargetsDataDto"></a> ListResourceTargetsDataDto

| Name         | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                 | <div style="width:200px">Sample value</div> |
| ------------ | ----- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| authUserList | array | Yes                                          | User authorization list Nested type: <a href="#ListResourceTargetsDtoResp">ListResourceTargetsDtoResp</a>. |                                             |

### <a id="ListResourceTargetsDtoResp"></a> ListResourceTargetsDtoResp

| Name           | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                 | <div style="width:200px">Sample value</div> |
| -------------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------- |
| resource       | string | Yes                                           | Resource path                                                                              | `treeResourceCode1`                         |
| actionAuthList | array  | Yes                                           | Data resource permission operation list Nested type: <a href="#ActionAuth">ActionAuth</a>. |                                             |

### <a id="ActionAuth"></a> ActionAuth

| Name    | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------ | -------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| userIds | array  | yes                                    | Data policy authorized user ID list        | `["63721xxxxxxxxxxxxdde14a3"]`              |
| action  | string | yes                                    | Data resource permission operation         | `get`                                       |
