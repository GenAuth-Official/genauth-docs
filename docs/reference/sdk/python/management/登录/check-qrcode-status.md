# Query QR code status

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

According to the order in which users scan the code, there are six states: not scanned, scanned and waiting for user confirmation, user consent/cancellation of authorization, QR code expired, and unknown error. The front end should give users different feedback through different states. You can learn the detailed process of scanning code login from the following article: https://docs.genauth.ai/concepts/how-qrcode-works.html.

## Method name

`ManagementClient.check_qr_code_status`

## Request parameters

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| qrcodeId | string | Yes                                          | -                                           | QR code unique ID                          |                                             |

## Request response

Type: `CheckQRCodeStatusRespDto`

| Name       | Type                                                             | Description                                                                                                  |
| ---------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                           | Description                                                                                                  |
| apiCode    | number                                                           | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                           | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#CheckQRCodeStatusDataDto">CheckQRCodeStatusDataDto</a> | Response data                                                                                                |

Sample result:

```json
{
"statusCode": 200,
"message": "Operation successful",
"requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
"data": {
"status": "PENDING",
"briefUserInfo": "Returned when the QR code status is scanned, authorized, or deauthorized. If "Web polling interface returns complete user information" is not enabled in the console Application Security - General Security - Login Security - APP Scan Code Login Web Security (it is disabled by default), the interface will only return the user's avatar and display name. The front end can render the user's nickname and avatar based on this, giving the user a prompt that the code has been successfully scanned. ",
"tokenSet": {
"access_token": "eyJhbGciOiJSxxxxx",
"id_token": "eyJhbGxxxx",
"refresh_token": "WPsGJbvpBjqXz6IJIr1UHKyrdVF",
"token_type": "bearer",
"expire_in": 7200
}
}
}
```

## Data Structure

### <a id="CheckQRCodeStatusDataDto"></a> CheckQRCodeStatusDataDto

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                            | <div style="width:200px">Sample value</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status        | string | Yes                                          | QR code status. According to the order in which the user scans the code, there are six states: PENDING (not scanned), SCANNED (scanned and waiting for user confirmation), AUTHORIZED (user authorized), CANCELLED (cancelled authorization), EXPIRED (QR code expired), and ERROR (unknown error).                                                                                                                                   | PENDING                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ticket        | string | No                                           | Returned when the QR code status is authorized. If "Web polling interface returns complete user information" is not enabled in the console Application Security - General Security - Login Security - APP Scan Code Login Web Security (disabled by default), this ticket will be returned to exchange for complete user information.                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| briefUserInfo |        | No                                           | Nested type: <a href="#QRCodeStatusBriefUserInfoDto">QRCodeStatusBriefUserInfoDto</a>.                                                                                                                                                                                                                                                                                                                                                | `Returned when the QR code status is scanned, authorized, or canceled. If "Web polling interface returns complete user information" is not enabled in Console Application Security - General Security - Login Security - APP Scan Code Login Web Security (off by default), the interface will only return the user's avatar and display name. The front end can render the user's nickname and avatar based on this and give the user a prompt that the code has been successfully scanned. ` |
| tokenSet      |        | No                                           | This data will only be returned when the QR code status is authorized and the "Web polling interface returns complete user information" switch is enabled in Console Application Security - General Security - Login Security - APP Scan Code Login Web Security (off by default). It is recommended to use ticket to exchange for user information. Nested type: <a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a>. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### <a id="QRCodeStatusBriefUserInfoDto"></a> QRCodeStatusBriefUserInfoDto

| Name        | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ----------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| displayName | string | Yes                                           | User display nickname                      |                                             |
| photo       | string | Yes                                           | User avatar                                |                                             |

### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto

!!!include(reference/sdk/common/token_response_table.md)!!!
