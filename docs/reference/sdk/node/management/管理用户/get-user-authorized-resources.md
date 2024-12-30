# Get all resources authorized by the user

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

Get all resources authorized by the user through the user ID. You can choose to specify the user ID type, etc. The resources authorized by the user are the collections of the user's own grants, inherited by groups, inherited by roles, and inherited by organizations.

## Method name

`ManagementClient.getUserAuthorizedResources`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------ | ------ | -------------------------------------- | ------------------------------------ | ---------------------------- ... | `6229ffaxxxxxxxxcade3e3d9` |
| userIdType | string | No | user_id | User ID type, the default value is `user_id`, the optional values ​​are:<br>- `user_id`: GenAuth user ID, such as `6319a1504f3xxxxf214dd5b7`<br>- `phone`: User phone number<br>- `email`: User email<br>- `username`: User name<br>- `external_id`: User ID in the external system, corresponding to the `externalId` field of GenAuth user information<br>- `identity`: User's external identity source information, the format is `<extIdpId>:<userIdInIdp>`, where `<extIdpId>` is the ID of the GenAuth identity source, and `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example value: `62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`. <br>- `sync_relation`: User's external identity source information, in the format of `<provier>:<userIdInIdp>`, where `<provier>` is the type of sync identity source, such as wechatwork, lark; `<userIdInIdp>` is the ID of the user in the external identity source. <br>Example value: `lark:ou_8bae746eac07cd2564654140d2a9ac61`. <br> | `user_id` |
| namespace | string | No | - | Code of the permission group (permission space). If not passed, the default permission group will be obtained. | `default` |
| resourceType | string | no | - | Resource type, e.g. data, API, menu, button| |

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
  const result = await managementClient.getUserAuthorizedResources({
    // Replace user ID
    userId: "6229ffaxxxxxxxxcade3e3d9",
    userIdType: Models.ResignUserReqDto.userIdType.USER_ID,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `AuthorizedResourcePaginatedRespDto`

| Name       | Type                                                                   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                 | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                 | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                 | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#AuthorizedResourcePagingDto">AuthorizedResourcePagingDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

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

| Name          | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                    | <div style="width:200px">Example value</div> |
| ------------- | ------ | --------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------- |
| resourceCode  | string | yes                                           | Resource descriptor                                                           | `ecs:1`                                      |
| description   | string | no                                            | Resource description information                                              | `server`                                     |
| condition     | array  | no                                            | Policy Condition Nested type: <a href="#PolicyCondition">PolicyCondition</a>. |                                              |
| resourceType  | string | yes                                           | Resource type                                                                 | DATA                                         |
| apiIdentifier | string | yes                                           | API URL                                                                       | `/api/v1/example`                            |
| actions       | array  | yes                                           | Authorized action list                                                        | `["ecs:Start","ecs:Stop"]`                   |
| effect        | string | yes                                           | Allow or deny                                                                 | ALLOW                                        |

### <a href="#PolicyCondition">PolicyCondition</a> |

| id="PolicyCondition"></a> PolicyCondition

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| param    | string | Yes                                           | Condition Param                            | UserPoolId                                  |
| operator | string | Yes                                           | Condition Operator                         | Bool                                        |
| value    | string | Yes                                           | Condition Value                            | `1`                                         |
