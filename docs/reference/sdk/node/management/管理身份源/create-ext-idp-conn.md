# Create a new connection under an existing identity source

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Create a new connection under an existing identity source, you can set the identity source icon, whether to support login only, etc.

## Method name

`ManagementClient.createExtIdpConn`

## Request parameters

| Name        | Type    | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>          | <div style="width:200px">Sample value</div>                                                           |
| ----------- | ------- | --------------------------------------------- | ------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| fields      | object  | Yes                                           | -                                           | Custom configuration information for the connection | `{"clientId":"clientId on the identity source","clientSecret":"clientSecret on the identity source"}` |
| displayName | string  | Yes                                           | -                                           | Display name of the connection on the login page    | `Login page`                                                                                          |
| identifier  | string  | Yes                                           | -                                           | Identity source connection identifier               | `60b49eb83fd80adb96f26e68`                                                                            |
| type        | string  | yes                                           | -                                           | Identity source connection type                     | `ad`                                                                                                  |
| extIdpId    | string  | yes                                           | -                                           | Identity source connection ID                       | `60b49eb83fd80adb96f26e68`                                                                            |
| loginOnly   | boolean | no                                            | -                                           | Whether to support login only                       |                                                                                                       |
| logo        | string  | no                                            | -                                           | Identity source icon                                | `https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png`                 |
| tenantId    | string  | no                                            | -                                           | Tenant ID                                           | `60b49eb83fd80adb96f26e68`                                                                            |

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
  const result = await managementClient.createExtIdpConn({
    extIdpId: "6229ffaxxxxxxxxcade3e3d9",
    type: Models.CreateExtIdpConnDto.type.AD,
    identifier: "60b49eb83xxxxxxb96f26e68",
    loginOnly: false,
    logo: "https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png",
    displayName: "Login page",
    fields: {
      clientId: "clientId on the identity source",
      clientSecret: "clientSecret on the identity source",
    },
  });

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `ExtIdpConnDetailSingleRespDto`

| Name       | Type                                             | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                           | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                        |
| message    | string                                           | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number                                           | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |
| data       | <a href="#ExtIdpConnDetail">ExtIdpConnDetail</a> | Response data                                                                                                                                                                                                                                                                                                                                       |

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
    "displayName": "Login Page",
    "loginOnly": true,
    "associationMode": "challenge",
    "challengeBindingMethods": "[\"email-password\"]"
  }
}
```

## Data Structure

### <a id="ExtIdpConnDetail"></a> ExtIdpConnDetail

| Name                    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                       | <div style="width:200px">Sample value</div>                                           |
| ----------------------- | ------- | -------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| id                      | string  | Yes                                          | Identity source connection id                                    | `60b49eb83fd80adb96f26e68`                                                            |
| type                    | string  | yes                                          | Identity source connection type                                  | oidc                                                                                  |
| extIdpId                | string  | yes                                          | Identity source ID                                               | `6318061be13c0ce6a64093e5`                                                            |
| logo                    | string  | yes                                          | Identity source connection icon                                  | `https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png` |
| identifier              | string  | no                                           | Identity source connection identifier                            | `60b49eb83fd80adb96f26e68`                                                            |
| displayName             | string  | no                                           | Display name of the identity source connection on the login page | `LoginPage`                                                                           |
| loginOnly               | boolean | yes                                          | Whether to support only login                                    | `true`                                                                                |
| associationMode         | string  | yes                                          | Account association mode                                         | none                                                                                  |
| challengeBindingMethods | array   | yes                                          | Account binding method                                           | `["email-password"]`                                                                  |
