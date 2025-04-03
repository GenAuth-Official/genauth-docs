# String type resource authentication

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

String type resource authentication, supports users to perform permission judgment on one or more string resources

## Method name

`AuthenticationClient.checkPermissionByStringResource`

## Request parameters

| Name      | Type     | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div>                             | <div style="width:200px"></div>Example value</div>    |
| --------- | -------- | -------------------------------------- | ------------- | ---------------------------------------------------------------------- | ----------------------------------------------------- |
| resources | string[] | Yes                                    | -             | String data resource path list,                                        | `["exampleStringResource1","exampleStringResource2"]` |
| action    | string   | Yes                                    | -             | Data resource permission operation, read, get, write and other actions | `get`                                                 |

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
  // Please call the login interface to get access_token first, and call the setAccessToken method to set access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.checkPermissionByStringResource({
    action: "get",
    resources: ["stringExampleResourceCode1", "stringExampleResourceCode2"],
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `CheckResourcePermissionsRespDto`

| Name       | Type                                                                         | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                                       | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                                       | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#CheckResourcePermissionDataDto">CheckResourcePermissionDataDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "checkResultList": {
      "namespaceCode": "examplePermissionNamespace",
      "action": "get",
      "resource": "exampleResource",
      "enabled": true
    }
  }
}
```

## Data structure

### <a id="CheckResourcePermissionDataDto"></a> CheckResourcePermissionDataDto

| Name            | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                   | <div style="width:200px">Example value</div> |
| --------------- | ----- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| checkResultList | array | Yes                                          | Check result list Nested type: <a href="#CheckResourcePermissionRespDto">CheckResourcePermissionRespDto</a>. |                                              |

### <a id="CheckResourcePermissionRespDto"></a> CheckResourcePermissionRespDto

| Name          | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                     | <div style="width:200px">Example value</div> |
| ------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| namespaceCode | string  | Yes                                           | Permission space Code                                                                          | `examplePermissionNamespace`                 |
| action        | string  | Yes                                           | Data resource permission operation                                                             | `get`                                        |
| resource      | string  | Yes                                           | Resource path                                                                                  | `exampleResource`                            |
| enabled       | boolean | Yes                                           | Whether the user has a certain operation on the data resource under a certain permission space | `true`                                       |
