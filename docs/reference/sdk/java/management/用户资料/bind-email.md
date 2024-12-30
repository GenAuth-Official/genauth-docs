# Bind mailbox

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

If the user has not yet **bound an email address**, this interface can be used for the user to **self-bind an email address**. If the user has already bound an email address and wants to modify the email address, please use the **Modify email address** interface. You need to call the **Send email** interface to send the email verification code first.

## Method Name

`ManagementClient.bindEmail`

## Request Parameters

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                   | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| passCode | string | Yes                                          | -                                           | Email verification code. An email verification code can only be used once and has a certain validity period. | `123456`                                     |
| email    | string | Yes                                          | -                                           | Email, case insensitive.                                                                                     | `test@example.com`                           |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.BindEmailDto;
import cn.authing.sdk.java.dto.CommonResponseDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class BindEmailTest {
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

        BindEmailDto reqDto = new BindEmailDto();
        reqDto.setEmail("123@qq.com");
        reqDto.setPassCode("123");
        CommonResponseDto response = client.bindEmail(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `CommonResponseDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. Returned when the request fails.                                                                 |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## Data Structure
