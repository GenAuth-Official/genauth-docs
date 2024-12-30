# Get WebAuthn authentication request initialization parameters

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Get WebAuthn authentication request initialization parameters

## Method name

`AuthenticationClient.initAuthenticationOptions`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |

## Request response

Type: `GetAuthenticationOptionsRespDto`

| Name       | Type                                                             | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                           | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                           | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                           | Segmented error code, which can be used to get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#AuthenticationOptionsDto">AuthenticationOptionsDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "authenticationOptions": {
      "allowCredentials": {
        "type": "public-key"
      },
      "timeout": "60000"
    }
  }
}
```

## Data structure

### <a id="AuthenticationOptionsDto"></a> AuthenticationOptionsDto

| Name                  | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                     | <div style="width:200px">Example value</div> |
| --------------------- | ------ | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| authenticationOptions |        | Yes                                           | Authenticator authentication parameters Nested type: <a href="#PublicKeyCredentialRequestOptionsDto">PublicKeyCredentialRequestOptionsDto</a>. |                                              |
| ticket                | string | yes                                           | ticket needs to be returned to the server to verify the authentication result obtained from the authenticator                                  |                                              |

### <a id="PublicKeyCredentialRequestOptionsDto"></a> PublicKeyCredentialRequestOptionsDto

| Name             | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                             | <div style="width:200px">Sample value</div> |
| ---------------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| challenge        | string | yes                                           | Challenge code, base64Url encoding                                                                                                     |                                             |
| allowCredentials | array  | no                                            | Authenticator authentication parameters Nested type: <a href="#PublicKeyCredentialDescriptorDto">PublicKeyCredentialDescriptorDto</a>. |                                             |
| rpId             | string | yes                                           | Relying party ID, same as when registering the authenticator                                                                           |                                             |
| timeout          | number | yes                                           | Timeout (milliseconds)                                                                                                                 | `60000`                                     |

### <a id="PublicKeyCredentialDescriptorDto"></a> PublicKeyCredentialDescriptorDto

| Name       | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                   | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| id         | string | yes                                           | Allowed credential ID                                                                                                                                                                                                                                                                                                                                        |                                             |
| transports | array  | yes                                           | Communication method between the authenticator and the user agent required by the credential:<br>- `ble`: Authenticator that can be connected via Bluetooth<br>- `internal`: Authenticator built into the platform and cannot be removed<br>- `nfc`: Authenticator that can be connected via NFC<br>- `usb`: Authenticator that can be connected via USB<br> |                                             |
| type       | string | yes                                           | fixed value, public-key                                                                                                                                                                                                                                                                                                                                      | `public-key`                                |
