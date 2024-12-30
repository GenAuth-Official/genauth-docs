# Query QR code status

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

According to the order in which users scan the code, there are six states: not scanned, scanned and waiting for user confirmation, user consent/cancellation of authorization, QR code expired, and unknown error. The front end should give users different feedback through different states. You can learn the detailed process of scanning code login from the following article: https://docs.genauth.ai/v2/concepts/how-qrcode-works.html.

## Method Name

`ManagementClient.checkQrCodeStatus`

## Request Parameters

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| qrcodeId | string | Yes                                          | -                                           | QR code unique ID                          |                                              |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.CheckQRCodeStatusRespDto;
import cn.authing.sdk.java.dto.CheckQrcodeStatusDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class CheckQrCodeStatusTest {
    // Need to be replaced with your GenAuth App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // Need to be replaced with your GenAuth App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // Need to be replaced with your GenAuth App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        CheckQrcodeStatusDto reqDto = new CheckQrcodeStatusDto();
        reqDto.setQrcodeId("123");
        CheckQRCodeStatusRespDto response = client.checkQrCodeStatus(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `CheckQRCodeStatusRespDto`

| Name       | Type                                                             | Description                                                                                                  |
| ---------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                           | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                           | Description                                                                                                  |
| apiCode    | number                                                           | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                           | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#CheckQRCodeStatusDataDto">CheckQRCodeStatusDataDto</a> | Response data                                                                                                |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "status": "PENDING",
    "briefUserInfo": "Returned when the QR code status is scanned, authorized, or deauthorized. If \"Web polling interface returns complete user information\" is not enabled in the console Application Security - General Security - Login Security - APP Scan Code Login Web Security (disabled by default), the interface will only return the user's avatar and display name. The front end can render the user's nickname and avatar based on this, and give the user a prompt that the code has been successfully scanned.",
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

| Name          | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                            | <div style="width:200px">Example Value</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status        | string | yes                                          | QR code status. According to the order of user scanning, there are six statuses: PENDING (not scanned), SCANNED (scanned and waiting for user confirmation), AUTHORIZED (user authorized), CANCELLED (cancelled authorization), EXPIRED (QR code expired), and ERROR (unknown error).                                                                                                                                                 | PENDING                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ticket        | string | no                                           | Returned when the QR code status is authorized. If "Web polling interface returns complete user information" is not enabled in the console Application Security - General Security - Login Security - APP Scan Code Login Web Security (disabled by default), this ticket will be returned to exchange for complete user information.                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| briefUserInfo |        | no                                           | Nested Type: <a href="#QRCodeStatusBriefUserInfoDto">QRCodeStatusBriefUserInfoDto</a>.                                                                                                                                                                                                                                                                                                                                                | `Returned when the QR code status is scanned, authorized, or canceled. If "Web polling interface returns complete user information" is not enabled in Console Application Security - General Security - Login Security - APP Scan Code Login Web Security (off by default), the interface will only return the user's avatar and display name. The front end can render the user's nickname and avatar based on this and give the user a prompt that the code has been successfully scanned. ` |
| tokenSet      |        | No                                           | This data will only be returned when the QR code status is authorized and the "Web polling interface returns complete user information" switch is enabled in Console Application Security - General Security - Login Security - APP Scan Code Login Web Security (off by default). It is recommended to use ticket to exchange for user information. Nested Type: <a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a>. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### <a id="QRCodeStatusBriefUserInfoDto"></a> QRCodeStatusBriefUserInfoDto

| Name        | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ----------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| displayName | string | Yes                                          | User display nickname                      |                                              |
| photo       | string | Yes                                          | User avatar                                |                                              |

### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto

!!!include(reference/sdk/common/token_response_table.md)!!!
