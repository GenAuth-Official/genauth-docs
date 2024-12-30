# Query QR code status

<!--
Warning⚠️:
Do not modify the document directly,
https://github.com/Authing/authing-docs-factory
Use this project to build
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API. It is consistent with API parameters and return results. The description of this document is incorrect. , please refer to V3 API.

According to the order in which the user scans the code, it is divided into six states: unscanned code, scanned code and waiting for user confirmation, user consent/cancellation of authorization, QR code expiration, and unknown error. The front end should give different feedback to the user through different states. You can learn about the detailed process of scanning QR code to log in through the following article: https://docs.genauth.ai/concepts/how-qrcode-works.html.

## Method name

`AuthenticationClient.checkQrCodeStatus`

## Request parameters

| Name     | Type   | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px "></div>Example value</div> |
| -------- | ------ | -------------------------------------- | ------------- | ------------------------------------------ | --------------------------------------------------- |
| qrcodeId | string | Yes                                    | -             | QR code unique ID                          |                                                     |

## Request response

Type: `CheckQRCodeStatusRespDto`

| Name       | Type                                                             | Description                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                           | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                                                     |
| message    | string                                                           | description information                                                                                                                                                                                                                                                                                                                                                     |
| apiCode    | number                                                           | Subdivided error code. The specific error type can be obtained through this error code (successful requests will not be returned). For a detailed list of error codes, please see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#t ag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90% 86/apiCode) |
| requestId  | string                                                           | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                                                |
| data       | <a href="#CheckQRCodeStatusDataDto">CheckQRCodeStatusDataDto</a> | response data                                                                                                                                                                                                                                                                                                                                                               |

Example results:

```json
{
"statusCode": 200,
"message": "Operation successful",
"requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
"data": {
"status": "PENDING",
"briefUserInfo": "Returns when the QR code status is scanned, authorized, or canceled authorization. If "Web Polling" is not turned on in the console Application Security - General Security - Login Security - APP Scan QR Code to Login Web Security The interface returns complete user information" (off by default). The interface will only return the user's avatar and display name. The front end can render the user's nickname and avatar based on this, and give the user a prompt that the QR code has been successfully scanned. ",
"tokenSet": {
"scope": "openid profile",
"access_token": "eyJhbGciOiJSxxxxx",
"id_token": "eyJhbGxxxx",
"refresh_token": "WPsGJbvpBjqXz6IJIr1UHKyrdVF",
"token_type": "bearer",
"expire_in": 7200
}
}
}
```

## Data structure

### <a id="CheckQRCodeStatusDataDto"></a> CheckQRCodeStatusDataDto

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                 | <div style="width:200px">Example value</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------- | ------ | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status        | string | Yes                                    | QR code status. According to the order in which the user scans the code, it is divided into PENDING (the code has not been scanned), SCANNED (the code has been scanned and is waiting for user confirmation), AUTHORIZED (the user has authorized), CANCELLED (cancel authorization), EXPIRED (the QR code has expired) and ERROR (unknown error) six states.                                                                                             | PENDING                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ticket        | string | No                                     | Returned when the QR code status is authorized. If "Web polling interface returns complete user information" is not turned on in the console application security - general security - login security - APP scan code to log in to web security (it is turned off by default), this ticket will be returned in exchange for a complete user information.                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| briefUserInfo |        | No                                     | Nested type: <a href="#QRCodeStatusBriefUserInfoDto">QRCodeStatusBriefUserInfoDto</a>.                                                                                                                                                                                                                                                                                                                                                                     | `Returned when the QR code status is scanned, authorized, or canceled authorization. If "Web polling interface returns complete user information" is not turned on in the console application security - general security - login security - APP scan code to log in to web security (it is turned off by default), the interface will only return the user's avatar and display name. The front end can render the user's nickname and avatar based on this, and give the user a prompt that the code has been successfully scanned. ` |
| tokenSet      |        | No                                     | When the QR code status is authorized and "Web polling interface returns complete user information" is turned on in the console application security - general security - login security - APP scan code to log in to the web security (the default is off status) switch, this data will be returned. It is recommended to use tickets in exchange for user information. Nested type: <a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a>. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### <a id="QRCodeStatusBriefUserInfoDto"></a> QRCodeStatusBriefUserInfoDto

| Name        | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example value</div> |
| ----------- | ------ | -------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| displayName | string | Yes                                    | User display nickname                      |                                              |
| photo       | string | yes                                    | user avatar                                |                                              |

### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto

| Name          | Type   | <div style="width:80px">Required</div> | <div style="width:300px">Description</div>                                                  | <div style="width:200px">Example value</div> |
| ------------- | ------ | -------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------- |
| scope         | string | No                                     | scope corresponding to access_token                                                         | `openid profile`                             |
| access_token  | string | No                                     | Credentials for interface calls, authorized to access resources within the limited time API | `eyJhbGciOiJSxxxxx`                          |
| id_token      | string | No                                     | The user's identity credentials, which will contain user information after parsing          | `eyJhbGxxxx`                                 |
| refresh_token | string | No                                     | refresh_token is used to obtain a new AccessToken                                           | `WPsGJbvpBjqXz6IJIr1UHKyrdVF`                |
| token_type    | string | yes                                    | token type                                                                                  | `bearer`                                     |
| expire_in     | number | Yes                                    | Expiration time in seconds                                                                  | `7200`                                       |
