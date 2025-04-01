# Create a data policy (key points)

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

## Description

This interface is used to create a data policy. Through the data policy, you can bind a group of data resources and their specified operations together and jointly authorize them to the subject.

## Note

For ease of use, we provide a shortcut for the `permissions` field based on the path, such as:

- Array, string resources: permission space code/data resource code/data resource action (if it represents all operations, use `*` instead of action)

- Tree type resources: permission space code/data resource code/node code 1/node code 1_1/.../data resource action

## Request example

Suppose we want to authorize a developer, first create 3 data resources as follows:

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "Server",
  "resourceCode": "server_2023",
  "type": "STRING",
  "struct": "server_2023",
  "actions": ["read", "write"]
}
```

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "R&D Knowledge Base",
  "description": "",
  "resourceCode": "rd_document",
  "type": "STRING",
  "struct": "https://www.authing.com/rd_document",
  "actions": ["read", "write", "share"]
}
```

```json
{
"namespaceCode": "examplePermissionNamespace",
"resourceName": "R&D internal platform menu",
"description": "This is the internal platform menu used by R&D",
"resourceCode": "rd_internal_platform",
"type": "TREE",
"struct": [
{
"name": "Deployment",
"code": "deploy",
"children": [
{
"name": "Production environment",
"code": "prod"
},
{
"name": "Test environment",
"code": "test"
}
]
},
{
"name": "Database",
"code": "db"
"children": [
{
"name": "Query",
"code": "query"
},
{
"name": "Export",
"code": "export"
}
]
}
],
"actions": ["access", "execute"]
}
```

We assign a server: server_2023 to him, on which he can perform any operation, and he can read and edit the R&D knowledge base. Finally, he can deploy the test environment in the R&D internal platform, but he cannot export database data.

```json
{
  "policyName": "Developer Policy",
  "description": "This is an example data policy",
  "statementList": [
    {
      "effect": "ALLOW",
      "permissions": [
        "examplePermissionNamespaceCode/server_2023/*",
        "examplePermissionNamespaceCode/rd_document/read",
        "examplePermissionNamespaceCode/rd_document/write",
        "examplePermissionNamespaceCode/rd_internal_platform/deploy/test/execute"
      ]
    },
    {
      "effect": "DENY",
      "permissions": [
        "examplePermissionNamespaceCode/rd_internal_platform/db/export/execute"
      ]
    }
  ]
}
```

## Method name

`ManagementClient.createDataPolicy`

## Request parameters

| Name          | Type                                                                   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                              | <div style="width:200px">Sample value</div> |
| ------------- | ---------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------- |
| statementList | <a href="#DataStatementPermissionDto">DataStatementPermissionDto[]</a> | Yes                                          | -                                           | Data permission list, data resource permission list under policy Array length limit: 5. |                                             |
| policyName    | string                                                                 | yes                                          | -                                           | Data policy name, unique to the user pool                                               | `Sample data policy name`                   |
| description   | string                                                                 | no                                           | -                                           | Data policy description                                                                 | `Sample data policy description`            |

## Sample code

```ts
import { ManagementClient, Models } from "@genauth/nodejs";

// Initialize ManagementClient
const managementClient = new ManagementClient({
  // Need to be replaced with your GenAuth Access Key ID
  accessKeyId: "GEN_AUTH_ACCESS_KEY_ID",
  // Need to be replaced with your GenAuth Access Key Secret
  accessKeySecret: "GEN_AUTH_ACCESS_KEY_SECRET",
  // If it is a privately deployed customer, you need to set the GenAuth service domain name
  // host: 'https://api.your-authing-service.com'
});

(async () => {
  const result = await managementClient.createDataPolicy({
    policyName: "Sample data policy name",
    statementList: [
      {
        effect: DataStatementPermissionDto.effect.ALLOW,
        permissions: ["namespaceCode/treeResourceCode/path/action"],
      },
    ],
    description: "Sample data policy description",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `CreateDataPolicyResponseDto`

| Name       | Type                                                           | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                         | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                                         | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                                         | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                         | Request ID. This is returned when the request fails.                                                                                                                                                                                                                                                                                           |
| data       | <a href="#CreateDataPolicyRespDto">CreateDataPolicyRespDto</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "policyId": "60b49xxxxxxxxxxxxxxx6e68",
    "policyName": "Sample data policy name",
    "description": "Sample data policy description",
    "createdAt": "2022-07-03T03:20:30.000Z",
    "updatedAt": "2022-07-03T03:20:30.000Z"
  }
}
```

## Data structure

### <a id="DataStatementPermissionDto"></a> DataStatementPermissionDto

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                      | <div style="width:200px">Sample value</div>                                                                                         |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| effect      | string | Yes                                           | Data resource permission operation: ALLOW (allow)/DENY (deny)                   | DENY                                                                                                                                |
| permissions | array  | Yes                                           | Resource permission list, string data resource and array data resource, no path | `["namespaceCode/stringResourceCode/action","namespaceCode/arrayResourceCode/action","namespaceCode/treeResourceCode/path/action"]` |

### <a id="CreateDataPolicyRespDto"></a> CreateDataPolicyRespDto

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| policyId    | string | Yes                                           | Data policy ID                             | `60b49xxxxxxxxxxxxxxx6e68`                  |
| policyName  | string | Yes                                           | Data policy name, unique to the user pool  | `Sample data policy name`                   |
| description | string | No                                            | Data policy description                    | `Sample data policy description`            |
| createdAt   | string | Yes                                           | Data policy creation time                  | `2022-07-03T03:20:30.000Z`                  |
| updatedAt   | string | Yes                                           | Data policy update time                    | `2022-07-03T03:20:30.000Z`                  |
