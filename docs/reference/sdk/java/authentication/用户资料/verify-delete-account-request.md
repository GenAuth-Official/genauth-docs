# Initiate a request to cancel an account

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and the https://api-explorer.genauth.ai V3 API, and is consistent with the API parameters and return results. If the document description is incorrect, please refer to the V3 API.

When a user wants to cancel an account, he needs to provide the corresponding credentials. Currently, three verification methods are supported: **Use email verification code**, **Use mobile verification code**, and **Use password**.

## Method Name

`AuthenticationClient.verifyDeleteAccountRequest`

## Request Parameters

| Name                 | Type                                                                           | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                | <div style="width:200px"></div>Example Value</div> |
| -------------------- | ------------------------------------------------------------------------------ | -------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| verifyMethod         | string                                                                         | Yes                                          | -             | Account deregistration verification method: <br>- `PHONE_PASSCODE`: Use the phone number verification code method for verification. <br>- `EMAIL_PASSCODE`: Use the email verification code method for verification. <br>- `PASSWORD`: If the user has neither a phone number nor an email bound, the password can be used as a verification method. <br> | `PHONE_PASSCODE`                                   |
| phonePassCodePayload | <a href="#DeleteAccountByPhonePassCodeDto">DeleteAccountByPhonePassCodeDto</a> | No                                           | -             | Data verified by phone number verification code                                                                                                                                                                                                                                                                                                           |                                                    |
| emailPassCodePayload | <a href="#DeleteAccountByEmailPassCodeDto">DeleteAccountByEmailPassCodeDto</a> | No                                           | -             | Data verified by email verification code                                                                                                                                                                                                                                                                                                                  |                                                    |
| passwordPayload      | <a href="#DeleteAccountByPasswordDto">DeleteAccountByPasswordDto</a>           | No                                           | -             | Data verified by password                                                                                                                                                                                                                                                                                                                                 |                                                    |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.DeleteAccountByEmailPassCodeDto;
import cn.authing.sdk.java.dto.VerifyDeleteAccountRequestDto;
import cn.authing.sdk.java.dto.VerifyDeleteAccountRequestRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class VerifyDeleteAccountRequestTest {
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

        VerifyDeleteAccountRequestDto reqDto = new VerifyDeleteAccountRequestDto();
        reqDto.setVerifyMethod(VerifyDeleteAccountRequestDto.VerifyMethod.EMAIL_PASSCODE);
        DeleteAccountByEmailPassCodeDto passCodeDto = new DeleteAccountByEmailPassCodeDto();
        passCodeDto.setEmail("123@qq.com");
        // Email verification code, a SMS verification code can only be used once, and the default validity period is 5 minutes. You need to obtain it through the send email interface.
        passCodeDto.setPassCode("xxx");
        reqDto.setEmailPassCodePayload(passCodeDto);
        VerifyDeleteAccountRequestRespDto response = client.verifyDeleteAccountRequest(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type: `VerifyDeleteAccountRequestRespDto`

| Name       | Type                                                                               | Description                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                                                             | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                     |
| message    | string                                                                             | Description                                                                                                                                                                                                                                                                                                                                 |
| apiCode    | number                                                                             | Segment error code, through which you can get the specific error type (successful request does not return). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string                                                                             | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                |
| data       | <a href="#VerifyDeleteAccountRequestDataDto">VerifyDeleteAccountRequestDataDto</a> | Response Data                                                                                                                                                                                                                                                                                                                               |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "deleteAccountToken": "xxxx",
    "tokenExpiresIn": 60
  }
}
```

## Data Structure

### <a id="DeleteAccountByPhonePassCodeDto"></a> DeleteAccountByPhonePassCodeDto

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                      | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| phoneNumber      | string | Yes                                          | The phone number bound to this account, without the area code. If it is a foreign phone number, please specify the area code in the phoneCountryCode parameter. | `188xxxx8888`                                |
| passCode         | string | Yes                                          | SMS verification code. An SMS verification code can only be used once and is valid for one minute. You need to obtain it through the **Send SMS** interface.    | `123456`                                     |
| phoneCountryCode | string | No                                           | Mobile area code                                                                                                                                                | `+86`                                        |

### <a id="DeleteAccountByEmailPassCodeDto"></a> DeleteAccountByEmailPassCodeDto

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                        | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| email    | string | No                                           | Email address bound to this account, not case sensitive.                                                                                                                          |                                              |
| passCode | string | Yes                                          | Email verification code. A SMS verification code can only be used once, and the default validity period is 5 minutes. You need to obtain it through the **Send Email** interface. |                                              |

### <a id="DeleteAccountByPasswordDto"></a> DeleteAccountByPasswordDto

| Name                | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | <div style="width:200px">Example Value</div> |
| ------------------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| password            | string | Yes                                          | User password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                              |
| passwordEncryptType | string | No                                           | Password encryption type, supports RSA256 and SM2 algorithms. The default is `none`, no encryption. <br>- `none`: Do not encrypt the password, use plain text for transmission. <br>- `rsa`: Use RSA256 algorithm to encrypt the password, and need to use the RSA public key of GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of GenAuth service. <br>- `sm2`: Use [SM2 algorithm of national secret](https://baike.baidu.com/item/SM2/15081831) to encrypt the password, and need to use the SM2 public key of GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the SM2 public key of GenAuth service. <br> | sm2                                          |

### <a id="VerifyDeleteAccountRequestDataDto"></a> VerifyDeleteAccountRequestDataDto

| Name               | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                        | <div style="width:200px">Example Value</div> |
| ------------------ | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| deleteAccountToken | string | Yes                                          | Temporary Token used to cancel an account. You need to call the **CancelAccount** interface to perform the actual account cancellation operation. | `xxxx`                                       |
| tokenExpiresIn     | number | Yes                                          | Token validity period, the default is 60 seconds.                                                                                                 | `60`                                         |
