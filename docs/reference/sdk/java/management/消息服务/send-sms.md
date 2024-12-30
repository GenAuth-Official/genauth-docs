# sending a text message

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

When sending SMS, you must specify the SMS Channel. Each mobile phone number can only send once per minute on the same channel.

## Method Name

`ManagementClient.sendSms`

## Request Parameters

| Name             | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | <div style="width:200px">Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| channel          | string | Yes                                          | -                                           | SMS channel, specify the purpose of sending this SMS:<br>- `CHANNEL_LOGIN`: for user login<br>- `CHANNEL_REGISTER`: for user registration<br>- `CHANNEL_RESET_PASSWORD`: for resetting password<br>- `CHANNEL_BIND_PHONE`: for binding mobile phone number<br>- `CHANNEL_UNBIND_PHONE`: for unbinding mobile phone number<br>- `CHANNEL_BIND_MFA`: for binding MFA<br>- `CHANNEL_VERIFY_MFA`: for verifying MFA<br>- `CHANNEL_UNBIND_MFA`: for unbinding MFA<br>- `CHANNEL_COMPLETE_PHONE`: for completing mobile phone number information when registering/logging in <br>- `CHANNEL_IDENTITY_VERIFICATION`: for user real-name authentication<br>- `CHANNEL_DELETE_ACCOUNT`: used to cancel an account<br> | `CHANNEL_LOGIN`                              |
| phoneNumber      | string | Yes                                          | -                                           | Phone number without area code. If Yes, it is a foreign phone number, please specify the area code in the phoneCountryCode parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | `188xxxx8888`                                |
| phoneCountryCode | string | No                                           | -                                           | Phone area code. It is optional for mainland China phone numbers. The GenAuth SMS service does not currently support international phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes.                                                                                                                                                                                                                                                                                                                                            | `+86`                                        |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.SendSMSDto;
import cn.authing.sdk.java.dto.SendSMSRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class SendSmsTest {
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

        SendSMSDto reqDto = new SendSMSDto();
        reqDto.setChannel(SendSMSDto.Channel.CHANNEL_BIND_MFA);
        reqDto.setPhoneNumber("123456");
        SendSMSRespDto response = client.sendSms(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `SendSMSRespDto`

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
