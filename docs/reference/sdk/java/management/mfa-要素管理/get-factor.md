# Get a bound MFA authentication factor

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Get a user-bound MFA Factor detail based on the Factor ID.

## Method Name

`ManagementClient.getFactor`

## Request Parameters

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |
| factorId | string | Yes                                          | -                                           | MFA Factor ID                              | `6229ffaxxxxxxxxcade3e3d9`                   |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetFactorDto;
import cn.authing.sdk.java.dto.GetFactorRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetFactorTest {
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

        GetFactorDto reqDto = new GetFactorDto();
        reqDto.setFactorId("6229ffaxxxxxxxxcade3e3d9");
        GetFactorRespDto response = client.getFactor(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `GetFactorRespDto`

| Name       | Type                               | Description                                                                                                             |
| ---------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| statusCode | number                             | Business status code. You can use this status code to determine whether the operation is successful. 200 means success. |
| message    | string                             | Description                                                                                                             |
| apiCode    | number                             | This error code is used to get the specific error type.                                                                 |
| requestId  | string                             | Request ID. Returned when the request fails.                                                                            |
| data       | <a href="#FactorDto">FactorDto</a> | MFA Factor detail                                                                                                       |

Example Results：

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "factorId": "6229ffaxxxxxxxxcade3e3d9",
    "factorType": "SMS",
    "profile": {
      "phoneNumber": "188xxxx8888",
      "phoneCountryCode": "+86"
    }
  }
}
```

## Data Structure

### <a id="FactorDto"></a> FactorDto

| Name       | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div>             |
| ---------- | ------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------------------- |
| factorId   | string | Yes                                          | MFA authentication factor ID               | `6229ffaxxxxxxxxcade3e3d9`                               |
| factorType | string | Yes                                          | MFA authentication factor type             | OTP                                                      |
| profile    | object | Yes                                          | MFA authentication factor information      | `{"phoneNumber":"188xxxx8888","phoneCountryCode":"+86"}` |
