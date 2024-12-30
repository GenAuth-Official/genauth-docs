# Bind a mobile phone number

<!--
Warning⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

If the user has not yet **bound a mobile phone number**, this interface can be used for the user to **self-bind** a mobile phone number. If the user has already bound a mobile phone number and wants to modify the mobile phone number, please use the **Modify mobile phone number** interface. You need to call the **Send SMS** interface to send the SMS verification code first.

## Method Name

`AuthenticationClient.bindPhone`

## Request Parameters

| Name             | Type   | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                                                                                                      | <div style="width:200px"></div>Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| passCode         | string | Yes                                          | -             | SMS verification code. Note that a SMS verification code guide can only be used once and has an expiration date.                                                                                                                                                                                                                                                                                | `123456`                                           |
| phoneNumber      | string | Yes                                          | -             | Mobile phone number without area code. If it is a foreign mobile phone number, please specify the area code in the phoneCountryCode parameter.                                                                                                                                                                                                                                                  | `188xxxx8888`                                      |
| phoneCountryCode | string | No                                           | -             | Mobile phone area code. This field is optional for mainland China mobile phone numbers. The GenAuth SMS service does not yet support international mobile phone numbers. You need to configure the corresponding international SMS service in the GenAuth console. For a complete list of mobile phone area codes, please refer to https://en.wikipedia.org/wiki/List_of_country_calling_codes. | `+86`                                              |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.BindPhoneDto;
import cn.authing.sdk.java.dto.CommonResponseDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class BindPhoneTest {
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

        BindPhoneDto reqDto = new BindPhoneDto();
        reqDto.setPassCode("123");
        reqDto.setPhoneNumber("123456");
        CommonResponseDto response = client.bindPhone(reqDto);
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
