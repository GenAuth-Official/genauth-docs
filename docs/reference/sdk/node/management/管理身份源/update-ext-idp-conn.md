# Update identity source connection

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Update the identity source connection, you can set the identity source icon, whether to support login only, etc.

## Method name

`ManagementClient.updateExtIdpConn`

## Request parameters

| Name        | Type    | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                              | <div style="width:200px">Example value</div>                                          |
| ----------- | ------- | -------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| fields      | object  | Yes                                    | -                                           | Identity source connection custom parameters (incremental modification) | `{"clientId":"clientId"}`                                                             |
| displayName | string  | Yes                                    | -                                           | Identity source connection display name                                 | `exampleName`                                                                         |
| id          | string  | Yes                                    | -                                           | Identity source connection ID                                           | `60b49eb83fd80adb96f26e68`                                                            |
| logo        | string  | No                                     | -                                           | Icon for identity source connection                                     | `https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png` |
| loginOnly   | boolean | No                                     | -                                           | Whether to support login only                                           |                                                                                       |
| tenantId    | string  | No                                     | -                                           | Tenant ID                                                               | `60b49eb83fd80adb96f26e68`                                                            |

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
  const result = await managementClient.updateExtIdpConn({
    id: "60b49ebxxxxxxadb96f26e68",
    displayName: "exampleName",
    fields: {
      clientId: "clientId",
    },
    logo: "https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png",
    loginOnly: false,
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request Response

Type: `ExtIdpConnDetailSingleRespDto`

| Name       | Type                                             | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                   |
| message    | string                                           | Description                                                                                                                                                                                                                                                                                                                                    |
| apiCode    | number                                           | Segmented error code, which can be used to get the specific error type (successful requests are not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                   |
| data       | <a href="#ExtIdpConnDetail">ExtIdpConnDetail</a> | Response data                                                                                                                                                                                                                                                                                                                                  |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "id": "60b49eb83fd80adb96f26e68",
    "type": "default",
    "extIdpId": "6318061be13c0ce6a64093e5",
    "logo": "https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png",
    "identifier": "60b49eb83fd80adb96f26e68",
    "displayName": "Login page",
    "loginOnly": true,
    "associationMode": "challenge",
    "challengeBindingMethods": "[\"email-password\"]"
  }
}
```

## Data Structure

### <a id="ExtIdpConnDetail"></a> ExtIdpConnDetail

| Name                    | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                       | <div style="width:200px">Sample value</div>                                           |
| ----------------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| id                      | string  | Yes                                           | Identity source connection id                                    | `60b49eb83fd80adb96f26e68`                                                            |
| type                    | string  | Yes                                           | Identity source connection type                                  | oidc                                                                                  |
| extIdpId                | string  | Yes                                           | Identity source ID                                               | `6318061be13c0ce6a64093e5`                                                            |
| logo                    | string  | yes                                           | Identity source connection icon                                  | `https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png` |
| identifier              | string  | no                                            | Identity source connection identifier                            | `60b49eb83fd80adb96f26e68`                                                            |
| displayName             | string  | no                                            | Display name of the identity source connection on the login page | `Login page`                                                                          |
| loginOnly               | boolean | yes                                           | Whether to support only login                                    | `true`                                                                                |
| associationMode         | string  | yes                                           | Account association mode                                         | none                                                                                  |
| challengeBindingMethods | array   | yes                                           | Account binding method                                           | `["email-password"]`                                                                  |
