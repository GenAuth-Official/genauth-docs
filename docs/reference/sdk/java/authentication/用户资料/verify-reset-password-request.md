# Initiate a request for forgetting password

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

When the user forgets the password, the password can be retrieved through this endpoint. The user needs to use relevant verification methods for verification. Currently, **Email verification code** and **Mobile phone number verification code** are supported.

## Method Name

`AuthenticationClient.verifyResetPasswordRequest`

## Request Parameters

| Name                 | Type                                                                           | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>                                                                                                                                                        | <div style="width:200px"></div>Example Value</div> |
| -------------------- | ------------------------------------------------------------------------------ | -------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| verifyMethod         | string                                                                         | Yes                                          | -             | Verification method used for forgotten password request:<br>- `EMAIL_PASSCODE`: Verification by email verification code<br>- `PHONE_PASSCODE`: Verification by mobile phone verification code<br> | `EMAIL_PASSCODE`                                   |
| phonePassCodePayload | <a href="#ResetPasswordByPhonePassCodeDto">ResetPasswordByPhonePassCodeDto</a> | No                                           | -             | Data verified by mobile phone verification code                                                                                                                                                   |                                                    |
| emailPassCodePayload | <a href="#ResetPasswordByEmailPassCodeDto">ResetPasswordByEmailPassCodeDto</a> | No                                           | -             | Data verified by email verification code                                                                                                                                                          |                                                    |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.PasswordResetVerifyResp;
import cn.authing.sdk.java.dto.ResetPasswordByEmailPassCodeDto;
import cn.authing.sdk.java.dto.VerifyResetPasswordRequestDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class VerifyResetPasswordRequestTest {
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

        VerifyResetPasswordRequestDto reqDto = new VerifyResetPasswordRequestDto();
        reqDto.setVerifyMethod(VerifyResetPasswordRequestDto.VerifyMethod.EMAIL_PASSCODE);
        ResetPasswordByEmailPassCodeDto passCodeDto = new ResetPasswordByEmailPassCodeDto();
        // Email verification code, a SMS verification code can only be used once, and the default validity period is 5 minutes. You need to obtain it through the send email interface.
        passCodeDto.setPassCode("xxx");
        passCodeDto.setEmail("123@qq.com");
        reqDto.setEmailPassCodePayload(passCodeDto);
        PasswordResetVerifyResp response = client.verifyResetPasswordRequest(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type: `PasswordResetVerifyResp`

| Name       | Type                                                   | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                 | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                     |
| message    | string                                                 | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number                                                 | Segment error code, through which you can get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                 | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | <a href="#ResetPasswordVerify">ResetPasswordVerify</a> | Response Data                                                                                                                                                                                                                                                                                                                               |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {}
}
```

## Data Structure

### <a id="ResetPasswordByPhonePassCodeDto"></a> ResetPasswordByPhonePassCodeDto

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                       | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| phoneNumber      | string | Yes                                          | The phone number bound to this account, without the area code. If it is a foreign phone number, please specify the area code in the phoneCountryCode parameter.                                                                                                                                                                                                                                  | `188xxxx8888`                                |
| passCode         | string | Yes                                          | SMS verification code. An SMS verification code can only be used once and is valid for one minute. You need to obtain it through the **Send SMS** interface.                                                                                                                                                                                                                                     | `123456`                                     |
| phoneCountryCode | string | No                                           | Mobile phone area code. It is optional for mobile phone numbers in mainland China. The GenAuth SMS service does not currently support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                        |

### <a id="ResetPasswordByEmailPassCodeDto"></a> ResetPasswordByEmailPassCodeDto

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                 | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| email    | string | No                                           | Email address bound to this account, case insensitive.                                                                                                                     |                                              |
| passCode | string | Yes                                          | Email verification code. An SMS verification code can only be used once and is valid for 5 minutes by default. You need to obtain it through the **Send Email** interface. |                                              |

### <a id="ResetPasswordVerify"></a> ResetPasswordVerify

| Name               | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------------------ | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| passwordResetToken | string | Yes                                          | Token for resetting passwords              |                                              |
| tokenExpiresIn     | number | Yes                                          | Expiration time in seconds.                |                                              |
