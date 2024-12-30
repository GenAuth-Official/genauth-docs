# Forgot password

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This endpoint is used to reset the password by **mobile phone verification code** or **email verification code** after the user forgets the password. This interface requires the temporary credential `passwordResetToken` for resetting the password, which needs to be obtained through the **Initiate a Forgot Password Request** interface.

## Method Name

`ManagementClient.resetPassword`

## Request Parameters

| Name                | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | <div style="width:200px">Example Value</div> |
| ------------------- | ------ | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| password            | string | Yes                                          | -                                           | password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                              |
| passwordResetToken  | string | Yes                                          | -                                           | token for resetting password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                              |
| passwordEncryptType | string | No                                           | none                                        | Password encryption type, supports encryption using RSA256 and SM2 algorithms. The default is `none`, no encryption. <br>- `none`: Do not encrypt the password, use plain text for transmission. <br>- `rsa`: Use RSA256 algorithm to encrypt the password, and need to use the RSA public key of GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of GenAuth service. <br>- `sm2`: Use [SM2 algorithm of national secret](https://baike.baidu.com/item/SM2/15081831) to encrypt the password, and need to use the SM2 public key of GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the SM2 public key of GenAuth service. <br> | `none`                                       |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.IsSuccessRespDto;
import cn.authing.sdk.java.dto.ResetPasswordDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class ResetPasswordTest {
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

        ResetPasswordDto reqDto = new ResetPasswordDto();
        reqDto.setPassword("123");
        // This interface requires the provision of a temporary credential passwordResetToken for resetting the password. This parameter needs to be obtained by initiating a forgotten password request interface.
        reqDto.setPasswordResetToken("xxx");
        IsSuccessRespDto response = client.resetPassword(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `IsSuccessRespDto`

| Name       | Type                                     | Description                                                                                                             |
| ---------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                                   | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message    | string                                   | Description                                                                                                             |
| apiCode    | number                                   | This error code is used to get the specific error type.                                                                 |
| requestId  | string                                   | Request ID. Returned when the request fails.                                                                            |
| data       | <a href="#IsSuccessDto">IsSuccessDto</a> | Whether the operation is successful                                                                                     |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## Data Structure

### <a id="IsSuccessDto"></a> IsSuccessDto

| Name    | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ------- | ------- | -------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| success | boolean | Yes                                          | Whether the operation is successful        | `true`                                       |
