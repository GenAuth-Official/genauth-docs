# Bind MFA authentication factors

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

Bind MFA factors.

## Method Name

`ManagementClient.enrollFactor`

## Request Parameters

| Name            | Type                                                                       | <div style="width:80px">Is it required</div> | <div style="width:60px">Default Value</div> | <div style="width:300px">Description</div>                                                                                   | <div style="width:200px">Example Value</div>                                                                                                                                   |
| --------------- | -------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| enrollmentData  | <a href="#EnrollFactorEnrollmentDataDto">EnrollFactorEnrollmentDataDto</a> | Yes                                          | -                                           | When binding an MFA authentication factor, the verification information required by the corresponding authentication factor. |                                                                                                                                                                                |
| enrollmentToken | string                                                                     | Yes                                          | -                                           | The enrollmentToken returned by the "Initiate MFA authentication factor binding request" interface is valid for one minute.  | `TQoCISidM0kBji0dxRi3afSDtkvvMiUphenIgLF87y+JOw4T8fDWOsHHXIcvZ2EVESXhTrfGyh1iGf52Cg9e9byeFQvm1VZ0QWrwmzwpntFAVtf1IP9LqVhmzXhBMFvLOcU/z1Eh/n0CrwX0uHNpJoMW9lp9AqHd9HvauaGKX+Y=` |
| factorType      | string                                                                     | Yes                                          | -                                           | MFA authentication factor Type:<br>- `OTP`: OTP<br>- `SMS`: SMS<br>- `EMAIL`: Email<br>- `FACE`: Face<br>                    | `SMS`                                                                                                                                                                          |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.EnrollFactorDto;
import cn.authing.sdk.java.dto.EnrollFactorEnrollmentDataDto;
import cn.authing.sdk.java.dto.EnrollFactorRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class EnrollFactorTest {
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

        EnrollFactorDto reqDto = new EnrollFactorDto();
        reqDto.setFactorType(EnrollFactorDto.FactorType.EMAIL);
       // The enrollmentToken returned by the "Initiate binding MFA authentication factor request" interface is valid for one minute.
        reqDto.setEnrollmentToken("xxx");
        EnrollFactorEnrollmentDataDto dataDto = new EnrollFactorEnrollmentDataDto();
        dataDto.setPassCode("123");
        reqDto.setEnrollmentData(dataDto);
        EnrollFactorRespDto response = client.enrollFactor(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```

## Request Response

Type： `EnrollFactorRespDto`

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

### <a id="EnrollFactorEnrollmentDataDto"></a> EnrollFactorEnrollmentDataDto

| Name     | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                              | <div style="width:200px">Example Value</div> |
| -------- | ------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| passCode | string | No                                           | This parameter is required when binding SMS, email verification code, or OTP authentication elements. The value is the SMS/email/OTP verification code. | `123456`                                     |
