# Get the list of authorized resources

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is used to get the list of resources that the user is authorized to use.

## Method name

`ManagementClient.getAuthorizedResources`

## Request parameters

| Name         | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>      | <div style="width:200px">Sample value</div> |
| ------------ | ------ | -------------------------------------- | ------------------------------------------- | ----------------------------------------------- | ------------------------------------------- |
| namespace    | string | No                                     | -                                           | Code of the permission group (permission space) | `default`                                   |
| resourceType | string | No                                     | -                                           | Resource type, such as data, API, menu, button  |                                             |

## Sample code

```ts
import { AuthenticationClient, Models } from "authing-node-sdk";

const authenticationClient = new AuthenticationClient({
  // Need to be replaced with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
  // Please call the login interface to get access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.getAuthorizedResources({
    namespace: "default",
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `AuthorizedResourcePaginatedRespDto`

| Name       | Type                                                                   | Description                                                                                                  |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                 | Description                                                                                                  |
| apiCode    | number                                                                 | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                                 | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#AuthorizedResourcePagingDto">AuthorizedResourcePagingDto</a> | Response data                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
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
}
```

## Data structure

### <a id="AuthorizedResourcePagingDto"></a> AuthorizedResourcePagingDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                             | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| totalCount | number | Yes                                           | Total number of records                                                                |                                             |
| list       | array  | Yes                                           | Response data Nested type: <a href="#AuthorizedResourceDto">AuthorizedResourceDto</a>. |                                             |

### <a id="AuthorizedResourceDto"></a> AuthorizedResourceDto

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                    | <div style="width:200px">Sample value</div> |
| ------------- | ------ | --------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------- |
| resourceCode  | string | Yes                                           | Resource descriptor                                                           | `ecs:1`                                     |
| description   | string | No                                            | Resource description information                                              | `Server`                                    |
| condition     | array  | No                                            | Policy Condition nested type: <a href="#PolicyCondition">PolicyCondition</a>. |                                             |
| resourceType  | string | Yes                                           | Resource type                                                                 | DATA                                        |
| apiIdentifier | string | Yes                                           | API URL                                                                       | `/api/v1/example`                           |
| actions       | array  | yes                                           | List of authorized actions                                                    | `["ecs:Start","ecs:Stop"]`                  |
| effect        | string | yes                                           | Allow or deny                                                                 | ALLOW                                       |

### <a id="PolicyCondition"></a> PolicyCondition

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| param    | string | yes                                           | Condition Param                            | UserPoolId                                  |
| operator | string | yes                                           | Condition Operator                         | Bool                                        |
| value    | string | yes                                           | Condition Value                            | `1`                                         |
