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

`ManagementClient.create_ext_idp_conn`

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

## Request Response

Type: `ExtIdpConnDetailSingleRespDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ---- | ------------------------------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                 |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |     | data | <a href="#ExtIdpConnDetail">ExtIdpConnDetail</a> | response data | Example results: `json { "statusCode": 200, "message": "Success", "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c", "data": { "id": "60b49eb83fd80adb96f26e68", "type": "default", "extIdpId": "6318061be13c0ce6a64093e5", "logo": "https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png", "identifier": "60b49eb83fd80adb96f26e68", "displayName": "Login page", "loginOnly": true, "associationMode": "challenge", "challengeBindingMethods": "[\"email-password\"]" } } ` |

## Data Structure

### <a id="ExtIdpConnDetail"></a> ExtIdpConnDetail

| Name                    | Type    | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                       | <div style="width:200px">Sample value</div>                                           |
| ----------------------- | ------- | --------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| id                      | string  | Yes                                           | Identity source connection id                                    | `60b49eb83fd80adb96f26e68`                                                            |
| type                    | string  | Yes                                           | Identity source connection type                                  | oidc                                                                                  |
| extIdpId                | string  | Yes                                           | Identity source ID                                               | `6318061be13c0ce6a64093e5`                                                            |
| logo                    | string  | Yes                                           | Identity source connection icon                                  | `https://files.authing.co/authing-console/social-connections/icon_xiaochengxu@2x.png` |
| identifier              | string  | No                                            | Identity source connection identifier                            | `60b49eb83fd80adb96f26e68`                                                            |
| displayName             | string  | No                                            | Display name of the identity source connection on the login page | `LoginPage`                                                                           |
| loginOnly               | boolean | Yes                                           | Whether to support only login                                    | `true`                                                                                |
| associationMode         | string  | Yes                                           | Account association mode                                         | none                                                                                  |
| challengeBindingMethods | array   | Yes                                           | Account binding method                                           | `["email-password"]`                                                                  |
