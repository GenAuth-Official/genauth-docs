# Get all bound MFA authentication factors

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

GenAuth currently supports four types of MFA authentication factors: SMS, email verification code, OTP, and face.

## Method Name

`ManagementClient.listEnrolledFactors`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| ---- | ---- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | -------------------------------------------- |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.ListEnrolledFactorsRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class ListEnrolledFactorsTest {
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

        ListEnrolledFactorsRespDto response = client.listEnrolledFactors();
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `ListEnrolledFactorsRespDto`

| Name       | Type   | Description                                                                                                  |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number | Business status code, which can be used to determine whether the operation is successful. 200 means success. |
| message    | string | Description                                                                                                  |
| apiCode    | number | Segmented error code, which can be used to get the specific error type.                                      |
| requestId  | string | Request ID. Returned when the request fails.                                                                 |
| data       | array  | MFA Factor list                                                                                              |

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
