# Send Email

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

When sending emails, you must specify the email channel. Each mailbox can only send once per minute on the same channel.

## Method Name

`ManagementClient.sendEmail`

## Request Parameters

| Name    | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | <div style="width:200px">Example Value</div> |
| ------- | ------ | -------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| channel | string | Yes                                          | -                                           | SMS channel, specify the purpose of sending this SMS:<br>- `CHANNEL_LOGIN`: for user login<br>- `CHANNEL_REGISTER`: for user registration<br>- `CHANNEL_RESET_PASSWORD`: for resetting password<br>- `CHANNEL_VERIFY_EMAIL_LINK`: for verifying email address<br>- `CHANNEL_UPDATE_EMAIL`: for modifying email<br>- `CHANNEL_BIND_EMAIL`: for binding email<br>- `CHANNEL_UNBIND_EMAIL`: for unbinding email<br>- `CHANNEL_VERIFY_MFA`: for verifying MFA<br>- `CHANNEL_UNLOCK_ACCOUNT`: for self-service unlocking<br>- `CHANNEL_COMPLETE_EMAIL`: for completing email information when registering/logging in <br>- `CHANNEL_DELETE_ACCOUNT`: used to cancel an account<br> | `CHANNEL_LOGIN`                              |
| email   | string | Yes                                          | -                                           | Email address, case insensitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `test@example.com`                           |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.SendEmailDto;
import cn.authing.sdk.java.dto.SendEmailRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class SendEmailTest {
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

        SendEmailDto reqDto = new SendEmailDto();
        reqDto.setChannel(SendEmailDto.Channel.CHANNEL_COMPLETE_EMAIL);
        reqDto.setEmail("123@qq.com");
        SendEmailRespDto response = client.sendEmail(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `SendEmailRespDto`

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
