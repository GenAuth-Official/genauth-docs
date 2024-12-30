# Modify mobile phone number

<!--
Warning ⚠️:
Do not modify this document directly,
https://github\.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory and https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the document description is incorrect, please refer to V3 API.

The end user needs to provide the corresponding verification method to modify the mobile phone number on his own, see [Initiate verification request to modify mobile phone number](#tag/User information/API%20List/operation/ProfileV3Controller_updatePhoneVerification).
This parameter requires a one-time temporary credential `updatePhoneToken`, which needs to be obtained from the **Initiate verification request to modify mobile phone number** interface.

## Method Name

`AuthenticationClient.updatePhone`

## Request Parameters

| Name             | Type   | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div>                                                                                                                           | <div style="width:200px"></div>Example Value</div> |
| ---------------- | ------ | -------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| updatePhoneToken | string | Yes                                          | -             | The token used to temporarily modify the mobile phone number can be obtained from the **Initiate verification request to modify the mobile phone number** interface. | `xxxx`                                             |

## Sample Code

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.CommonResponseDto;
import cn.authing.sdk.java.dto.UpdatePhoneDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class UpdatePhoneTest {
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

        UpdatePhoneDto reqDto = new UpdatePhoneDto();
        // The token used to temporarily change the mobile phone number can be obtained from the verification request interface for initiating the change of the mobile phone number.
        reqDto.setUpdatePhoneToken("xxx");
        CommonResponseDto response = client.updatePhone(reqDto);
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
