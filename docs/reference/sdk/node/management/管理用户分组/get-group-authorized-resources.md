# Get the list of resources authorized by the group

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get the list of resources authorized by the group through the group code, and filter by resource type and permission group code.

## Method name

`ManagementClient.getGroupAuthorizedResources`

## Request parameters

| Name         | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                        | <div style="width:200px">Sample value</div> |
| ------------ | ------ | -------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| code         | string | yes                                    | -                                           | Group code                                                                                        | `developer`                                 |
| namespace    | string | no                                     | -                                           | Code of the permission group (permission space). Do not pass to get the default permission group. | `default`                                   |
| resourceType | string | No                                     | -                                           | Resource Type                                                                                     |                                             |

## Sample Code

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
  const result = await managementClient.getGroupAuthorizedResources({
    code: "developer",
    namespace: "default",
    resourceType: "DATA",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `AuthorizedResourceListRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | array  | response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "resourceCode": "ecs:1",
    "description": "Server",
    "condition": {
      "param": "AppId",
      "operator": "StringEquals",
      "value": "1"
    },
    "resourceType": "API",
    "apiIdentifier": "/api/v1/example",
    "actions": "[\"ecs:Start\",\"ecs:Stop\"]",
    "effect": "ALLOW"
  }
}
```

## Data structure

### <a id="AuthorizedResourceDto"></a> AuthorizedResourceDto

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                    | <div style="width:200px">Sample value</div> |
| ------------- | ------ | -------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------- |
| resourceCode  | string | Yes                                    | Resource descriptor                                                           | `ecs:1`                                     |
| description   | string | No                                     | Resource description                                                          | `server`                                    |
| condition     | array  | No                                     | Policy Condition Nested type: <a href="#PolicyCondition">PolicyCondition</a>. |                                             |
| resourceType  | string | yes                                    | Resource type                                                                 | DATA                                        |
| apiIdentifier | string | yes                                    | API URL                                                                       | `/api/v1/example`                           |
| actions       | array  | yes                                    | List of authorized actions                                                    | `["ecs:Start","ecs:Stop"]`                  |
| effect        | string | yes                                    | Allow or deny                                                                 | ALLOW                                       |

### <a id="PolicyCondition"></a> PolicyCondition

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| param    | string | yes                                           | Condition Param                            | UserPoolId                                   |
| operator | string | yes                                           | Condition Operator                         | Bool                                         |
| value    | string | yes                                           | Condition Value                            | `1`                                          |
