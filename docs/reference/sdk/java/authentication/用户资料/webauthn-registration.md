# Get webauthn credential creation initialization parameters

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

Get webauthn credential creation initialization parameters. **This interface requires the user to be logged in**

## Method Name

`AuthenticationClient.initRegisterOptions`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------- | ------------------------------------------ | -------------------------------------------------- |

## Request Response

Type: `GetRegistrationOptionsRespDto`

| Name       | Type                                                         | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                       | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                     |
| message    | string                                                       | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number                                                       | Segment error code, through which you can get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                       | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | <a href="#RegistrationOptionsDto">RegistrationOptionsDto</a> | Response Data                                                                                                                                                                                                                                                                                                                               |

Example Results：

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
        "displayName": "Zhang San"
      }
    }
  }
}
```

## Data Structure

### <a id="RegistrationOptionsDto"></a> RegistrationOptionsDto

| Name                | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                    | <div style="width:200px">Example Value</div> |
| ------------------- | ------ | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| registrationOptions |        | Yes                                          | Parameters for the authenticator to generate public key certificates Nested Type: <a href="#PublicKeyCredentialCreationOptionsDto">PublicKeyCredentialCreationOptionsDto</a>. |                                              |
| ticket              | string | Yes                                          | Ticket needs to be returned, used as the result of initiating verification to the server when creating the credential obtained from the authenticator                         |                                              |

### <a id="PublicKeyCredentialCreationOptionsDto"></a> PublicKeyCredentialCreationOptionsDto

| Name               | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                             | <div style="width:200px">Example Value</div> |
| ------------------ | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| challenge          | string | Yes                                          | Challenge code, base64Url encoding                                                                                                                                                                                                     |                                              |
| excludeCredentials | array  | Yes                                          | Used to identify the credentials to be excluded, which can prevent the same user from registering the same authenticator multiple times Nested Type: <a href="#PublicKeyCredentialDescriptorDto">PublicKeyCredentialDescriptorDto</a>. |                                              |
| pubKeyCredParams   | array  | Yes                                          | Algorithm list, indicating which signature algorithms the relying party accepts Nested Type: <a href="#PublicKeyCredentialParametersDto">PublicKeyCredentialParametersDto</a>.                                                         |                                              |
| rp                 |        | Yes                                          | Relying party information Nested Type: <a href="#PublicKeyCredentialRpEntityDto">PublicKeyCredentialRpEntityDto</a>.                                                                                                                   |                                              |
| timeout            | number | Yes                                          | Timeout (milliseconds)                                                                                                                                                                                                                 | `60000`                                      |
| user               |        | Yes                                          | User information Nested Type: <a href="#PublicKeyCredentialUserEntityDto">PublicKeyCredentialUserEntityDto</a>.                                                                                                                        |                                              |

### <a id="PublicKeyCredentialDescriptorDto"></a> PublicKeyCredentialDescriptorDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                              | <div style="width:200px">Example Value</div> |
| ---------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| id         | string | Yes                                          | Allowed credential IDs                                                                                                                                                                                                                                                                                                                  |                                              |
| transports | array  | Yes                                          | Required authenticator communication method with the user agent:<br>- `ble`: authenticator that can be connected via Bluetooth<br>- `internal`: authenticator that is built into the platform and cannot be removed<br>- `nfc`: authenticator that can be connected via NFC<br>- `usb`: authenticator that can be connected via USB<br> |                                              |
| type       | string | Yes                                          | Fixed value, public-key                                                                                                                                                                                                                                                                                                                 | `public-key`                                 |

### <a id="PublicKeyCredentialParametersDto"></a> PublicKeyCredentialParametersDto

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>  | <div style="width:200px">Example Value</div> |
| ---- | ------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------- |
| alg  | number | Yes                                          | A negative integer indicating the algorithm |                                              |
| type | string | Yes                                          | Fixed value, public-key                     | `public-key`                                 |

### <a id="PublicKeyCredentialRpEntityDto"></a> PublicKeyCredentialRpEntityDto

| Name | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| id   | string | Yes                                          | Relying party domain                       | `example.com`                                |
| name | string | Yes                                          | Relying party Name                         |                                              |

### <a id="PublicKeyCredentialUserEntityDto"></a> PublicKeyCredentialUserEntityDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| id          | string | Yes                                          | User ID                                    |                                              |
| name        | string | Yes                                          | User name                                  | `zhangsan`                                   |
| displayName | string | Yes                                          | User name for display                      | `Zhang San`                                  |
