# Bind MFA authentication elements

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to V3 API.

Bind MFA elements.

## Method Name

`AuthenticationClient.enrollFactor`

## Request Parameters

| Name            | Type                                                                       | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>                                                                                              | <div style="width:200px"></div>Example Value</div>                                                                                                                             |
| --------------- | -------------------------------------------------------------------------- | -------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| enrollmentData  | <a href="#EnrollFactorEnrollmentDataDto">EnrollFactorEnrollmentDataDto</a> | Yes                                          | -             | Verification information required by the corresponding authentication factor when binding the MFA authentication factor.                |                                                                                                                                                                                |
| enrollmentToken | string                                                                     | Yes                                          | -             | The enrollmentToken returned by the "Initiate Binding MFA Authentication Factor Request" interface. This token is valid for one minute. | `TQoCISidM0kBji0dxRi3afSDtkvvMiUphenIgLF87y+JOw4T8fDWOsHHXIcvZ2EVESXhTrfGyh1iGf52Cg9e9byeFQvm1VZ0QWrwmzwpntFAVtf1IP9LqVhmzXhBMFvLOcU/z1Eh/n0CrwX0uHNpJoMW9lp9AqHd9HvauaGKX+Y=` |
| factorType      | string                                                                     | Yes                                          | -             | MFA authentication factor Type: <br>- `OTP`: OTP<br>- `SMS`: SMS<br>- `EMAIL`: Email<br>- `FACE`: Face<br>                              | `SMS`                                                                                                                                                                          |

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
        // The enrollmentToken returned by the "Initiate MFA authentication factor binding request" interface is valid for one minute.
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

Type: `EnrollFactorRespDto`

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

### <a id="EnrollFactorEnrollmentDataDto"></a> EnrollFactorEnrollmentDataDto

| Name            | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div>                                                                                                              | <div style="width:200px">Example Value</div> |
| --------------- | ------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| passCode        | string  | No                                           | This parameter is required when binding SMS, email verification code, or OTP authentication elements. The value is the SMS/email/OTP verification code. | `123456`                                     |
| photo           | string  | No                                           | This parameter is required when binding FACE authentication elements. The value is the bound face picture link.                                         | `132434235ad244`                             |
| isExternalPhoto | boolean | No                                           | This parameter is required when binding FACE authentication elements. Whether it is an external link picture.                                           | `true`                                       |
