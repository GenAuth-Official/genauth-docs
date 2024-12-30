# Array type resource authentication

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Array type resource authentication, supports users to determine the permissions of one or more array resources

## Method name

`ManagementClient.checkPermissionByArrayResource`

## Request parameters

| Name      | Type     | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                             | <div style="width:200px">Example value</div> |
| --------- | -------- | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------- |
| resources | string[] | Yes                                          | -                                           | Data resource path list,                                               | `["exampleResource"]`                        |
| action    | string   | yes                                          | -                                           | Data resource permission operation, read, get, write and other actions | `get`                                        |

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

  const result = await authenticationClient.checkPermissionByArrayResource({
    action: "get",
    resources: ["arrayExampleResourceCode1", "arrayExampleResourceCode2"],
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `CheckResourcePermissionsRespDto`

| Name       | Type                                                                         | Description                                                                                                  |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                                       | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                                       | Description                                                                                                  |
| apiCode    | number                                                                       | Segmented error code, which can be used to get the specific error type.                                      |
| data       | <a href="#CheckResourcePermissionDataDto">CheckResourcePermissionDataDto</a> | Response data                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "apiCode": 20001,
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

| Name            | Type  | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                   | <div style="width:200px">Sample value</div> |
| --------------- | ----- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| checkResultList | array | Yes                                          | Check result list Nested type: <a href="#CheckResourcePermissionRespDto">CheckResourcePermissionRespDto</a>. |                                             |

### <a id="CheckResourcePermissionRespDto"></a> CheckResourcePermissionRespDto

| Name          | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                     | <div style="width:200px">Example value</div> |
| ------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| namespaceCode | string  | Yes                                           | Permission space Code                                                                          | `examplePermissionNamespace`                 |
| action        | string  | Yes                                           | Data resource permission operation                                                             | `get`                                        |
| resource      | string  | Yes                                           | Resource path                                                                                  | `exampleResource`                            |
| enabled       | boolean | Yes                                           | Whether the user has a certain operation on the data resource under a certain permission space | `true`                                       |
