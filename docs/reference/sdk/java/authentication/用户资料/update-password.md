# Change password

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

This endpoint is used for users to change their passwords on their own. If the user has set a password before, the user's original password needs to be provided as a credential. If the user forgets the current password, please use the **Forgot Password** interface.

## Method Name

`AuthenticationClient.updatePassword`

## Request Parameters

| Name                | Type   | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <div style="width:200px"></div>Example Value</div> |
| ------------------- | ------ | -------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| newPassword         | string | Yes                                          | -             | New password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                    |
| oldPassword         | string | No                                           | -             | Original password. If the user currently has a password set, this parameter is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                    |
| passwordEncryptType | string | No                                           | none          | Password encryption type. Supports encryption using RSA256 and SM2 algorithms. The default is `none`, which means no encryption. <br>- `none`: Do not encrypt the password and transmit it in plain text. <br>- `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the GenAuth service. <br>- `sm2`: Use the [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the GenAuth service for encryption. Please read the **Introduction** section to learn how to obtain the SM2 public key of the GenAuth service. <br> | `none`                                             |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.CommonResponseDto;
import cn.authing.sdk.java.dto.UpdatePasswordDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class UpdatePasswordTest {
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

        UpdatePasswordDto reqDto = new UpdatePasswordDto();
        reqDto.setOldPassword("123");
        reqDto.setNewPassword("123");
        CommonResponseDto response = client.updatePassword(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type: `CommonResponseDto`

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusCode | number | Business status code. You can use this status code to determine whether the operation is successful. 200 means success.                                                                                                                                                                                                                             |
| message    | string | Description                                                                                                                                                                                                                                                                                                                                         |
| apiCode    | number | Segmented error code, through which the specific error type can be obtained (not returned for successful requests). For a detailed list of error codes, see: [API Code List](https://api-explorer.genauth.ai/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId  | string | Request ID. Returned when the request fails.                                                                                                                                                                                                                                                                                                        |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data Structure
