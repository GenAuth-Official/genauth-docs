# Initiate a verification request to modify the mailbox

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

When the end user modifies the mailbox on his own, he needs to provide the corresponding verification method. This interface is used to verify the user's request to modify the mailbox Yes No legal. Currently, it supports verification through **Mailbox Verification Code**. You need to call the Send Mail interface to send the corresponding email verification code first.

## Method Name

`ManagementClient.verifyUpdateEmailRequest`

## Request Parameters

| Name                 | Type                                                                       | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                             | <div style="width:200px">Example Value</div> |
| -------------------- | -------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| emailPassCodePayload | <a href="#UpdateEmailByEmailPassCodeDto">UpdateEmailByEmailPassCodeDto</a> | Yes                                          | -                                           | Data verified using the email verification code                                                                                                                                        |                                              |
| verifyMethod         | string                                                                     | Yes                                          | -                                           | Modify the verification method used by the current email:<br>- `EMAIL_PASSCODE`: Verify using the email verification code. Currently, only this verification method is supported. <br> | `EMAIL_PASSCODE`                             |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.UpdateEmailByEmailPassCodeDto;
import cn.authing.sdk.java.dto.VerifyUpdateEmailRequestDto;
import cn.authing.sdk.java.dto.VerifyUpdateEmailRequestRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class VerifyUpdateEmailRequestTest {
    // Need to be replaced with your GenAuth App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // Need to be replaced with your GenAuth App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // Need to be replaced with your GenAuth App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";
    // Need to be replaced with your GenAuth Access Token
    private static final String ACCESS_TOKEN = "AUTHING_ACCESS_TOKEN";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);
        clientOptions.setAccessToken(ACCESS_TOKEN);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        VerifyUpdateEmailRequestDto reqDto = new VerifyUpdateEmailRequestDto();
        reqDto.setVerifyMethod(VerifyUpdateEmailRequestDto.VerifyMethod.EMAIL_PASSCODE);
        UpdateEmailByEmailPassCodeDto passCodeDto = new UpdateEmailByEmailPassCodeDto();
        passCodeDto.setNewEmail("123@qq.com");
        passCodeDto.setNewEmailPassCode("123");
        reqDto.setEmailPassCodePayload(passCodeDto);
        VerifyUpdateEmailRequestRespDto response = client.verifyUpdateEmailRequest(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `VerifyUpdateEmailRequestRespDto`

| Name       | Type                                                                     | Description                                                                                                             |
| ---------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message    | string                                                                   | Description                                                                                                             |
| apiCode    | number                                                                   | This error code is used to get the specific error type.                                                                 |
| requestId  | string                                                                   | Request ID. Returned when the request fails.                                                                            |
| data       | <a href="#VerifyUpdateEmailRequestData">VerifyUpdateEmailRequestData</a> | Response data                                                                                                           |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "tokenExpiresIn": 60
  }
}
```

## Data Structure

### <a id="UpdateEmailByEmailPassCodeDto"></a> UpdateEmailByEmailPassCodeDto

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                       | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| newEmail         | string | Yes                                          | New email                                                                                                                                        | `new@example.com`                            |
| newEmailPassCode | string | Yes                                          | New email verification code                                                                                                                      | `123456`                                     |
| oldEmail         | string | No                                           | Old email. If the user pool has enabled the previous email to be verified when changing the email, this parameter is required.                   | `old@example.com`                            |
| oldEmailPassCode | string | No                                           | Old email verification code. If the user pool has enabled the previous email to be verified when changing the email, this parameter is required. | `123456`                                     |

### <a id="VerifyUpdateEmailRequestData"></a> VerifyUpdateEmailRequestData

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                     | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| updateEmailToken | string | Yes                                          | Token used to modify the current mailbox. You need to use this token to call the **Modify Mailbox** interface. |                                              |
| tokenExpiresIn   | number | Yes                                          | Token validity period, the time is 60 seconds.                                                                 | `60`                                         |
