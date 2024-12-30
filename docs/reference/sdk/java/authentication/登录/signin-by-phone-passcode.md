# Use mobile phone number + verification code to log in

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Use mobile phone number + verification code to log in.

## Request Parameters

| Name             | Type                                             | <div style="width:80px">Is it required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| ---------------- | ------------------------------------------------ | -------------------------------------------- | ------------- | ------------------------------------------ | -------------------------------------------------- |
| phone            | String                                           | Yes                                          | -             | Phone number                               | `188xxxx8888`                                      |
| phoneCountryCode | String                                           | No                                           | -             | Phone number area code                     | `+86`                                              |
| passCode         | String                                           | Yes                                          | -             | SMS verification code                      | `1234`                                             |
| options          | <a href="#SignInOptionsDto">SignInOptionsDto</a> | No                                           | -             | Optional parameters                        | `{"passwordEncryptType":"none"}`                   |

## Sample Code

```java
import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.LoginTokenRespDto;
import cn.authing.sdk.java.dto.SignInOptionsDto;
import cn.authing.sdk.java.enums.AuthMethodEnum;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class SignInByPhonePassCodeTest {
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
        LoginTokenRespDto response = client.signInByPhonePassCode(
                "123@qq,com",
                "123",
                "123",
                new SignInOptionsDto()
        );
        System.out.println(JsonUtils.serialize(response));
    }
}
```

## Request Response

Type： `LoginTokenRespDto`

| Name       | Type                                                               | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                             | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string                                                             | Description                                                                                                  |
| apiCode    | number                                                             | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string                                                             | Request ID. Returned when the request fails.                                                                 |
| data       | <a href="#LoginTokenResponseDataDto">LoginTokenResponseDataDto</a> | Response data                                                                                                |

Example Results：

!!!include(reference/sdk/common/token_response_json.md)!!!

## Data Structure

### <a id="SignInOptionsDto"></a> SignInOptionsDto

| Name                | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <div style="width:200px">Example Value</div> |
| ------------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| scope               | string  | no                                           | The permissions that need to be requested, must include openid. If you need to obtain the mobile phone number and email, you need to include phone email; if you need refresh_token, you need to include offline_access. Please separate multiple scopes with spaces. The decoded content of id_token will contain the user information related fields corresponding to these scopes. <br>- `openid`: Must be included. <br>- `profile`: Returns birthdate, family_name, gender, given_name, locale, middle_name, name, nickname, picture, preferred_username, profile, updated_at, website, zoneinfo fields. <br>- `username`: Returns username. <br>- `email`: Returns email, email_verified. <br>- `phone`: Returns phone_number, phone_number_verified. <br>- `offline_access`: If this parameter exists, the token interface will return the refresh_token field. <br>- `roles`: Returns the user's role list. <br>- `external_id`: The user ID of the original system. <br>- `extended_fields`: Returns the user's extended field information, the content is an object, the key is the extended field name, and the value is the extended field value. <br>- `tenant_id`: Returns the user's tenant ID. <br> | `openid profile`                             |
| clientIp            | string  | No                                           | The real IP address of the client. By default, GenAuth will identify the IP address of the request source as the IP address of the user's login. If you call this interface in the backend server, you need to set this IP to the user's real request IP.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `192.168.0.1`                                |
| context             | string  | no                                           | Additional request context that will be passed to the `context` object of the [Pipeline](https://docs.genauth.ai/v2/guides/pipeline/) before and after authentication. Learn [how to get additional context passed in the `context` parameter of Pipeline](https://docs.genauth.ai/v2/guides/pipeline/context-object.html).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `{"source":"utm"}`                           |
| tenantId            | string  | No                                           | Tenant ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `625783d629f2bd1f5ddddd98c`                  |
| customData          | object  | No                                           | To set additional user custom data, you need to [configure custom data](https://docs.genauth.ai/v2/guides/users/user-defined-field/) in the GenAuth console first.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `{"school":"pku","age":"20"}`                |
| autoRegister        | boolean | No                                           | Whether to enable automatic registration. If set to true, an account will be automatically created for the user if it does not exist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                              |
| captchaCode         | string  | No                                           | Captcha graphic verification code, case insensitive. When the **security policy** is set to **verification code** and the **limit of failed logins** is triggered, you need to fill in the graphic verification code for the next login.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `a8nz`                                       |
| passwordEncryptType | string  | No                                           | Password encryption type, supports sm2 and rsa. No encryption is required by default. <br>- `none`: Do not encrypt the password and transmit it in plain text. <br>- `rsa`: Encrypt the password using the RSA256 algorithm. The RSA public key of the GenAuth service is required for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service. <br>- `sm2`: Use [National Encryption SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the SM2 public key of the GenAuth service. <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | sm2                                          |

### <a id="LoginTokenResponseDataDto"></a> LoginTokenResponseDataDto

!!!include(reference/sdk/common/token_response_table.md)!!!
