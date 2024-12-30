# Get apps with access permissions

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get apps with access permissions

## Method name

`ManagementClient.getAccessibleApps`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

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

  const result = await authenticationClient.getAccessibleApps();

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `GetAccessibleAppsRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. Returned when the request fails.                                                                 |
| data       | array  | response data                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "appId": "xxx",
    "appName": "Sample application",
    "appLoginUrl": "https://example.genauth.ai/login",
    "appLogo": "https://files.authing.co/authing-console/default-app-logo.png",
    "active": true
  }
}
```

## Data structure

### <a id="AccessibleAppsDto"></a> AccessibleAppsDto

| Name        | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>                     |
| ----------- | ------- | -------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| appId       | string  | yes                                          | Application ID                             | `xxx`                                                           |
| appName     | string  | yes                                          | Application name                           | `Sample application`                                            |
| appLoginUrl | string  | yes                                          | Application login address                  | `https://example.genauth.ai/login`                              |
| appLogo     | string  | yes                                          | Application Logo                           | `https://files.authing.co/authing-console/default-app-logo.png` |
| active      | boolean | yes                                          | Is the current login state                 | `true`                                                          |
