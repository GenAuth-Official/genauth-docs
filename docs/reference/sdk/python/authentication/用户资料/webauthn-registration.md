# Get webauthn credential creation initialization parameters

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get webauthn credential creation initialization parameters. **This interface requires the user to be logged in**

## Method name

`AuthenticationClient.init_register_options`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |

## Request response

Type: `GetRegistrationOptionsRespDto`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code, which can be used to determine whether the operation is successful, 200 means success.                                                                                                                                                                                                                                 |
| message    | string                                                       | Description                                                                                                                                                                                                                                                                                                                                  |
| apiCode    | number                                                       | Segmented error code, which can be used to get the specific error type (successful request is not returned). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                 |
| data       | <a href="#RegistrationOptionsDto">RegistrationOptionsDto</a> | Response data                                                                                                                                                                                                                                                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "registrationOptions": {
      "excludeCredentials": {
        "type": "public-key"
      },
      "pubKeyCredParams": {
        "type": "public-key"
      },
      "rp": {
        "id": "example.com"
      },
      "timeout": "60000",
      "user": {
        "name": "zhangsan",
        "displayName": "xxx"
      }
    }
  }
}
```

## Data structure

### <a id="RegistrationOptionsDto"></a> RegistrationOptionsDto

| Name                | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                    | <div style="width:200px">Sample value</div> |
| ------------------- | ------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| registrationOptions |        | Yes                                           | Parameters for the authenticator to generate public key certificates Nested type: <a href="#PublicKeyCredentialCreationOptionsDto">PublicKeyCredentialCreationOptionsDto</a>. |                                             |
| ticket              | string | yes                                           | ticket needs to be returned and is used as the result of initiating verification to the server when creating the credential obtained from the authenticator                   |                                             |

### <a id="PublicKeyCredentialCreationOptionsDto"></a> PublicKeyCredentialCreationOptionsDto

| Name               | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                              | <div style="width:200px">Sample value</div> |
| ------------------ | ------ | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| challenge          | string | yes                                           | Challenge code, base64Url encoding                                                                                                                                                                                                      |                                             |
| excludeCredentials | array  | yes                                           | Used to identify the credentials to be excluded, which can prevent the same user from registering the same authenticator multiple times. Nested type: <a href="#PublicKeyCredentialDescriptorDto">PublicKeyCredentialDescriptorDto</a>. |                                             |
| pubKeyCredParams   | array  | Yes                                           | Algorithm list, indicating which signature algorithms the relying party accepts Nested type: <a href="#PublicKeyCredentialParametersDto">PublicKeyCredentialParametersDto</a>.                                                          |                                             |
| rp                 |        | Yes                                           | Relying party information Nested type: <a href="#PublicKeyCredentialRpEntityDto">PublicKeyCredentialRpEntityDto</a>.                                                                                                                    |                                             |
| timeout            | number | Yes                                           | Timeout (milliseconds)                                                                                                                                                                                                                  | `60000`                                     |
| user               |        | Yes                                           | User information Nested type: <a href="#PublicKeyCredentialUserEntityDto">PublicKeyCredentialUserEntityDto</a>.                                                                                                                         |                                             |

### <a id="PublicKeyCredentialDescriptorDto"></a> PublicKeyCredentialDescriptorDto

| name       | type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                        | <div style="width:200px">Sample value</div> |
| ---------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| id         | string | yes                                           | Allowed credential IDs                                                                                                                                                                                                                                                                                                                            |                                             |
| transports | array  | yes                                           | Authenticator communication method with the user agent required by the credential:<br>- `ble`: Authenticator that can be connected via Bluetooth<br>- `internal`: Authenticator built into the platform and cannot be removed<br>- `nfc`: Authenticator that can be connected via NFC<br>- `usb`: Authenticator that can be connected via USB<br> |                                             |
| type       | string | yes                                           | Fixed value, public-key                                                                                                                                                                                                                                                                                                                           | `public-key`                                |

### <a id="PublicKeyCredentialParametersDto"></a> PublicKeyCredentialParametersDto

| Name | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div>        | <div style="width:200px">Sample value</div> |
| ---- | ------ | --------------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| alg  | number | Yes                                           | A negative integer used to indicate the algorithm |                                             |
| type | string | Yes                                           | Fixed value, public-key                           | `public-key`                                |

### <a id="PublicKeyCredentialRpEntityDto"></a> PublicKeyCredentialRpEntityDto

| Name | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ---- | ------ | --------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| id   | string | Yes                                           | Relying party domain                       | `example.com`                                |
| name | string | Yes                                           | Relying party name                         |                                              |

### <a id="PublicKeyCredentialUserEntityDto"></a> PublicKeyCredentialUserEntityDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| id          | string | Yes                                          | User ID                                    |                                              |
| name        | string | Yes                                          | User name                                  | `zhangsan`                                   |
| displayName | string | Yes                                          | User name for display                      | `xxx`                                        |
